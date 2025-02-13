import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-stripe-public-key");

export async function handleCheckout(cart) {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    });
    
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
}
