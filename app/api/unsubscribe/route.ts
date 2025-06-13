import { NextResponse } from "next/server"

// Mock database of subscriptions
// In a real app, this would be stored in a database
const subscriptions: PushSubscription[] = []

export async function POST(request: Request) {
  try {
    const { endpoint } = await request.json()

    // Validate endpoint
    if (!endpoint) {
      return NextResponse.json({ success: false, message: "Endpoint is required" }, { status: 400 })
    }

    // Find subscription index
    const index = subscriptions.findIndex((sub) => sub.endpoint === endpoint)

    if (index !== -1) {
      // Remove from subscriptions
      subscriptions.splice(index, 1)
    }

    return NextResponse.json({
      success: true,
      message: index !== -1 ? "Subscription removed successfully" : "Subscription not found",
    })
  } catch (error) {
    console.error("Error unsubscribing:", error)
    return NextResponse.json({ success: false, message: "Failed to unsubscribe" }, { status: 500 })
  }
}
