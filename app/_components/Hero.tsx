import Link from "next/link";
import { ArrowRight, CalendarCheck, PhoneCall, Sparkles } from "lucide-react";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCurrentLocale, getI18n } from "@/locales/server";

const stats = [
  { value: "50-100", labelKey: "banner.stat1" },
  { value: "30 jours", labelKey: "banner.stat2" },
  { value: "3 profils", labelKey: "banner.stat3" },
] as const;

const Hero = async () => {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return (
    <Section className="flex min-h-screen items-center pt-28" id="hero">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8 text-center lg:text-left">
          <Badge className="bg-primary/20 text-primary-foreground dark:text-primary border-primary/40">
            {t("banner.text1")}
          </Badge>
          <div className="space-y-5">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-black dark:text-gray-100 md:text-6xl xl:text-7xl">
              {t("banner.text2")}
            </h1>
            <p className="text-2xl font-semibold text-black/70 dark:text-gray-300 md:text-3xl">
              {t("banner.text3")}
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400 lg:mx-0">
              {t("banner.text4")}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button size="lg" asChild>
              <Link href="#contact">
                {t("banner.primaryCta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={`/${locale}/pricing`}>{t("banner.secondaryCta")}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border bg-card/70 p-4 text-center shadow-sm"
              >
                <p className="text-2xl font-black text-secondary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-secondary/30 via-primary/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border bg-card p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Prospect Sprint
                </p>
                <h2 className="text-2xl font-bold">{t("banner.panelTitle")}</h2>
              </div>
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-4">
              {[
                { icon: PhoneCall, title: t("banner.card1Title"), body: t("banner.card1Body") },
                { icon: CalendarCheck, title: t("banner.card2Title"), body: t("banner.card2Body") },
                { icon: ArrowRight, title: t("banner.card3Title"), body: t("banner.card3Body") },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl bg-muted/60 p-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
