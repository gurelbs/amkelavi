"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface FeedItem {
  id: string
  content: string
  time: string
}

export function LiveFeed() {
  const [feed, setFeed] = useState<FeedItem[]>([
    {
      id: "1",
      content: "אזעקות נשמעות כעת באזור אשקלון",
      time: "12:45",
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
    },
    {
      id: "5",
      content: "הנחיות פיקוד העורף: אין שינוי בהנחיות לאזרחים",
      time: "11:45",
    },
  ])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newItems = [
        "כלי תקשורת זרים: תקיפה ישראלית נרחבת באיראן",
        "דיווח: פגיעות במתקני תשתית אסטרטגיים",
        "ראש הממשלה צפוי למסור הצהרה בשעה 20:00",
        "פיקוד העורף: יש להישאר בקרבת מרחבים מוגנים",
        'שגריר ישראל באו"ם: "נגן על אזרחינו בכל מחיר"',
      ]

      const randomItem = newItems[Math.floor(Math.random() * newItems.length)]
      const now = new Date()
      const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`

      setFeed((prev) => [
        {
          id: Date.now().toString(),
          content: randomItem,
          time: time,
        },
        ...prev.slice(0, 9),
      ])
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">עדכונים חיים</CardTitle>
          <div className="flex items-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <Badge variant="outline">LIVE</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {feed.map((item) => (
              <div key={item.id} className="border-b pb-3 last:border-0">
                <p className="mb-1">{item.content}</p>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
