"use client"

import { useState } from "react"

interface NewsSectionProps {
  className?: string
}

interface NewsItem {
  id: string
  title: string
  content: string
  timestamp: string
  category: "breaking" | "update" | "news"
}

export function NewsSection({ className }: NewsSectionProps) {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: "1",
      title: "תקיפה אווירית בדרום איראן",
      content: "דיווחים ראשוניים: חיל האוויר הישראלי תקף מטרות אסטרטגיות בדרום איראן. פרטים נוספים בהמשך.",
      timestamp: "לפני 5 דקות",
      category: "breaking",
    },
    {
      id: "2",
      title: "הערכות כוחות בגבול הצפון",
      content: 'צה"ל מגביר את ההיערכות בגבול הצפוני. הציבור מתבקש להישאר מעודכן ולהישמע להנחיות פיקוד העורף.',
      timestamp: "לפני 15 דקות",
      category: "update",
    },
    {
      id: "3",
      title: "תגובות בינלאומיות למבצע",
      content: 'מנהיגי העולם מגיבים למבצע "עם כלביא". ארה"ב הביעה תמיכה בזכותה של ישראל להגן על עצמה.',
      timestamp: "לפני שעה",
      category: "news",
    },
  ])

  const [loading, setLoading] = useState(false)

  // Simulate loading more news
  const loadMore = () => {
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      const newItems: NewsItem[] = [
        {
          id: "4",
          title: "פגיעה במתקן גרעיני באיראן",
          content: "על פי דיווחים זרים, הותקף מתקן גרעיני באיראן. גורמים רשמיים טרם הגיבו לדיווחים.",
          timestamp: "לפני 3 שעות",
          category: "breaking",
        },
        {
          id: "5",
          title: "הנחיות חדשות מפיקוד העורף",
          content: "פיקוד העורף פרסם הנחיות חדשות לתושבי הצפון והדרום. יש להישאר בקרבת מרחבים מוגנים.",
          timestamp: "לפני 4 שעות",
          category: "update",
        },
      ]

      setNews([...news, ...newItems])
      setLoading(false)
    }, 1000)
  }

  return (
    <div id="news" className={className}>
      <h2 className="text-3xl font-bold mb-6">חדשות אחרונות</h2>
      <div className="space-y-6">
        {news.map((item) => (
          <div
            key={item.id}
            className={`border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm ${
              item.category === "breaking" ? "border-r-4 border-r-red-500" : ""
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {item.category === "breaking" && (
                <span className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 text-xs px-2 py-1 rounded-full">
                  מבזק
                </span>
              )}
              {item.category === "update" && (
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                  עדכון
                </span>
              )}
            </div>
            <p className="mb-3 text-gray-700 dark:text-gray-300">{item.content}</p>
            <div className="text-sm text-gray-500 dark:text-gray-400">{item.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <button
          onClick={loadMore}
          disabled={loading}
          className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded-md font-medium disabled:opacity-50"
        >
          {loading ? "טוען..." : "טען עוד חדשות"}
        </button>
      </div>
    </div>
  )
}
