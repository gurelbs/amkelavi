export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
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
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            חדשות, עדכונים ומבזקים בזמן אמת על מבצע "עם כלביא" של ישראל
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#news"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium"
            >
              עדכונים אחרונים
            </a>
            <a
              href="https://www.oref.org.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground border border-input hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium"
            >
              הנחיות פיקוד העורף
            </a>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
