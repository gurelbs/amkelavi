import { NextResponse } from "next/server"
import type { NewsItem } from "@/lib/news-service"

// Mock data - in a real implementation, this would come from your scraper and AI MCP
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

export async function GET(request: Request) {
  // In a real implementation, you would fetch data from your scraper and AI MCP
  // For now, we'll just return the mock data

  // Parse query parameters
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const limit = Number.parseInt(searchParams.get("limit") || "10")

  let filteredNews = [...mockNews]

  // Filter by category if provided
  if (category) {
    filteredNews = filteredNews.filter((item) => item.category === category)
  }

  // Limit results
  filteredNews = filteredNews.slice(0, limit)

  // Add a small delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 300))

  return NextResponse.json({
    news: filteredNews,
    total: mockNews.length,
  })
}

export async function POST(request: Request) {
  // This would be used by your scraper or AI MCP to add new news items
  // For now, we'll just return a success message

  try {
    const body = await request.json()

    // In a real implementation, you would validate the data and save it to your database

    return NextResponse.json({
      success: true,
      message: "News item added successfully",
      id: Date.now().toString(),
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid request body" }, { status: 400 })
  }
}
