import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import prisma from '../../constant/db';
import { NoItems } from "../properties/components/NoItem";
import { ListingCard } from "../properties/components/ListingCard";
import Navbar from "@/components/shared/Navbar";
import Footer from "../home/Home/Footer/Footer";

async function getData(userId: string) {
  noStore();
  const data = await prisma.home.findMany({
    where: {
      userId: userId,
      addedCategory: true,
      addedDescription: true,
      addedLoaction: true,
    },
    select: {
      id: true,
      country: true,
      town: true,
      ward: true,
      photo: true,
      description: true,
      price: true,
      Favorite: {
        where: {
          userId: userId,
        },
      },
    },
    orderBy: {
      createdAT: "desc",
    },
  });

  return data;
}

export default async function MyHomes() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }
  const data = await getData(user.id);
  return (
    <>
    <Navbar />
    <section className="container mx-auto px-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Vos Maisons</h2>

      {data.length === 0 ? (
        <NoItems
          description="Veuillez enregistrer une maison pour la voir ici"
          title="Vous n'avez aucune maison en liste"
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.id}
              imagePath={item.photo as string}
              homeId={item.id}
              price={item.price as number}
              description={item.description as string}
              location={item.country as string}
              town={item.town as string}
              ward={item.ward as string}
              userId={user.id}
              pathName="/my-homes"
              favoriteId={item.Favorite[0]?.id}
              isInFavoriteList={item.Favorite.length > 0 ? true : false}
            />
          ))}
        </div>
      )}
    </section>
    <Footer />
     </>
  );
}
