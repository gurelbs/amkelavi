"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="he" dir="rtl">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="bg-red-100 p-3 rounded-full mb-4">
              <svg
                className="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">שגיאה קריטית</h2>
            <p className="text-gray-500 mb-6">אנו מתנצלים, אך אירעה שגיאה קריטית. אנא נסו שוב מאוחר יותר.</p>
            <button
              onClick={() => reset()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
            >
              נסה שוב
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
