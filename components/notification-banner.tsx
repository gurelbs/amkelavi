"use client"

import { useState, useEffect } from "react"

export function NotificationBanner() {
  const [permission, setPermission] = useState<NotificationPermission | "default">("default")
  const [supported, setSupported] = useState(true)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if notifications are supported
    if (!("Notification" in window)) {
      setSupported(false)
      return
    }

    // Check current permission status
    setPermission(Notification.permission)

    // Show banner only if permission is not granted and not denied
    setShowBanner(Notification.permission === "default")
  }, [])

  const requestPermission = async () => {
    try {
      const result = await Notification.requestPermission()
      setPermission(result)

      if (result === "granted") {
        // Register service worker and subscribe to push notifications
        await subscribeToPushNotifications()

        // Show a test notification
        showTestNotification()
      }

      // Hide banner regardless of the result
      setShowBanner(false)
    } catch (error) {
      console.error("Error requesting notification permission:", error)
    }
  }

  const subscribeToPushNotifications = async () => {
    try {
      // Register service worker
      const registration = await navigator.serviceWorker.register("/service-worker.js")
      console.log("Service Worker registered:", registration)

      // In a real app, you would send the subscription to your server
      // const subscription = await registration.pushManager.subscribe({
      //   userVisibleOnly: true,
      //   applicationServerKey: urlBase64ToUint8Array('YOUR_PUBLIC_VAPID_KEY')
      // })
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   body: JSON.stringify(subscription),
      //   headers: { 'Content-Type': 'application/json' }
      // })
    } catch (error) {
      console.error("Error subscribing to push notifications:", error)
    }
  }

  const showTestNotification = () => {
    if (Notification.permission === "granted") {
      const notification = new Notification("עם כלביא - התראות מופעלות", {
        body: "תקבל/י התראות על עדכונים חשובים בזמן אמת",
        icon: "/notification-icon.png",
        tag: "test-notification",
      })

      notification.onclick = () => {
        window.focus()
        notification.close()
      }
    }
  }

  if (!supported || !showBanner) return null

  return (
    <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <div className="mr-3">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">הפעל/י התראות דחיפה</h3>
            <div className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              <p>קבל/י עדכונים חשובים על מבצע "עם כלביא" גם כשאינך גולש/ת באתר</p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 flex">
          <button
            onClick={requestPermission}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            הפעל התראות
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="mr-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            לא עכשיו
          </button>
        </div>
      </div>
    </div>
  )
}
