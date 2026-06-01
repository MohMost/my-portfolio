import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getI18n } from "@/locales/server";
import { Globe2, ShoppingCart, PanelsTopLeft, Smartphone } from "lucide-react";
import Section from "./Section";

const offers = [
  { icon: Globe2, nameKey: "skills.skill1.name", descriptionKey: "skills.skill1.description" },
  { icon: ShoppingCart, nameKey: "skills.skill2.name", descriptionKey: "skills.skill2.description" },
  { icon: PanelsTopLeft, nameKey: "skills.skill3.name", descriptionKey: "skills.skill3.description" },
  { icon: Smartphone, nameKey: "skills.skill4.name", descriptionKey: "skills.skill4.description" },
] as const;

const proofPoints = ["Senior", "Junior", "Prospection", "PME", "Niche", "Maintenance"];

async function Skills() {
  const t = await getI18n();

  return (
    <Section className="py-24" id="services">
      <div className="mb-12 max-w-3xl">
        <Badge variant="outline" className="mb-4 border-primary text-secondary">
          {t("skills.subtitle")}
        </Badge>
        <h2 className="text-3xl font-black text-black dark:text-gray-100 md:text-5xl">
          {t("skills.title")}
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {t("skills.intro")}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {offers.map((offer) => (
          <Card key={offer.nameKey} className="group overflow-hidden border-border/70 bg-card/80 transition hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-white transition group-hover:bg-primary group-hover:text-primary-foreground">
                <offer.icon className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl">{t(offer.nameKey)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-muted-foreground">{t(offer.descriptionKey)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {proofPoints.map((point) => (
          <span key={point} className="rounded-full border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground">
            {point}
          </span>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
