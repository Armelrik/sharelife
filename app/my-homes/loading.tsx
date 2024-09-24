
import Navbar from "@/components/shared/Navbar";
import Footer from "../home/Home/Footer/Footer";
import { SkeltonCard } from "../properties/components/SkeletonCard";

export default function MyHomesLoading() {
  return (
    <>
    <Navbar />
   
    <section className="container mx-atuo px-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Vos Maisons</h2>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
      </div>
    </section>
    <Footer />
     </>
  );
}
