"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function UnderConstructionBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // בדיקה אם המשתמש כבר סגר את ההתראה בעבר
    const hasSeenBanner = localStorage.getItem("underConstructionBannerClosed")

    if (!hasSeenBanner) {
      setIsVisible(true)
    }
  }, [])

  const closeBanner = () => {
    setIsVisible(false)
    // שמירה בלוקל סטורג' שהמשתמש סגר את ההתראה
    localStorage.setItem("underConstructionBannerClosed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <Card className="mx-auto max-w-3xl bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 shadow-lg">
        <div className="relative p-4 md:p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-800/50 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-600 dark:text-yellow-400"
              >
                <path d="M10.5 20.5 10 18c-2.5 0-5-1.5-5-5 0-3.5 2.5-6.5 6-6.5s6 3 6 6.5c0 3.5-2.5 5-5 5l-.5 2.5Z"></path>
                <path d="M14 8V5c0-1.105-.895-2-2-2H6c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h6c1.105 0 2-.895 2-2v-3"></path>
                <path d="M14 19h7a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-7"></path>
                <path d="M14 11h7a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-7"></path>
                <path d="M9 7h1"></path>
                <path d="M9 11h1"></path>
                <path d="M9 15h1"></path>
              </svg>
            </div>
            <div className="mr-3 flex-1">
              <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-300">האתר בבנייה</h3>
              <div className="mt-2">
                <p className="text-yellow-700 dark:text-yellow-200">
                  אתר "עם כלביא" עדיין בתהליכי פיתוח. חלק מהתכונות עשויות לא לעבוד כראוי. אנו עובדים במרץ כדי להשלים את
                  האתר בהקדם האפשרי.
                </p>
              </div>
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 border-yellow-300 dark:bg-yellow-800/50 dark:hover:bg-yellow-800 dark:text-yellow-200 dark:border-yellow-700"
                  onClick={closeBanner}
                >
                  הבנתי, תודה
                </Button>
              </div>
            </div>
          </div>
          <button
            onClick={closeBanner}
            className="absolute top-4 left-4 text-yellow-500 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-200"
            aria-label="סגור התראה"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </Card>
    </div>
  )
}
