import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function LinksLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <Skeleton className="h-12 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-full mb-8" />

            <Tabs defaultValue="official" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="official">גורמים רשמיים</TabsTrigger>
                <TabsTrigger value="emergency">שירותי חירום</TabsTrigger>
                <TabsTrigger value="news">מקורות מידע</TabsTrigger>
                <TabsTrigger value="support">תמיכה וסיוע</TabsTrigger>
              </TabsList>

              <TabsContent value="official" className="space-y-8">
                <div>
                  <Skeleton className="h-8 w-48 mb-4" />
                  <Separator className="mb-6" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array(6)
                      .fill(0)
                      .map((_, i) => (
                        <Skeleton key={i} className="h-40 w-full rounded-lg" />
                      ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
