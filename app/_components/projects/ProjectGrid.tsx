"use client";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import Section from "../Section";
import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import WordpressIcon from "../icons/Wordpress";
import Nextjs from "../icons/Nextjs";
import Tailwind from "../icons/Tailwind";
import FireBaseIcon from "../icons/Firebase";
import WoocommerceIcon from "../icons/Woocommerce";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface ProjectsTypes {
  id: string;
  img: string;
  title: string;
  des: string;
  link: string;
  github?: ReactElement;
  githubLink?: string;
  technologies?: Technologies[];
}
export interface Technologies {
  icon: ReactElement;
  name: string;
}
const projects: ProjectsTypes[] = [
  {
    id: "01",
    img: "/piattopizza.webp",
    title: "Paitto Pizza",
    des: "",
    link: "https://piatto-pizza.com/",
    technologies: [
      {
        name: "Wordpress",
        icon: <WordpressIcon size={25} className="fill-white" />,
      },

      {
        name: "Woocommerce",
        icon: <WoocommerceIcon size={25} className="fill-white" />,
      },
    ],
  },
  {
    id: "02",
    img: "/melobellus.webp",
    title: "Melobellus",
    des: "",
    link: "https://melobellus.vercel.app/",
    github: <GithubIcon size={25} className="fill-white" />,
    githubLink: "https://github.com/MohMost/melobellus-nextjs",
    technologies: [
      {
        name: "Nextjs",
        icon: <Nextjs size={25} className="fill-white" key={1} />,
      },
      {
        name: "Tailwind",
        icon: <Tailwind size={25} className="fill-white" key={2} />,
      },
      {
        name: "Firebase",
        icon: <FireBaseIcon size={25} className="fill-white" key={3} />,
      },
    ],
  },
  {
    id: "03",
    img: "/legaleurocorp.webp",
    title: "Legal Euro Corp",
    des: "",
    link: "https://legaleurocorp.com/",
    technologies: [
      {
        name: "Wordpress",
        icon: <WordpressIcon size={25} className="fill-white" />,
      },
    ],
  },
  {
    id: "04",
    img: "/madiaponews.webp",
    title: "Madiaponews",
    des: "",
    link: "https://madiasponews.com/",
    technologies: [
      {
        name: "Wordpress",
        icon: <WordpressIcon size={25} className="fill-white" />,
      },
    ],
  },
];

export default function index() {
  return (
    <Section className="flex flex-col gap-4 my-28">
      <div className="grid grid-cols-12  gap-4 overflow-hidden px-5 lg:pb-5 pb-2">
        {projects.map((project, index) => {
          let colSpanClass = "sm:col-span-6 col-span-12 ";
          if (index === 0) {
            colSpanClass = " sm:col-span-5 col-span-12 ";
          } else if (index === 1) {
            colSpanClass = "sm:col-span-7 col-span-12 ";
          } else if (index === projects.length - 2) {
            colSpanClass = "sm:col-span-7 col-span-12 ";
          } else if (index === projects.length - 1) {
            colSpanClass = "sm:col-span-5 col-span-12 ";
          }
          return (
            <>
              <motion.article
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut" }}
                viewport={{ once: false }}
                className={` relative  ${colSpanClass} `}
              >
                <div className="w-auto h-full">
                  <Image
                    src={project?.img}
                    alt={"image"}
                    height={600}
                    width={1200}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute lg:bottom-2 bottom-0 text-black w-full p-4 flex justify-between items-center">
                  {" "}
                  <div className="flex gap-2">
                    <h3 className="lg:text-xl text-sm bg-black text-white rounded-xl p-2 px-4">
                      {project.title}
                    </h3>

                    {project.technologies?.map((tech: Technologies, index) => (
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="lg:w-12 w-10 lg:h-12 h-10 text-white grid place-content-center rounded-full bg-black">
                              {tech.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{tech.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Link
                        href={project.link}
                        className="lg:w-12 w-10 lg:h-12 h-10 text-white grid place-content-center rounded-full bg-black"
                        target="_blank"
                      >
                        {project.github}
                      </Link>
                    )}

                    <Link
                      href={project.link}
                      className="lg:w-12 w-10 lg:h-12 h-10 text-white grid place-content-center rounded-full bg-black"
                      target="_blank"
                    >
                      <MoveUpRight />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </>
          );
        })}
      </div>
    </Section>
  );
}
