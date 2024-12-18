/* eslint-disable @next/next/no-img-element */

import { checkout } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "../../../constant/db";
import { useCountries } from "@/lib/getCountries";
import { CategoryShowcase } from "@/app/properties/components/CategoryShowcase";
import { HomeMap } from "@/app/properties/components/HomeMap";
import { SelectCalender } from "@/app/properties/components/SelectCalender";
import { ReservationSubmitButton } from "@/app/properties/components/SubmitButtons";
import Footer from "../Home/Footer/Footer";
import Navbar from "@/components/shared/Navbar";

async function getData(homeid: string) {
  noStore();
  const data = await prisma.home.findUnique({
    where: {
      id: homeid,
    },
    select: {
      photo: true,
      description: true,
      guests: true,
      bedrooms: true,
      bathrooms: true,
      title: true,
      categoryName: true,
      price: true,
      country: true,
      Reservation: {
        where: {
          homeId: homeid,
        },
      },

      User: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });

  return data;
}

export default async function HomeRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(data?.country as string);
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <Navbar />
      <div className="w-[75%] mx-auto mt-10 mb-12">
        <h1 className="font-medium text-2xl mb-5">{data?.title}</h1>
        <div className="relative h-[550px]">
          <Image
            alt="Image of Home"
            src={`https://gjeaabemtldcnkmomcbw.supabase.co/storage/v1/object/public/images/${data?.photo}`}
            fill
            className="rounded-lg h-full object-cover w-full"
          />
        </div>

        <div className="flex justify-between gap-x-24 mt-8">
          <div className="w-2/3">
            <h3 className="text-xl font-medium">
              {country?.flag} {country?.label} / {country?.region}
            </h3>
            <div className="flex gap-x-2 text-muted-foreground">
              <p>{data?.guests} Hotes</p> * <p>{data?.bedrooms} Chambres</p> *{" "}
              {data?.bathrooms} Douches <p> Prix: {data?.price} / mois</p>
            </div>

            <div className="flex items-center mt-6">
              <img
                src={
                  data?.User?.profileImage ??
                  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                }
                alt="User Profile"
                className="w-11 h-11 rounded-full"
              />
              <div className="flex flex-col ml-4">
                <h3 className="font-medium">
                  Publie par {data?.User?.firstName}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hote depuis 2 mois
                </p>
              </div>
            </div>

            <Separator className="my-7" />

            <CategoryShowcase categoryName={data?.categoryName as string} />

            <Separator className="my-7" />

            <p className="text-muted-foreground">{data?.description}</p>

            <Separator className="my-7" />

            <HomeMap locationValue={country?.value as string} />
          </div>

          <form action={checkout}>
            {/* {createReservation}> */}
            <input type="hidden" name="homeId" value={params.id} />
            <input type="hidden" name="userId" value={user?.id} />
            <input
              type="hidden"
              name="userName"
              value={user.given_name as string}
            />
            <input type="hidden" name="userMail" value={user.email as string} />
            <input
              type="hidden"
              name="desc"
              value={data?.description as string}
            />
            <input
              type="hidden"
              name="price"
              value={data?.price ? String(data.price) : ""}
            />

            <SelectCalender reservation={data?.Reservation} />
            {user?.id ? (
              <ReservationSubmitButton />
            ) : (
              <Button className="w-full" asChild>
                <Link href="/api/auth/login">
                  Faire une Reservation avec Stripe
                </Link>
              </Button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
