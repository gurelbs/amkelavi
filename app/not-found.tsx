export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">העמוד לא נמצא</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          העמוד שחיפשת אינו קיים או שהוסר. אנא בדוק את הכתובת ונסה שוב.
        </p>
        <a href="/" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium">
          חזרה לעמוד הראשי
        </a>
      </div>
    </div>
  )
}
