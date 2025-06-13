import { NextResponse } from "next/server"

interface Link {
  id: string
  title: string
  description: string
  href: string
  category: "military" | "government" | "emergency" | "health" | "news" | "support"
  phone?: string
}

// Mock data - in a real implementation, this would come from your database
const links: Link[] = [
  {
    id: "1",
    title: "צה״ל - אתר רשמי",
    description: "אתר צה״ל הרשמי - עדכונים, הודעות דובר צה״ל והנחיות לציבור",
    href: "https://www.idf.il/",
    category: "military",
  },
  {
    id: "2",
    title: "משרד הביטחון",
    description: "אתר משרד הביטחון - מידע רשמי על פעילות מערכת הביטחון",
    href: "https://www.mod.gov.il/",
    category: "government",
  },
  {
    id: "3",
    title: "פיקוד העורף",
    description: "אתר פיקוד העורף - הנחיות התגוננות לאזרחים ומידע חיוני",
    href: "https://www.oref.org.il/",
    category: "military",
  },
  {
    id: "4",
    title: "מד״א - מגן דוד אדום",
    description: "שירותי רפואת חירום, עזרה ראשונה ופינוי רפואי",
    href: "https://www.mdais.org/",
    category: "emergency",
    phone: "101",
  },
  // Add more links as needed
]

export async function GET(request: Request) {
  // Parse query parameters
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const search = searchParams.get("search")
  const limit = Number.parseInt(searchParams.get("limit") || "50")

  let filteredLinks = [...links]

  // Filter by category if provided
  if (category) {
    filteredLinks = filteredLinks.filter((link) => link.category === category)
  }

  // Filter by search term if provided
  if (search) {
    const searchLower = search.toLowerCase()
    filteredLinks = filteredLinks.filter(
      (link) => link.title.toLowerCase().includes(searchLower) || link.description.toLowerCase().includes(searchLower),
    )
  }

  // Limit results
  filteredLinks = filteredLinks.slice(0, limit)

  // Add a small delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 300))

  return NextResponse.json({
    links: filteredLinks,
    total: links.length,
  })
}
