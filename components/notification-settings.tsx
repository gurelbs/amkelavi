"use client"

import { useState, useEffect } from "react"

export function NotificationSettings() {
  const [permission, setPermission] = useState<NotificationPermission | "default">("default")
  const [supported, setSupported] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if notifications are supported
    if (!("Notification" in window)) {
      setSupported(false)
      return
    }

    // Check current permission status
    setPermission(Notification.permission)
  }, [])

  const toggleNotifications = async () => {
    if (!supported) return

    setLoading(true)

    try {
      if (permission === "granted") {
        // Unsubscribe from push notifications
        await unsubscribeFromPushNotifications()
        // We can't actually revoke permission, but we can unsubscribe
        alert("ההתראות הושבתו בהצלחה")
      } else {
        // Request permission and subscribe
        const result = await Notification.requestPermission()
        setPermission(result)

        if (result === "granted") {
          await subscribeToPushNotifications()
          showTestNotification()
        } else if (result === "denied") {
          alert("אנא אפשר/י התראות בהגדרות הדפדפן כדי לקבל עדכונים חשובים")
        }
      }
    } catch (error) {
      console.error("Error toggling notifications:", error)
    } finally {
      setLoading(false)
    }
  }

  const subscribeToPushNotifications = async () => {
    try {
      // Register service worker if not already registered
      const registration = await navigator.serviceWorker.getRegistration()
      if (!registration) {
        await navigator.serviceWorker.register("/service-worker.js")
      }

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

  const unsubscribeFromPushNotifications = async () => {
    try {
      const registration = await navigator.serviceWorker.getRegistration()
      if (!registration) return

      const subscription = await registration.pushManager.getSubscription()
      if (!subscription) return

      // Unsubscribe locally
      await subscription.unsubscribe()

      // In a real app, you would also notify your server
      // await fetch('/api/unsubscribe', {
      //   method: 'POST',
      //   body: JSON.stringify({ endpoint: subscription.endpoint }),
      //   headers: { 'Content-Type': 'application/json' }
      // })
    } catch (error) {
      console.error("Error unsubscribing from push notifications:", error)
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

  if (!supported) {
    return <div className="text-sm text-gray-500 dark:text-gray-400">הדפדפן שלך אינו תומך בהתראות דחיפה</div>
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-medium">התראות דחיפה</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {permission === "granted" ? "התראות מופעלות" : "התראות כבויות"}
        </div>
      </div>
      <button
        onClick={toggleNotifications}
        disabled={loading || permission === "denied"}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          permission === "granted"
            ? "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        } disabled:opacity-50`}
      >
        {loading ? "טוען..." : permission === "granted" ? "כבה התראות" : "הפעל התראות"}
      </button>
    </div>
  )
}
