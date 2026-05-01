"use client";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import Section from "../Section";
import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import FigmaIcon from "../icons/Figma";
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
import AstroIcon from "../icons/Astro";
import ReactIcon from "../icons/React";
import MongoDBIcon from "../icons/MongoDB";
interface ProjectsTypes {
  id: string;
  img: string;
  title: string;
  des: string;
  link: string;
  github?: ReactElement;
  figma?: ReactElement;
  githubLink?: string;
  figmaLink?: string;
  technologies?: Technologies[];
}
export interface Technologies {
  icon: ReactElement;
  name: string;
}
const projects: ProjectsTypes[] = [
  {
    id: "01",
    img: "/cemika.png",
    title: "Cemika cuisine",
    des: "",
    link: "https://cemika-cuisine.com/",
    figma: <FigmaIcon size={25} className="fill-white" />,
    figmaLink:
      "https://www.figma.com/design/CQVZUQWIPNJNIPjOjuVVlK/CemikaV2?node-id=521-34802&t=fSJw8TpILSYLBr06-0",
    technologies: [
      {
        name: "Wordpress",
        icon: <WordpressIcon size={25} className="fill-white" />,
      },
    ],
  },
  {
    id: "02",
    img: "/zidna.png",
    title: "Zidna Digital",
    des: "",
    link: "https://href.li/?https://zidnadigital.com/",
    technologies: [
      {
        name: "React",
        icon: <ReactIcon size={25} className="fill-white" />,
      },
      {
        name: "Tailwind",
        icon: <Tailwind size={25} className="fill-white" />,
      },
    ],
  },
  {
    id: "03",
    img: "/automatisons.png",
    title: "Automatisons",
    des: "",
    github: <GithubIcon size={25} className="fill-white" />,
    githubLink: "https://github.com/LK-Organization/automatisations",
    link: "https://href.li/?https://www.automatisons.fr/",
    technologies: [
      {
        name: "Astro",
        icon: <AstroIcon size={25} className="fill-white" />,
      },
      {
        name: "React",
        icon: <ReactIcon size={25} className="fill-white" />,
      },
      {
        name: "Tailwind",
        icon: <Tailwind size={25} className="fill-white" />,
      },
    ],
  },
  {
    id: "04",
    img: "/vanitycorp.webp",
    title: "Vanity Corp",
    des: "",
    github: <GithubIcon size={25} className="fill-white" />,
    githubLink: "https://github.com/Vanity-Corp/vanity-corp-site",
    link: "https://www.vanitycorp.fr/",
    technologies: [
      {
        name: "Nextjs",
        icon: <Nextjs size={25} className="fill-white" />,
      },
      {
        name: "Tailwind",
        icon: <Tailwind size={25} className="fill-white" />,
      },
    ],
  },
  {
    id: "05",
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
    id: "06",
    img: "/giveong.webp",
    title: "GIVE ONG",
    des: "",
    link: "https://give-ong.net/",
    technologies: [
      {
        name: "Wordpress",
        icon: <WordpressIcon size={25} className="fill-white" />,
      },
    ],
  },
  {
    id: "07",
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
    id: "08",
    img: "/exosquelette.webp",
    title: "Exosquelette",
    des: "",
    link: "https://href.li/?https://exosquelette.fr/",
    technologies: [
      {
        name: "Wordpress",
        icon: <WordpressIcon size={25} className="fill-white" />,
      },
    ],
  },
  {
    id: "09",
    img: "/rubydash.webp",
    title: "Rubydash",
    des: "",
    github: <GithubIcon size={25} className="fill-white" />,
    githubLink: "https://github.com/MohMost/blog-project",
    figma: <FigmaIcon size={25} className="fill-white" />,
    figmaLink:
      "https://www.figma.com/design/0WNWtTuWUMV4wVDMlOWUo2/RubyDash-%7C-home-page?node-id=0-1&t=tHwSqPFX8sPCkqqg-1",
    link: "https://rubydash.vercel.app/",
    technologies: [
      {
        name: "Nextjs",
        icon: <Nextjs size={25} className="fill-white" />,
      },
      {
        name: "Tailwind",
        icon: <Tailwind size={25} className="fill-white" />,
      },
      {
        name: "MongoDB",
        icon: <MongoDBIcon size={25} className="fill-white" />,
      },
    ],
  },
  {
    id: "10",
    img: "/MakeViews.webp",
    title: "MakeViews",
    des: "",
    github: <GithubIcon size={25} className="fill-white" />,
    githubLink: "https://github.com/Vanity-Corp/vanity-corp-site",
    link: "https://www.vanitycorp.fr/",
    technologies: [
      {
        name: "Nextjs",
        icon: <Nextjs size={25} className="fill-white" />,
      },
      {
        name: "Tailwind",
        icon: <Tailwind size={25} className="fill-white" />,
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
                    className="h-full w-full object-cover object-left-top rounded-xl"
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
                        href={project.githubLink}
                        className="lg:w-12 w-10 lg:h-12 h-10 text-white grid place-content-center rounded-full bg-black"
                        target="_blank"
                      >
                        {project.github}
                      </Link>
                    )}
                    {project.figma && (
                      <Link
                        href={project.figmaLink}
                        className="lg:w-12 w-10 lg:h-12 h-10 text-white grid place-content-center rounded-full bg-black"
                        target="_blank"
                      >
                        {project.figma}
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
