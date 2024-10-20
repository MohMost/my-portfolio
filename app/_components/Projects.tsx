import React from "react";
import Section from "./Section";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import { SquareArrowOutUpRight } from "lucide-react";
import FigmaIcon from "./icons/Figma";
function Projects() {
  return (
    <Section className="flex flex-col gap-4 mt-10">
      <h2 className="text-xl w-full font-semibold tracking-wider text-secondary">
        Projects
      </h2>
      <h3 className="dark:text-gray-400 text-gray-700 text-5xl font-bold fira-sans">
        The big three...
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-secondary min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              RubyDash
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200 fira-sans">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
            <ul className="flex flex-row gap-2 mt-4 text-left  text-base/6 text-neutral-200 ">
              <li>NextJs</li>
              <li>MongoDB</li>
            </ul>
            <ul className="flex flex-row gap-2 mt-4 text-left  text-base/6 text-neutral-200 ">
              <li>
                <Link href="https://github.com/MohMost/blog-project">
                  <GithubIcon />
                </Link>
              </li>
              <li>
                <FigmaIcon />
              </li>
              <li>
                {" "}
                <SquareArrowOutUpRight />
              </li>
            </ul>
          </div>

          <Image
            src="/rubydash.webp"
            width={1000}
            height={1000}
            alt="linear demo image"
            className="absolute -right-4 md:-right-[10%] w-[50%]  filter -bottom-5 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-primary">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/MakeViews.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </Section>
  );
}

export default Projects;
