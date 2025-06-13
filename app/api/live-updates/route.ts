import { NextResponse } from "next/server"
import type { LiveUpdate } from "@/lib/news-service"

// Mock data - in a real implementation, this would come from your scraper and AI MCP
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
  {
    id: "6",
    content: "כלי תקשורת זרים: תקיפה ישראלית נרחבת באיראן",
    time: "11:30",
  },
  {
    id: "7",
    content: "דיווח: פגיעות במתקני תשתית אסטרטגיים",
    time: "11:15",
  },
  {
    id: "8",
    content: "ראש הממשלה צפוי למסור הצהרה בשעה 20:00",
    time: "11:00",
  },
  {
    id: "9",
    content: "פיקוד העורף: יש להישאר בקרבת מרחבים מוגנים",
    time: "10:45",
  },
  {
    id: "10",
    content: 'שגריר ישראל באו"ם: "נגן על אזרחינו בכל מחיר"',
    time: "10:30",
  },
]

export async function GET(request: Request) {
  // In a real implementation, you would fetch data from your scraper and AI MCP
  // For now, we'll just return the mock data

  // Parse query parameters
  const { searchParams } = new URL(request.url)
  const limit = Number.parseInt(searchParams.get("limit") || "10")
  const since = searchParams.get("since") // timestamp to get updates since

  let filteredUpdates = [...mockLiveUpdates]

  // Filter by timestamp if provided
  if (since) {
    // In a real implementation, you would filter based on the timestamp
    // For now, we'll just return all updates
  }

  // Limit results
  filteredUpdates = filteredUpdates.slice(0, limit)

  // Add a small delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 200))

  return NextResponse.json({
    updates: filteredUpdates,
    total: mockLiveUpdates.length,
  })
}

export async function POST(request: Request) {
  // This would be used by your scraper or AI MCP to add new live updates
  // For now, we'll just return a success message

  try {
    const body = await request.json()

    // In a real implementation, you would validate the data and save it to your database

    return NextResponse.json({
      success: true,
      message: "Live update added successfully",
      id: Date.now().toString(),
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid request body" }, { status: 400 })
  }
}
