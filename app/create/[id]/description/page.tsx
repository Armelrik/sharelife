
import { CreateDescription } from "@/app/actions";
import { CreatioBottomBar } from "@/app/home/Home/Navbar/CreationBottomBar";
import { Counter } from "@/app/properties/components/Counter";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
            Décrivez votre maison aussi bien que possible !
        </h2>
      </div>

      <form action={CreateDescription}>
        <input type="hidden" name="homeId" value={params.id} />
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Titre</Label>
            <Input
              name="title"
              type="text"
              required
              placeholder="Bref et simple..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              required
              placeholder="Décrivez votre maison..."
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Prix</Label>
            <Input
              name="price"
              type="number"
              required
              placeholder="Prix par mois en EUR"
              min={10}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input name="image" type="file" required />
          </div>

          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Locataires</h3>
                  <p className="text-muted-foreground text-sm">
                    Combien de personnes peuvent y vivre?
                  </p>
                </div>

                <Counter name="guest" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Chambres</h3>
                  <p className="text-muted-foreground text-sm">
                    Combien de pièces avez-vous?
                  </p>
                </div>

                <Counter name="room" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Salle de bain</h3>
                  <p className="text-muted-foreground text-sm">
                    Combien de douches avez-vous?
                  </p>
                </div>

                <Counter name="bathroom" />
              </div>
            </CardHeader>
          </Card>
        </div>

        <CreatioBottomBar />
      </form>
    </>
  );
}
