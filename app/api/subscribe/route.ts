import { NextResponse } from "next/server"

// Mock database of subscriptions
// In a real app, this would be stored in a database
const subscriptions: PushSubscription[] = []

export async function POST(request: Request) {
  try {
    const subscription = await request.json()

    // Validate subscription object
    if (!subscription || !subscription.endpoint) {
      return NextResponse.json({ success: false, message: "Invalid subscription object" }, { status: 400 })
    }

    // Check if subscription already exists
    const exists = subscriptions.some((sub) => sub.endpoint === subscription.endpoint)

    if (!exists) {
      // Add to subscriptions
      subscriptions.push(subscription as PushSubscription)
    }

    return NextResponse.json({
      success: true,
      message: exists ? "Subscription already exists" : "Subscription added successfully",
    })
  } catch (error) {
    console.error("Error subscribing:", error)
    return NextResponse.json({ success: false, message: "Failed to subscribe" }, { status: 500 })
  }
}
