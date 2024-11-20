import Section from "./Section";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";

function GetInTouch() {
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
          Contact
        </h2>
      </div>

      <h3 className="dark:text-gray-400 text-center text-gray-700 text-5xl font-bold fira-sans">
        Get in touch
      </h3>
      <ul className="flex md:hidden w-full flex-row justify-center items-center gap-6 text-white">
        <li className="  text-base">
          <Link className="flex justify-center" href="/">
            <GithubIcon size={25} className="fill-gray-700 dark:fill-white" />
          </Link>
        </li>
        <li className="text-base">
          <Link className="flex justify-center" href="/about">
            <LinkedinIcon size={25} className="fill-gray-700 dark:fill-white" />
          </Link>
        </li>
        <li className=" text-base">
          <Link className="flex justify-center" href="/about">
            <InstagramIcon
              size={25}
              className="fill-gray-700 dark:fill-white"
            />
          </Link>
        </li>
      </ul>
      <div className="flex flex-row gap-8 my-8">
        <Link href="mailto:mohmost.contact@gmail.com">
          <Button>Contact me</Button>
        </Link>
      </div>
    </Section>
  );
}

export default GetInTouch;
