"use client";

import { createLocation } from "@/app/actions";
import { CreatioBottomBar } from "@/app/home/Home/Navbar/CreationBottomBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue,} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useCountries } from "@/lib/getCountries";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function AddressRoutw({ params }: { params: { id: string } }) {
  const { getAllCountries } = useCountries();
  const [locationValue, setLocationValue] = useState("");

  const LazyMap = dynamic(() => import("@/app/properties/components/Map"), {
    ssr: false,
    loading: () => <Skeleton className="h-[50vh] w-full" />,
  });

  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">
          Où est située votre maison?
        </h2>
      </div>

      <form action={createLocation}> {/* */}
        <input type="hidden" name="homeId" value={params.id} />
        <input type="hidden" name="countryValue" value={locationValue} />
        <div className="w-3/5 mx-auto mb-36">
          <div className="mb-5">
            <Select required onValueChange={(value) => setLocationValue(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez un pays" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Pays</SelectLabel>
                  {getAllCountries().map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.flag} {item.label} / {item.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          
          

          <LazyMap locationValue={locationValue} />

          <div className="mt-5 mb-5">
            <div className="flex flex-col mt-5 mb-5 gap-y-2">
            <Label>Ville</Label>
            <Input name="town" type="text" required placeholder="Entrez la ville" />
          </div>
          <div className="flex flex-col mt-5 mb-5 gap-y-2">
            <Label>Quartier</Label>
            <Input name="ward" type="text" required placeholder="Entrez le quartier ou le code postal" />
          </div>
          </div>

          </div>
        </div>

        <CreatioBottomBar />
      </form>
    </>
  );
}
