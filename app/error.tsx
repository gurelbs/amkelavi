"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mb-4">
          <svg
            className="h-6 w-6 text-red-600 dark:text-red-400"
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
        <h2 className="text-2xl font-bold mb-2">אירעה שגיאה</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          אנו מתנצלים, אך אירעה שגיאה בטעינת העמוד. אנא נסו שוב מאוחר יותר.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={reset} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
            נסה שוב
          </button>
          <a
            href="/"
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded-md font-medium text-center"
          >
            חזרה לעמוד הראשי
          </a>
        </div>
      </div>
    </div>
  )
}
