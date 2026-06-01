import Link from "next/link";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";
import { Mail } from "lucide-react";

function Sidebar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 hidden w-[60px] flex-col items-center justify-between gap-8 px-4 lg:mx-8 md:flex">
      <ul className="flex w-full flex-col gap-6 text-white">
        <li className="text-base">
          <Link
            aria-label="LinkedIn"
            className="flex justify-center"
            href="https://www.linkedin.com/in/mostefai-mohamed/"
          >
            <LinkedinIcon size={25} className="fill-gray-700 dark:fill-white" />
          </Link>
        </li>
        <li className="text-base">
          <Link
            aria-label="Instagram"
            className="flex justify-center"
            href="https://www.instagram.com/mohmost32/"
          >
            <InstagramIcon size={25} className="fill-gray-700 dark:fill-white" />
          </Link>
        </li>
        <li className="text-base">
          <Link
            aria-label="Email"
            className="flex justify-center"
            href="mailto:mohmost.contact@gmail.com"
          >
            <Mail size={25} className="text-gray-700 dark:text-white" />
          </Link>
        </li>
      </ul>
      <div className="h-20 w-[1px] bg-gray-700 dark:bg-gray-300" />
    </div>
  );
}

export default Sidebar;
