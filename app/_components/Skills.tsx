import Postgres from "./icons/Postgres";
import ReactIcon from "./icons/React";
import Tailwind from "./icons/Tailwind";
import ClaudeIcon from "./icons/Claude";
import Section from "./Section";
import Frame from "./Frame";
import Code from "@/components/ui/Code";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import PhpIcon from "./icons/PHP";
import FigmaIcon from "./icons/Figma";
import MongoDBIcon from "./icons/MongoDB";
import WordpressIcon from "./icons/Wordpress";
import FireBaseIcon from "./icons/Firebase";
import AstroIcon from "./icons/Astro";
import VueJSIcon from "./icons/VueJS";
import OpenAIIcon from "./icons/OpenAI";
import { getI18n } from "@/locales/server";

const Skills = async () => {
  const t = await getI18n(); // Access translations for the 'skills' section
  const figmaColors = {
    green: "#09CF83",
    blue: "#19BCFE",
    red: "#F24E1E",
    orange: "#FF7262",
    purple: "#A259FF",
  };
  return (
    <Section id="skills" className="flex flex-col gap-4 my-40">
      <div className="flex flex-row justify-start items-center gap-2 w-fit">
        <h2 className="text-xl font-semibold tracking-wider text-secondary">
          {t("skills.title")} {/* Skills */}
        </h2>
        <div className="md:w-[300px] w-full h-0.5 bg-secondary/20"></div>
      </div>

      <h3 className="text-foreground text-4xl md:text-5xl font-heading tracking-tight">
        {t("skills.subtitle")} {/* The big three... */}
      </h3>
      <Frame className="my-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          <div className="group flex flex-col gap-3 p-6 md:p-8 hover:bg-white dark:hover:bg-[hsl(var(--card))]">
            <ReactIcon
              width={40}
              height={40}
              className="fill-muted-foreground group-hover:fill-[#00D8FF] transition-colors"
            />
            <h3 className="font-bold text-lg text-foreground">
              {t("skills.skill1.name")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("skills.skill1.description")
                .split(/(React|Next\.js|TypeScript)/)
                .map((part, index) =>
                  part === "React" ||
                  part === "Next.js" ||
                  part === "TypeScript" ? (
                    <Code key={index} className="text-sm">
                      {part}
                    </Code>
                  ) : (
                    part
                  ),
                )}
            </p>
          </div>
          <div className="group flex flex-col gap-3 p-6 md:p-8 hover:bg-white dark:hover:bg-[hsl(var(--card))]">
            <Postgres
              width={40}
              height={40}
              className="fill-muted-foreground group-hover:fill-[#336791] transition-colors"
            />
            <h3 className="font-bold text-lg text-foreground">
              {t("skills.skill2.name")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("skills.skill2.description").split("PostgreSQL")[0]}
              <Code className="text-sm">PostgreSQL</Code>
              {t("skills.skill2.description").split("PostgreSQL")[1]}
            </p>
          </div>
          <div className="group flex flex-col gap-3 p-6 md:p-8 hover:bg-white dark:hover:bg-[hsl(var(--card))]">
            <Tailwind
              width={40}
              height={40}
              className="fill-muted-foreground group-hover:fill-[#44a8b3] transition-colors"
            />
            <h3 className="font-bold text-lg text-foreground">
              {t("skills.skill3.name")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("skills.skill3.description").split("Tailwind CSS")[0]}
              <Code className="text-sm">Tailwind CSS</Code>
              {t("skills.skill3.description").split("Tailwind CSS")[1]}
            </p>
          </div>
          <div className="group flex flex-col gap-3 p-6 md:p-8 hover:bg-white dark:hover:bg-[hsl(var(--card))]">
            <ClaudeIcon
              size={40}
              className="fill-muted-foreground group-hover:fill-[#d97757] transition-colors"
            />
            <h3 className="font-bold text-lg text-foreground">
              {t("skills.skill4.name")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("skills.skill4.description").split("Claude Code")[0]}
              <Code className="text-sm">Claude Code</Code>
              {t("skills.skill4.description").split("Claude Code")[1]}
            </p>
          </div>
        </div>
      </Frame>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"link"} className="font-semibold text-lg">
            {t("skills.otherSkills")}
          </Button>
        </DrawerTrigger>

        <DrawerContent className="bg-background flex justify-center items-center">
          <div className="flex justify-center items-center mx-auto w-full ">
            <DrawerHeader>
              <DrawerClose asChild></DrawerClose>
            </DrawerHeader>
            <div className="md:w-1/2 w-full grid grid-cols-4 gap-10 p-10 text-center place-content-center">
              <div className="group flex flex-col items-center">
                <PhpIcon
                  width={50}
                  height={50}
                  className="grayscale hover:grayscale-0"
                />
              </div>
              <div className="group flex flex-col items-center">
                <MongoDBIcon
                  width={50}
                  height={50}
                  className="fill-muted-foreground hover:fill-[#13aa52]"
                />
              </div>
              <div className="group flex flex-col items-center">
                <WordpressIcon
                  width={50}
                  height={50}
                  className="grayscale hover:grayscale-0"
                />
              </div>
              <div className="group flex flex-col items-center">
                <FireBaseIcon
                  width={50}
                  height={50}
                  className="grayscale hover:grayscale-0"
                />
              </div>
              <div className="group flex flex-col items-center">
                <AstroIcon
                  width={50}
                  height={50}
                  className="grayscale hover:grayscale-0"
                />
              </div>
              <div className="group flex flex-col items-center">
                <VueJSIcon
                  width={50}
                  height={50}
                  className="grayscale hover:grayscale-0"
                />
              </div>
              <div className="group flex flex-col items-center">
                <FigmaIcon
                  green={figmaColors.green}
                  red={figmaColors.red}
                  orange={figmaColors.orange}
                  purple={figmaColors.purple}
                  blue={figmaColors.blue}
                  size={50}
                  className="grayscale hover:grayscale-0"
                />
              </div>
              <div className="group flex flex-col items-center">
                <OpenAIIcon
                  width={50}
                  height={50}
                  className="fill-muted-foreground group-hover:fill-[#17a683]"
                />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </Section>
  );
};

export default Skills;
