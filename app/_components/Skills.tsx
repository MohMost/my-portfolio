import Postgres from "./icons/Postgres";
import ReactIcon from "./icons/React";
import Tailwind from "./icons/Tailwind";
import Section from "./Section";
import Code from "@/components/ui/Code";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Section id="skills" className="flex flex-col gap-4 my-28">
      <div className="flex flex-row justify-start items-center gap-2 w-fit">
        <h2 className="text-xl font-semibold tracking-wider text-secondary">
          {t("skills.title")} {/* Skills */}
        </h2>
        <div className="md:w-[300px] w-full h-0.5 bg-secondary/20"></div>
      </div>

      <h3 className="dark:text-gray-400 text-gray-700 text-5xl font-bold fira-sans">
        {t("skills.subtitle")} {/* The big three... */}
      </h3>
      <div className="flex md:flex-row flex-col gap-4 my-8">
        <Card className="group flex flex-col gap-4 ">
          <CardHeader>
            <CardTitle>
              <ReactIcon
                width={50}
                height={50}
                className="fill-gray-500 group-hover:fill-[#00D8FF]"
              />
            </CardTitle>
            <CardDescription className="dark:text-gray-400 text-gray-600 text-3xl dark:group-hover:text-primary/70 group-hover:text-secondary/70">
              <span>{t("skills.skill1.name")}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="dark:text-gray-400 text-gray-700 leading-relaxed">
              {t("skills.skill1.description")
                .split(/(React|Next\.js|TypeScript)/)
                .map((part, index) =>
                  part === "React" ||
                  part === "Next.js" ||
                  part === "TypeScript" ? (
                    <Code key={index}>{part}</Code>
                  ) : (
                    part
                  )
                )}
            </p>
          </CardContent>
        </Card>
        <Card className="group flex flex-col gap-4">
          <CardHeader>
            <CardTitle>
              <Postgres
                width={50}
                height={50}
                className="fill-gray-500 group-hover:fill-[#336791]"
              />
            </CardTitle>
            <CardDescription>
              <h3 className="dark:text-gray-400 text-gray-600 text-3xl dark:group-hover:text-primary/70 group-hover:text-secondary/70">
                {t("skills.skill2.name")}
              </h3>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="dark:text-gray-400 text-gray-700 leading-relaxed">
              {t("skills.skill2.description").split("PostgreSQL")[0]}
              <Code>PostgreSQL</Code>
              {t("skills.skill2.description").split("PostgreSQL")[1]}
            </p>
          </CardContent>
        </Card>
        <Card className="group flex flex-col gap-4">
          <CardHeader>
            <CardTitle>
              <Tailwind
                width={50}
                height={50}
                className="fill-gray-500 group-hover:fill-[#44a8b3]"
              />
            </CardTitle>
            <CardDescription>
              <h3 className="dark:text-gray-400 text-gray-600 text-3xl dark:group-hover:text-primary/70 group-hover:text-secondary/70">
                {t("skills.skill3.name")}
              </h3>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="dark:text-gray-400 text-gray-700 leading-relaxed">
              {t("skills.skill3.description").split("Tailwind CSS")[0]}
              <Code>Tailwind CSS</Code>
              {t("skills.skill3.description").split("Tailwind CSS")[1]}
            </p>
          </CardContent>
        </Card>
      </div>

      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant={"link"}
            className="dark:text-primary text-secondary font-semibold text-lg"
          >
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
                  className="fill-gray-500 hover:fill-[#13aa52]"
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
                  className="fill-gray-500 group-hover:fill-[#17a683]"
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
