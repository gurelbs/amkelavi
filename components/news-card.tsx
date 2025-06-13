import { cn } from "@/lib/utils"

interface NewsCardProps {
  title: string
  content: string
  timestamp: string
  category: "breaking" | "update" | "news"
}

export function NewsCard({ title, content, timestamp, category }: NewsCardProps) {
  return (
    <div
      className={cn(
        "border rounded-lg p-4 bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow",
        category === "breaking" && "border-r-4 border-r-red-500",
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {category === "breaking" && (
          <span className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 text-xs px-2 py-1 rounded-full">
            מבזק
          </span>
        )}
        {category === "update" && (
          <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
            עדכון
          </span>
        )}
      </div>
      <p className="mb-3">{content}</p>
      <div className="text-sm text-muted-foreground">{timestamp}</div>
    </div>
  )
}
