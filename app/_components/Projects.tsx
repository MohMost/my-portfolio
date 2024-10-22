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
        <div className="md:w-[300px] w-full h-0.5 bg-secondary/20"></div>
      </div>
      <h3 className="dark:text-gray-400 text-gray-700 text-5xl font-bold fira-sans">
        My projects...
      </h3>
      <div className="grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3  gap-4 2xl:h-[600px] my-8 w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 2xl:col-span-2  bg-secondary/70   lg:grayscale-[70%] lg:hover:grayscale-0"
          className=""
        >
          <div className=" 2xl:w-full lg:w-1/2  h-full">
            <h2 className="text-left text-balance text-base text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              RubyDash
            </h2>

            <p className=" 2xl:mt-4 text-left  text-base/6 text-neutral-200 ">
              A dynamic and fully responsive blog platform that allows users to
              create, read, update, and delete blog posts, and includes user
              authentication.
            </p>
            <ul className="flex flex-row gap-2  flex-wrap 2xl:mt-4 text-left  text-base/6  ">
              <li>
                <Code className="text-sm">NextJs</Code>
              </li>
              <li>
                {" "}
                <Code className="text-sm">MongoDB</Code>{" "}
              </li>
              <li>
                <Code className="text-sm">Prisma</Code>
              </li>
              <li>
                <Code className="text-sm">Tailwind CSS</Code>
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
            className="absolute hidden lg:block 2xl:w-[90%] lg:w-[50%]   filter 2xl:-bottom-20 -bottom-10 -right-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="  col-span-1 2xl:col-span-1 lg:col-span-1  h-full lg:hover:bg-primary/70  bg-primary/70 min-h-[500px] lg:min-h-[300px] lg:grayscale-[70%] lg:hover:grayscale-0">
          <Image
            src="/makeviwesmobile.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="hidden 2xl:absolute 2xl:block h-full md:-right-10 -top-80 object-contain rounded-2xl"
          />
          <div className=" flex flex-col justify-center lg:justify-end h-full max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-200">
              MakeViews
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
              Make Views is a web agency that specializes in creating
              high-quality videos and helping clients grow their digital reach.
            </p>
            <ul className="flex flex-row gap-2 mt-4 text-left  flex-wrap text-base/6  ">
              <li>
                <Code className="text-sm">NextJs</Code>
              </li>

              <li>
                <Code className="text-sm">Tailwind CSS</Code>
              </li>
            </ul>
            <ul className="absolute flex bottom-10 flex-row gap-2 mt-4 text-left  text-base/6 text-neutral-200 z-[100] ">
              <li>
                <Link
                  target="_blank"
                  href="https://github.com/MohMost/make-views"
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
                  href="https://www.figma.com/design/nQy5qQoNlJBFH7bSyNoQOj/Portfolio-website-for-video-editors-(Community)?node-id=0-1&t=XgqFM0ghUKBFu4XC-1"
                >
                  <FigmaIcon
                    size={25}
                    className="fill-gray-700 dark:fill-white"
                  />
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://makeviews.vercel.app/">
                  <SquareArrowOutUpRight size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="group col-span-1 2xl:col-span-1 lg:col-span-2  lg:hover:bg-secondary/70 h-full bg-secondary  lg:grayscale-[70%] lg:hover:grayscale-0">
          <div className=" flex flex-col justify-start h-1/2 max-w-sm">
            <h2 className="max-w-80  text-left text-balance text-base text-xl md:text-xl lg:text-3xl  font-semibold tracking-[-0.015em] text-white">
              Vanity Corp
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              A marketing agency and i&apos;m currently working for them as a
              freelancer. I&apos;ve helped them rebuild and migrate their
              website from wordpress to Next.js.
            </p>
            <ul className="flex flex-row gap-2 mt-2  flex-wrap text-left  text-base/6  ">
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
                  href="https://github.com/Vanity-Corp/vanity-corp-site"
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
                  href="https://www.figma.com/design/PU0CEHgSmv7qOUfhxQsol1/Vanity-corp?node-id=0-1&t=BLPGDZEyilRcsH9n-1"
                >
                  <FigmaIcon
                    size={25}
                    className="fill-gray-700 dark:fill-white"
                  />
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://vanitycorp.fr/">
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
            className="absolute hidden lg:block 2xl:max-w-[150%] lg:max-w-[60%] 2xl:-bottom-20 2xl:-right-52 lg:bottom-0 lg:-right-40  object-contain "
          />
        </WobbleCard>
      </div>
    </Section>
  );
}

export default Projects;
