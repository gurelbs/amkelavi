/**
 * Convert a base64 string to Uint8Array for VAPID key
 */
export function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }

  return outputArray
}

/**
 * Check if push notifications are supported by the browser
 */
export function isPushNotificationSupported(): boolean {
  return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window
}

/**
 * Request notification permission
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!("Notification" in window)) {
    throw new Error("Notifications not supported")
  }

  if (Notification.permission === "granted") {
    return "granted"
  }

  if (Notification.permission === "denied") {
    return "denied"
  }

  return await Notification.requestPermission()
}

/**
 * Register service worker for push notifications
 */
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration> {
  if (!("serviceWorker" in navigator)) {
    throw new Error("Service workers not supported")
  }

  try {
    return await navigator.serviceWorker.register("/service-worker.js")
  } catch (error) {
    throw new Error(`Service worker registration failed: ${error}`)
  }
}

/**
 * Subscribe to push notifications
 */
export async function subscribeToPush(publicVapidKey: string): Promise<PushSubscription | null> {
  try {
    const registration = await registerServiceWorker()

    // Wait for the service worker to be ready
    await navigator.serviceWorker.ready

    // Get existing subscription or create a new one
    let subscription = await registration.pushManager.getSubscription()

    if (subscription) {
      return subscription
    }

    // Create new subscription
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    })

    return subscription
  } catch (error) {
    console.error("Error subscribing to push notifications:", error)
    return null
  }
}

/**
 * Unsubscribe from push notifications
 */
export async function unsubscribeFromPush(): Promise<boolean> {
  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (!registration) return false

    const subscription = await registration.pushManager.getSubscription()
    if (!subscription) return false

    return await subscription.unsubscribe()
  } catch (error) {
    console.error("Error unsubscribing from push notifications:", error)
    return false
  }
}
