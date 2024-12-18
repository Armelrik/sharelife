import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import prisma from '../../../constant/db';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature");

  if (!signature) {
    return new Response("Stripe-Signature header missing", { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SECRET_WEBHOOK as string
    );
  } catch (error: unknown) {
    console.error("Error in Stripe webhook signature validation", error);
    return new Response("This Webhook went into a very big Error", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      console.log('Entering DB creation');

      await prisma.reservation.create({
        data: {
          amount: session.amount_total ?? 0,
          userId: session.metadata?.userId as string,
          homeId: session.metadata?.homeId as string,
          startDate: session.metadata?.startDate as string,
          endDate: session.metadata?.endDate as string,
          
        }, 
      });

      break;
    }
    default: {
      console.log("Unhandled event type", event.type);
    }
  }

  return new Response(null, { status: 200 });
}
