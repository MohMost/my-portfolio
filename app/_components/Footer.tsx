import Link from "next/link";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import { getI18n } from "@/locales/server";

async function Footer() {
  const t = await getI18n();

  return (
    <Section className="mb-8 mt-16 flex flex-col items-center justify-center gap-4 border-t pt-8">
      <footer>
        <div className="flex w-fit flex-row items-center justify-start gap-2">
          <p className="text-center text-muted-foreground">
            {t("footer.text")}
            <Link href="mailto:mohmost.contact@gmail.com">
              <Button variant="link">Prospecta Studio</Button>
            </Link>
          </p>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;
