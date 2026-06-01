import Link from "next/link";
import { CheckCircle2, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getI18n } from "@/locales/server";
import Section from "./Section";

const steps = ["contact.step1", "contact.step2", "contact.step3", "contact.step4"] as const;

async function GetInTouch() {
  const t = await getI18n();

  return (
    <Section className="py-24" id="contact">
      <Card className="overflow-hidden border-border/70 bg-card shadow-2xl">
        <CardContent className="grid gap-0 p-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-secondary via-slate-900 to-black p-8 text-white md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              {t("contact.subtitle")}
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">{t("contact.title")}</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">{t("contact.body")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="mailto:mohmost.contact@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  {t("contact.button")}
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="tel:+33000000000">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  {t("contact.callButton")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold">{t("contact.planTitle")}</h3>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border bg-background p-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <p className="font-bold">Semaine {index + 1}</p>
                    <p className="text-muted-foreground">{t(step)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}

export default GetInTouch;
