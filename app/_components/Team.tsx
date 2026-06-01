import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getI18n } from "@/locales/server";
import Section from "./Section";

type TeamMember = {
  name: string;
  handle?: string;
  roleKey: "team.member1.role" | "team.member2.role" | "team.member3.role";
  descriptionKey:
    | "team.member1.description"
    | "team.member2.description"
    | "team.member3.description";
  initials: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Mohamed",
    roleKey: "team.member1.role",
    descriptionKey: "team.member1.description",
    initials: "MO",
    image: "",
  },
  {
    name: "Tinhinan",
    handle: "50ulR3AP3R",
    roleKey: "team.member2.role",
    descriptionKey: "team.member2.description",
    initials: "50",
    image: "",
  },
  {
    name: "Farinas",
    roleKey: "team.member3.role",
    descriptionKey: "team.member3.description",
    initials: "FA",
    image: "",
  },
];

async function Team() {
  const t = await getI18n();

  return (
    <Section className="py-24" id="team">
      <div className="mb-12 max-w-3xl">
        <Badge variant="outline" className="mb-4 border-primary text-secondary">
          {t("team.subtitle")}
        </Badge>
        <h2 className="text-3xl font-black text-black dark:text-gray-100 md:text-5xl">
          {t("team.title")}
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {t("team.intro")}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden border-border/70 bg-card/90 shadow-sm">
            <CardContent className="p-0">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-slate-900 to-black">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${t(member.roleKey)}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                ) : (
                  <div className="grid h-28 w-28 place-items-center rounded-full border border-white/20 bg-white/10 text-4xl font-black text-white shadow-2xl backdrop-blur">
                    {member.initials}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-black text-black dark:text-white">
                    {member.name}
                  </h3>
                  {member.handle && (
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-bold text-secondary">
                      {member.handle}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-semibold text-secondary">{t(member.roleKey)}</p>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {t(member.descriptionKey)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-6 rounded-2xl border bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
        {t("team.imageNote")}
      </p>
    </Section>
  );
}

export default Team;
