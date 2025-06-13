// Service Worker for Push Notifications

const CACHE_NAME = "am-kelavi-v1"

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/", "/index.html", "/globals.css", "/notification-icon.png"])
    }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Fetch event - serve from cache if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    }),
  )
})

// Push event - show notification when push is received
self.addEventListener("push", (event) => {
  let data = {}

  try {
    data = event.data.json()
  } catch (e) {
    data = {
      title: "עם כלביא - עדכון חשוב",
      body: event.data ? event.data.text() : "עדכון חדש זמין",
      icon: "/notification-icon.png",
      tag: "am-kelavi-update",
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title || "עם כלביא - עדכון חשוב", {
      body: data.body || "עדכון חדש זמין",
      icon: data.icon || "/notification-icon.png",
      badge: "/notification-badge.png",
      tag: data.tag || "am-kelavi-update",
      data: {
        url: data.url || "/",
      },
    }),
  )
})

// Notification click event - open the app when notification is clicked
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  const urlToOpen = event.notification.data && event.notification.data.url ? event.notification.data.url : "/"

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      // Check if there's already a window/tab open with the target URL
      for (const client of clientList) {
        if (client.url === urlToOpen && "focus" in client) {
          return client.focus()
        }
      }
      // If no window/tab is open, open a new one
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen)
      }
    }),
  )
})
