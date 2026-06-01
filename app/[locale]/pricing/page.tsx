import Link from "next/link";
import { ArrowRight, Check, Clock, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "Site vitrine PME",
    price: "500€ - 1 500€",
    description: "Pour les entreprises locales qui veulent une présence crédible et des demandes entrantes.",
    icon: Rocket,
    highlight: false,
    features: [
      "3 à 5 pages structurées pour convertir",
      "Design responsive et rapide",
      "Formulaire de contact + tracking de base",
      "SEO local initial et indexation",
    ],
  },
  {
    name: "E-commerce lancement",
    price: "1 500€ - 4 000€",
    description: "Pour vendre en ligne avec un catalogue clair, des paiements sécurisés et une base évolutive.",
    icon: Sparkles,
    highlight: true,
    features: [
      "Catalogue produits et tunnel d'achat",
      "Paiement CB, PayPal ou Stripe",
      "Configuration livraison et emails transactionnels",
      "Formation pour gérer les produits",
    ],
  },
  {
    name: "Application web métier",
    price: "À partir de 3 000€",
    description: "Pour digitaliser un processus interne ou créer un outil sur mesure avec livraison senior.",
    icon: ShieldCheck,
    highlight: false,
    features: [
      "Cadrage fonctionnel et prototype",
      "Développement full-stack sur mesure",
      "Base de données, rôles et tableaux de bord",
      "Recette, déploiement et documentation",
    ],
  },
];

const retainers = [
  "Maintenance technique : à partir de 90€/mois",
  "Optimisations et petites évolutions : forfait mensuel sur devis",
  "Campagne prospection web : pages d&apos;atterrissage + scripts commerciaux",
];

export default function PricingPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background px-4 py-28">
        <div className="mx-auto max-w-7xl">
          <section className="mx-auto mb-16 max-w-4xl text-center">
            <Badge className="mb-5 bg-primary/20 text-primary-foreground dark:text-primary">
              Tarifs orientés résultat
            </Badge>
            <h1 className="text-4xl font-black tracking-tight text-black dark:text-gray-100 md:text-6xl">
              Des offres simples pour signer vite et livrer proprement.
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Nous ne vendons pas des heures : nous vendons un livrable clair, un planning maîtrisé et un accompagnement commercial pour transformer votre site en canal d&apos;acquisition.
            </p>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            {packages.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col border-border/70 bg-card/90 shadow-lg ${
                  plan.highlight ? "ring-2 ring-secondary" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-sm font-bold text-white">
                    Recommandé
                  </div>
                )}
                <CardHeader>
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-white">
                    <plan.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="min-h-16 text-base leading-7">
                    {plan.description}
                  </CardDescription>
                  <p className="pt-4 text-3xl font-black text-black dark:text-white">{plan.price}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-muted-foreground">
                        <Check className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" variant={plan.highlight ? "default" : "outline"}>
                    <Link href={`/${params.locale}#contact`}>
                      Demander un devis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Card className="border-border/70 bg-card/90">
              <CardHeader>
                <CardTitle className="text-3xl">Équipe et fonctionnement</CardTitle>
                <CardDescription className="text-base leading-7">
                  Le modèle est volontairement léger : un senior pour les points complexes, un junior pour l&apos;intégration et la maintenance, et un responsable commercial dédié à la prospection.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                {["Développeur senior", "Développeur junior", "Commercial / prospection"].map((role) => (
                  <div key={role} className="rounded-2xl border bg-background p-5">
                    <p className="font-bold">{role}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Responsabilités écrites, devis cadrés et suivi hebdomadaire pour éviter les zones grises.
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-secondary text-white">
              <CardHeader>
                <Clock className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-3xl">Options récurrentes</CardTitle>
                <CardDescription className="text-white/75">
                  Pour garder le site sécurisé, actif et utile commercialement après la mise en ligne.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {retainers.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}
