import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface LinkCardProps {
  title: string
  description: string
  href: string
  category: "military" | "government" | "emergency" | "health" | "news" | "support"
  phone?: string
  className?: string
}

export function LinkCard({ title, description, href, category, phone, className }: LinkCardProps) {
  const categoryColors = {
    military: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    government: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    emergency: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    health: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    news: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    support: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  }

  const categoryLabels = {
    military: "צבאי",
    government: "ממשלתי",
    emergency: "חירום",
    health: "בריאות",
    news: "חדשות",
    support: "תמיכה",
  }

  return (
    <Card className={cn("transition-all duration-200 hover:shadow-md", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge className={categoryColors[category]} variant="outline">
            {categoryLabels[category]}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        {phone && (
          <div className="flex items-center text-sm mb-2">
            <Phone className="h-4 w-4 mr-1 rtl:ml-1 rtl:mr-0" />
            <span className="font-medium">{phone}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary flex items-center hover:underline text-sm"
        >
          בקר באתר
          <ExternalLink className="h-3 w-3 mr-1 rtl:ml-1 rtl:mr-0" />
        </a>
      </CardFooter>
    </Card>
  )
}
