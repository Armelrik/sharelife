
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import prisma from '../../../constant/db';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SECRET_WEBHOOK as string
    );
  } catch (error: unknown) {
    return new Response("Webhook Error", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      await prisma.reservation.create({
        data: {
          amount: session.amount_total ?? 0,
        //   status: session.status as string,
          userId: session.metadata?.userId as string,
          homeId: session.metadata?.homeId as string,
          startDate: session.metadata?.startDate as string,
          endDate: session.metadata?.endDate as string,
        },
      });
      
      break;
    }
    default: {
      console.log("unhandled event");
    }
  }

  return new Response(null, { status: 200 });
}
