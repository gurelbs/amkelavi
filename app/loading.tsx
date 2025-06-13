export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-muted animate-spin border-t-primary"></div>
        </div>
        <h2 className="mt-4 text-xl font-medium">טוען...</h2>
        <p className="text-muted-foreground">אנא המתן</p>
      </div>
    </div>
  )
}
