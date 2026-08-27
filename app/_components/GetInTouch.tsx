import Section from "./Section";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";
import { getI18n } from "@/locales/server";

async function GetInTouch() {
  const t = await getI18n();
  const figmaColors = {
    green: "#09CF83",
    blue: "#19BCFE",
    red: "#F24E1E",
    orange: "#FF7262",
    purple: "#A259FF",
  };
  return (
    <Section id="contact" className="flex flex-col  items-center gap-4 my-28">
      <div className="flex flex-row justify-start items-center gap-2 w-fit">
        <h2 className="text-xl  font-semibold tracking-wider text-secondary">
          {" "}
          {t("contact.title")}{" "}
        </h2>
      </div>

      <h3 className="text-center text-foreground text-4xl md:text-5xl font-heading tracking-tight">
        {t("contact.subtitle")}
      </h3>
      <ul className="flex md:hidden w-full flex-row justify-center items-center gap-6">
        <li className="  text-base">
          <Link className="flex justify-center" href="/">
            <GithubIcon
              size={25}
              className="fill-muted-foreground hover:fill-foreground transition-colors"
            />
          </Link>
        </li>
        <li className="text-base">
          <Link className="flex justify-center" href="/about">
            <LinkedinIcon
              size={25}
              className="fill-muted-foreground hover:fill-foreground transition-colors"
            />
          </Link>
        </li>
        <li className=" text-base">
          <Link className="flex justify-center" href="/about">
            <InstagramIcon
              size={25}
              className="fill-muted-foreground hover:fill-foreground transition-colors"
            />
          </Link>
        </li>
      </ul>
      <div className="flex flex-row gap-8 my-8">
        <Link href="mailto:mohmost.contact@gmail.com">
          <Button> {t("contact.button")}</Button>
        </Link>
      </div>
    </Section>
  );
}

export default GetInTouch;
