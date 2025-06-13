import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UnderConstructionBanner } from "@/components/under-construction-banner"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">אודות עם כלביא</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              אתר "עם כלביא" מספק חדשות, עדכונים ומבזקים בזמן אמת על מבצע "עם כלביא" של ישראל.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">המשימה שלנו</h2>
                  <p className="mb-4">
                    המשימה שלנו היא לספק מידע אמין, מדויק ועדכני על מבצע "עם כלביא" לציבור הישראלי ולקהילה הבינלאומית.
                    אנו מחויבים לדיווח אובייקטיבי ומהיר, תוך שימוש בטכנולוגיות מתקדמות לאיסוף וניתוח מידע.
                  </p>
                  <p>אנו מאמינים בחשיבות של שקיפות ואמינות בדיווח החדשותי, במיוחד בזמני חירום ומבצעים צבאיים.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">הטכנולוגיה שלנו</h2>
                  <p className="mb-4">
                    אתר "עם כלביא" משתמש בטכנולוגיות מתקדמות לאיסוף, ניתוח והצגת מידע בזמן אמת. המערכת שלנו משלבת סורקי
                    מידע (scrapers) אוטומטיים עם מערכות בינה מלאכותית מתקדמות לעיבוד וניתוח המידע.
                  </p>
                  <p>הפלטפורמה שלנו מעדכנת את המידע באופן רציף ומספקת התראות בזמן אמת על התפתחויות חשובות.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">הצוות שלנו</h2>
                  <p className="mb-6">
                    הצוות שלנו מורכב ממומחי תקשורת, אנליסטים ביטחוניים, מפתחי תוכנה ומומחי בינה מלאכותית. כולנו מחויבים
                    לספק את המידע המדויק והאמין ביותר על מבצע "עם כלביא".
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
                      <h3 className="font-medium">ישראל ישראלי</h3>
                      <p className="text-sm text-muted-foreground">מנהל תוכן</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
                      <h3 className="font-medium">שרה כהן</h3>
                      <p className="text-sm text-muted-foreground">אנליסטית ביטחונית</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
                      <h3 className="font-medium">דוד לוי</h3>
                      <p className="text-sm text-muted-foreground">מפתח ראשי</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-6">צור קשר</h2>
              <p className="mb-6">יש לכם שאלות, הצעות או מידע חשוב? אנחנו כאן בשבילכם.</p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <Button size="lg">צור קשר</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <UnderConstructionBanner />
    </div>
  )
}
