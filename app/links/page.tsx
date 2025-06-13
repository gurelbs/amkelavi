import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LinkCard } from "@/components/link-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { SearchLinks } from "@/components/search-links"
import { UnderConstructionBanner } from "@/components/under-construction-banner"

export const metadata: Metadata = {
  title: "קישורים חשובים | עם כלביא",
  description: "קישורים חשובים ומשאבים מהימנים הקשורים למבצע עם כלביא",
}

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">קישורים חשובים</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              אוסף של קישורים חשובים ומשאבים מהימנים הקשורים למבצע "עם כלביא"
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <SearchLinks className="mb-8" />

            <Tabs defaultValue="official" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="official">גורמים רשמיים</TabsTrigger>
                <TabsTrigger value="emergency">שירותי חירום</TabsTrigger>
                <TabsTrigger value="news">מקורות מידע</TabsTrigger>
                <TabsTrigger value="support">תמיכה וסיוע</TabsTrigger>
              </TabsList>

              <TabsContent value="official" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">גורמים רשמיים</h2>
                  <Separator className="mb-6" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <LinkCard
                      title="צה״ל - אתר רשמי"
                      description="אתר צה״ל הרשמי - עדכונים, הודעות דובר צה״ל והנחיות לציבור"
                      href="https://www.idf.il/"
                      category="military"
                    />
                    <LinkCard
                      title="משרד הביטחון"
                      description="אתר משרד הביטחון - מידע רשמי על פעילות מערכת הביטחון"
                      href="https://www.mod.gov.il/"
                      category="government"
                    />
                    <LinkCard
                      title="משרד החוץ"
                      description="אתר משרד החוץ - עדכונים דיפלומטיים והסברה בינלאומית"
                      href="https://www.gov.il/he/departments/ministry_of_foreign_affairs"
                      category="government"
                    />
                    <LinkCard
                      title="משרד ראש הממשלה"
                      description="אתר משרד ראש הממשלה - הודעות רשמיות והחלטות ממשלה"
                      href="https://www.gov.il/he/departments/prime_ministers_office"
                      category="government"
                    />
                    <LinkCard
                      title="פיקוד העורף"
                      description="אתר פיקוד העורף - הנחיות התגוננות לאזרחים ומידע חיוני"
                      href="https://www.oref.org.il/"
                      category="military"
                    />
                    <LinkCard
                      title="רשות החירום הלאומית"
                      description="רח״ל - מידע על היערכות והתמודדות במצבי חירום"
                      href="https://www.gov.il/he/departments/national_emergency_management_authority"
                      category="emergency"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="emergency" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">שירותי חירום</h2>
                  <Separator className="mb-6" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <LinkCard
                      title="מד״א - מגן דוד אדום"
                      description="שירותי רפואת חירום, עזרה ראשונה ופינוי רפואי"
                      href="https://www.mdais.org/"
                      category="emergency"
                      phone="101"
                    />
                    <LinkCard
                      title="כבאות והצלה לישראל"
                      description="שירותי כיבוי אש, חילוץ והצלה"
                      href="https://www.gov.il/he/departments/fire_and_rescue_commission"
                      category="emergency"
                      phone="102"
                    />
                    <LinkCard
                      title="משטרת ישראל"
                      description="אכיפת חוק, ביטחון פנים וסיוע לאזרחים במצבי חירום"
                      href="https://www.gov.il/he/departments/israel_police"
                      category="emergency"
                      phone="100"
                    />
                    <LinkCard
                      title="מרכז לבריאות הנפש"
                      description="סיוע נפשי במצבי חירום ומשבר"
                      href="https://www.health.gov.il/Subjects/mental_health/Pages/default.aspx"
                      category="health"
                      phone="1201"
                    />
                    <LinkCard
                      title="פיקוד העורף - מוקד מידע"
                      description="מידע והנחיות התגוננות לאזרחים"
                      href="https://www.oref.org.il/"
                      category="military"
                      phone="104"
                    />
                    <LinkCard
                      title="רשות החירום הלאומית - מוקד מידע"
                      description="מידע על מצב החירום ברמה הלאומית"
                      href="https://www.gov.il/he/departments/national_emergency_management_authority"
                      category="emergency"
                      phone="*9900"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="news" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">מקורות מידע</h2>
                  <Separator className="mb-6" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <LinkCard
                      title="כאן חדשות"
                      description="שידורי החדשות של תאגיד השידור הישראלי"
                      href="https://www.kan.org.il/live/tv.aspx?stationid=2"
                      category="news"
                    />
                    <LinkCard
                      title="חדשות 12"
                      description="אתר החדשות של ערוץ 12"
                      href="https://www.mako.co.il/news"
                      category="news"
                    />
                    <LinkCard
                      title="חדשות 13"
                      description="אתר החדשות של ערוץ 13"
                      href="https://13news.co.il/"
                      category="news"
                    />
                    <LinkCard
                      title="גלי צה״ל"
                      description="תחנת הרדיו של צה״ל - חדשות וסיקור צבאי"
                      href="https://glz.co.il/"
                      category="military"
                    />
                    <LinkCard
                      title="הארץ"
                      description="עיתון יומי - חדשות, פרשנות וניתוח"
                      href="https://www.haaretz.co.il/"
                      category="news"
                    />
                    <LinkCard
                      title="ישראל היום"
                      description="עיתון יומי - חדשות, פרשנות וניתוח"
                      href="https://www.israelhayom.co.il/"
                      category="news"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="support" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">תמיכה וסיוע</h2>
                  <Separator className="mb-6" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <LinkCard
                      title="ער״ן - עזרה ראשונה נפשית"
                      description="סיוע נפשי ראשוני במצבי משבר ומצוקה"
                      href="https://www.eran.org.il/"
                      category="health"
                      phone="1201"
                    />
                    <LinkCard
                      title="נט״ל - נפגעי טראומה על רקע לאומי"
                      description="סיוע לנפגעי חרדה וטראומה על רקע בטחוני"
                      href="https://www.natal.org.il/"
                      category="health"
                      phone="1-800-363-363"
                    />
                    <LinkCard
                      title="המוסד לביטוח לאומי"
                      description="זכויות וסיוע לנפגעי פעולות איבה"
                      href="https://www.btl.gov.il/benefits/Victims_of_Hostilities/"
                      category="government"
                    />
                    <LinkCard
                      title="משרד הרווחה - מוקד 118"
                      description="סיוע חברתי במצבי חירום ומשבר"
                      href="https://www.gov.il/he/departments/molsa"
                      category="government"
                      phone="118"
                    />
                    <LinkCard
                      title="פעמונים"
                      description="סיוע כלכלי למשפחות במצוקה"
                      href="https://www.paamonim.org/"
                      category="support"
                      phone="*9976"
                    />
                    <LinkCard
                      title="לתת"
                      description="סיוע הומניטרי לנזקקים"
                      href="https://www.latet.org.il/"
                      category="support"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <UnderConstructionBanner />
    </div>
  )
}
