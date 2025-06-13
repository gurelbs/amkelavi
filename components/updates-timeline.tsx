import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UpdatesTimeline() {
  const updates = [
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
    {
      id: 4,
      time: "10:15",
      title: 'הצהרת דובר צה"ל',
      description: 'דובר צה"ל מסר עדכון על התקדמות המבצע',
    },
    {
      id: 5,
      time: "09:30",
      title: "פתיחת מבצע",
      description: 'צה"ל פתח במבצע "עם כלביא" נגד מטרות טרור',
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">ציר זמן</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative border-r pr-6 space-y-6">
          {updates.map((update) => (
            <div key={update.id} className="relative">
              <div className="absolute right-[-27px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="mb-1 font-medium">{update.title}</div>
              <div className="text-sm text-muted-foreground mb-1">{update.description}</div>
              <div className="text-xs text-muted-foreground">{update.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
