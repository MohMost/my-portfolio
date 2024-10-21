import React from "react";
import Section from "./Section";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import { SquareArrowOutUpRight } from "lucide-react";
import FigmaIcon from "./icons/Figma";
import Code from "@/components/ui/Code";
function Projects() {
  return (
    <Section id="projects" className="flex flex-col gap-4 my-28">
      <div className="flex flex-row justify-start items-center gap-2 w-fit">
        <h2 className="text-xl  font-semibold tracking-wider text-secondary">
          Projects
        </h2>
        <div className="w-[300px] h-0.5 bg-secondary/20"></div>
      </div>
      <h3 className="dark:text-gray-400 text-gray-700 text-5xl font-bold fira-sans">
        My projects...
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[600px] my-8 w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2  bg-secondary/70   grayscale-[70%] hover:grayscale-0"
          className=""
        >
          <div className=" w-full h-full">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              RubyDash
            </h2>

            <p className="mt-4 text-left  text-base/6 text-neutral-200 ">
              A dynamic and fully responsive blog platform that allows users to
              create, read, update, and delete blog posts, and includes user
              authentication.
            </p>
            <ul className="flex flex-row gap-2 mt-4 text-left  text-base/6  ">
              <li>
                <Code>NextJs</Code>
              </li>
              <li>
                {" "}
                <Code>MongoDB</Code>{" "}
              </li>
              <li>
                <Code>Prisma</Code>
              </li>
              <li>
                <Code>Tailwind CSS</Code>
              </li>
            </ul>
            <ul className="absolute flex flex-row gap-2 mt-4 text-left  text-base/6 text-neutral-200 z-[100] ">
              <li>
                <Link
                  target="_blank"
                  href="https://github.com/MohMost/blog-project"
                >
                  <GithubIcon
                    size={25}
                    className="fill-gray-700 dark:fill-white"
                  />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.figma.com/design/0WNWtTuWUMV4wVDMlOWUo2/RubyDash-%7C-home-page?node-id=0-1&t=tHwSqPFX8sPCkqqg-1"
                >
                  <FigmaIcon
                    size={25}
                    className="fill-gray-700 dark:fill-white"
                  />
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://rubydash.vercel.app/">
                  <SquareArrowOutUpRight size={25} />
                </Link>
              </li>
            </ul>
          </div>

          <Image
            src="/rubydash.webp"
            width={1000}
            height={1000}
            alt="linear demo image"
            className="absolute   w-[90%]   filter -bottom-20 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName=" flex justify-end col-span-1  h-full hover:bg-primary/70 h-full bg-primary/70 min-h-[500px] lg:min-h-[300px] grayscale-[70%] hover:grayscale-0">
          <Image
            src="/makeviwesmobile.png"
            width={500}
            height={500}
            alt="linear demo image"
            className=" absolute  h-full md:-right-10 -top-80 object-contain rounded-2xl"
          />
          <div className=" flex flex-col justify-end h-full max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-200">
              MakeViews
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
              Make Views is a web agency that specializes in creating
              high-quality videos and helping clients grow their digital reach.
            </p>
            <ul className="flex flex-row gap-2 mt-4 text-left  text-base/6  ">
              <li>
                <Code>NextJs</Code>
              </li>

              <li>
                <Code>Tailwind CSS</Code>
              </li>
            </ul>
            <ul className="absolute flex bottom-10 flex-row gap-2 mt-4 text-left  text-base/6 text-neutral-200 z-[100] ">
              <li>
                <Link
                  target="_blank"
                  href="https://github.com/MohMost/blog-project"
                >
                  <GithubIcon
                    size={25}
                    className="fill-gray-700 dark:fill-white"
                  />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.figma.com/design/0WNWtTuWUMV4wVDMlOWUo2/RubyDash-%7C-home-page?node-id=0-1&t=tHwSqPFX8sPCkqqg-1"
                >
                  <FigmaIcon
                    size={25}
                    className="fill-gray-700 dark:fill-white"
                  />
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://rubydash.vercel.app/">
                  <SquareArrowOutUpRight size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="group col-span-1  hover:bg-secondary/70 h-full bg-secondary  grayscale-[70%] hover:grayscale-0">
          <div className=" flex flex-col justify-start h-1/2 max-w-sm">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl  font-semibold tracking-[-0.015em] text-white">
              Vanity Corp
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              A marketing agency and i&apos;m currently working for them as a
              freelancer. I&apos;ve helped them rebuild and migrate their
              website from wordpress to Next.js.
            </p>
            <ul className="flex flex-row gap-2 mt-2 text-left  text-base/6  ">
              <li>
                <Code className="text-sm">NextJs</Code>
              </li>
              <li>
                <Code className="text-sm">Tailwind CSS</Code>
              </li>{" "}
              <li>
                <Code className="text-sm">PostgreSQL</Code>
              </li>
            </ul>
            <ul className="absolute flex bottom-10 flex-row gap-2 mt-4 text-left  text-base/6 text-neutral-200 z-[100] ">
              <li>
                <Link
                  target="_blank"
                  href="https://github.com/MohMost/blog-project"
                >
                  <GithubIcon
                    size={25}
                    className="fill-gray-700 dark:fill-white"
                  />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.figma.com/design/0WNWtTuWUMV4wVDMlOWUo2/RubyDash-%7C-home-page?node-id=0-1&t=tHwSqPFX8sPCkqqg-1"
                >
                  <FigmaIcon
                    size={25}
                    className="fill-gray-700 dark:fill-white"
                  />
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://rubydash.vercel.app/">
                  <SquareArrowOutUpRight size={25} />
                </Link>
              </li>
            </ul>
          </div>
          <Image
            src="/vanity.png"
            width={2500}
            height={2500}
            alt="linear demo image"
            className="absolute max-w-[150%] -bottom-20 object-contain "
          />
        </WobbleCard>
      </div>
    </Section>
  );
}

export default Projects;
