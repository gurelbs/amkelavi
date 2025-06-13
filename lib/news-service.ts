// This is a mock service that would be replaced with real API calls to your scraper and AI MCP

export interface NewsItem {
  id: string
  title: string
  content: string
  timestamp: string
  category: "breaking" | "update" | "news"
}

export interface LiveUpdate {
  id: string
  content: string
  time: string
}

export interface TimelineEvent {
  id: number
  time: string
  title: string
  description: string
}

// Mock data - in a real implementation, this would come from your API
const mockNews: NewsItem[] = [
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
    content: "מנהיגי העולם מגיבים למבצע 'עם כלביא'. ארה\"ב הביעה תמיכה בזכותה של ישראל להגן על עצמה.",
    timestamp: "לפני שעה",
    category: "news",
  },
]

const mockLiveUpdates: LiveUpdate[] = [
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
]

const mockTimelineEvents: TimelineEvent[] = [
  {
    id: 1,
    time: "13:00",
    title: "תקיפה אווירית",
    description: "חיל האוויר תקף מטרות טרור בדרום לבנון",
  },
  {
    id: 2,
    time: "12:30",
    title: "הערכת מצב",
    description: "הקבינט המדיני-ביטחוני מתכנס להערכת מצב",
  },
  {
    id: 3,
    time: "11:45",
    title: "אזעקות בדרום",
    description: "אזעקות נשמעו במספר יישובים בעוטף עזה",
  },
]

// Mock API functions
export async function getLatestNews(): Promise<NewsItem[]> {
  // In a real implementation, this would fetch from your API
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockNews), 500)
  })
}

export async function getLiveUpdates(): Promise<LiveUpdate[]> {
  // In a real implementation, this would fetch from your API
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockLiveUpdates), 300)
  })
}

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  // In a real implementation, this would fetch from your API
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTimelineEvents), 400)
  })
}

// In a real implementation, you would add WebSocket or Server-Sent Events for real-time updates
export function subscribeToLiveUpdates(callback: (update: LiveUpdate) => void): () => void {
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

    callback({
      id: Date.now().toString(),
      content: randomItem,
      time: time,
    })
  }, 15000)

  // Return unsubscribe function
  return () => clearInterval(interval)
}
