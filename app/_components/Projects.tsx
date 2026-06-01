import Link from "next/link";
import { ArrowRight, Dumbbell, Home, Stethoscope, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCurrentLocale, getI18n } from "@/locales/server";
import Section from "./Section";

const projects = [
  { icon: Utensils, titleKey: "projects.project1.name", descriptionKey: "projects.project1.description" },
  { icon: Home, titleKey: "projects.project2.name", descriptionKey: "projects.project2.description" },
  { icon: Stethoscope, titleKey: "projects.project3.name", descriptionKey: "projects.project3.description" },
  { icon: Dumbbell, titleKey: "projects.project4.name", descriptionKey: "projects.project4.description" },
] as const;

async function Projects() {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return (
    <Section className="py-24" id="portfolio">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-4 border-primary text-secondary">
            {t("projects.subtitle")}
          </Badge>
          <h2 className="text-3xl font-black text-black dark:text-gray-100 md:text-5xl">
            {t("projects.title")}
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {t("projects.intro")}
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href={`/${locale}/pricing`}>
            {t("projects.moreProjects")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={project.titleKey} className="overflow-hidden border-border/70 bg-card/90">
            <CardContent className="p-0">
              <div className="flex min-h-[280px] flex-col justify-between bg-gradient-to-br from-secondary/90 via-slate-900 to-black p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                    <project.icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-semibold text-white/60">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black">{t(project.titleKey)}</h3>
                  <p className="mt-4 leading-7 text-white/75">{t(project.descriptionKey)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
