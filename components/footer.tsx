export function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">עכ</span>
              </div>
              <span className="font-bold text-xl">עם כלביא</span>
            </div>
            <p className="text-muted-foreground mb-4">
              אתר "עם כלביא" מספק חדשות, עדכונים ומבזקים בזמן אמת על מבצע "עם כלביא" של ישראל. האתר מתעדכן אוטומטית
              ומספק מידע אמין, מהיר ועדכני.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.idf.il/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  אתר צה"ל
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.il/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  פורטל הממשלה
                </a>
              </li>
              <li>
                <a
                  href="https://www.oref.org.il/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  פיקוד העורף
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} עם כלביא. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  )
}
