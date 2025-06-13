"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function LinksError({
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
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="bg-destructive/10 p-3 rounded-full mb-4">
          <AlertCircle className="h-6 w-6 text-destructive" />
        </div>
        <h2 className="text-2xl font-bold mb-2">אירעה שגיאה</h2>
        <p className="text-muted-foreground mb-6">לא ניתן לטעון את עמוד הקישורים כרגע. אנא נסו שוב מאוחר יותר.</p>
        <Button onClick={reset}>נסה שוב</Button>
      </div>
    </div>
  )
}
