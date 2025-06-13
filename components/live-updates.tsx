"use client"

import { useState, useEffect } from "react"

interface Update {
  id: string
  content: string
  time: string
  important?: boolean
}

export function LiveUpdates() {
  const [updates, setUpdates] = useState<Update[]>([
    {
      id: "1",
      content: "אזעקות נשמעות כעת באזור אשקלון",
      time: "12:45",
      important: true,
    },
    {
      id: "2",
      content: 'דובר צה"ל: כוחותינו תקפו מטרות טרור בדרום לבנון',
      time: "12:32",
    },
    {
      id: "3",
      content: "שר הביטחון מקיים הערכת מצב עם בכירי מערכת הביטחון",
      time: "12:15",
    },
    {
      id: "4",
      content: "דיווח: יירוטים מוצלחים בשמי אשדוד",
      time: "11:58",
      important: true,
    },
    {
      id: "5",
      content: "הנחיות פיקוד העורף: אין שינוי בהנחיות לאזרחים",
      time: "11:45",
    },
  ])

  // Simulate real-time updates
  useEffect(() => {
    const newUpdates = [
      { content: "כלי תקשורת זרים: תקיפה ישראלית נרחבת באיראן", important: true },
      { content: "דיווח: פגיעות במתקני תשתית אסטרטגיים" },
      { content: "ראש הממשלה צפוי למסור הצהרה בשעה 20:00" },
      { content: "פיקוד העורף: יש להישאר בקרבת מרחבים מוגנים", important: true },
      { content: 'שגריר ישראל באו"ם: "נגן על אזרחינו בכל מחיר"' },
    ]

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * newUpdates.length)
      const update = newUpdates[randomIndex]
      const now = new Date()
      const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`

      const newUpdate = {
        id: Date.now().toString(),
        content: update.content,
        time: time,
        important: update.important,
      }

      setUpdates((prev) => [newUpdate, ...prev.slice(0, 9)])

      // If update is important and notifications are enabled, show a notification
      if (update.important && Notification.permission === "granted") {
        // Check if the page is not visible
        if (document.visibilityState !== "visible") {
          new Notification("עם כלביא - עדכון חשוב", {
            body: update.content,
            icon: "/notification-icon.png",
            tag: "important-update",
          })
        }
      }
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="updates" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">עדכונים חיים</h2>
        <div className="flex items-center">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-xs border border-gray-300 dark:border-gray-700 rounded-full px-2 py-1">LIVE</span>
        </div>
      </div>

      <div className="border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
        <div className="h-[400px] overflow-y-auto p-4">
          <div className="space-y-4">
            {updates.map((item) => (
              <div key={item.id} className="border-b pb-3 last:border-0">
                <div className="flex items-start">
                  {item.important && (
                    <div className="flex-shrink-0 mt-1 ml-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                  )}
                  <div>
                    <p className={`mb-1 text-gray-800 dark:text-gray-200 ${item.important ? "font-medium" : ""}`}>
                      {item.content}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
