import { Header } from "@/components/header"
import { NewsSection } from "@/components/news-section"
import { LiveUpdates } from "@/components/live-updates"
import { AlertBanner } from "@/components/alert-banner"
import { NotificationBanner } from "@/components/notification-banner"
import { UnderConstructionBanner } from "@/components/under-construction-banner"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <section className="bg-blue-50 dark:bg-blue-900/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                מבצע "עם כלביא"
                <div className="inline-flex items-center mr-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-red-500 text-sm font-medium mr-2">LIVE</span>
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                חדשות, עדכונים ומבזקים בזמן אמת על מבצע "עם כלביא" של ישראל
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <NotificationBanner />
          <AlertBanner />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <NewsSection className="lg:col-span-2" />
            <LiveUpdates />
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} עם כלביא. כל הזכויות שמורות.
      </footer>

      <UnderConstructionBanner />
    </div>
  )
}
