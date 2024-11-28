import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";

function Sidebar() {
  return (
    <div className="md:flex hidden fixed z-50 right-auto flex-col bottom-0 left-0 px-4 lg:mx-8 gap-8 justify-between w-[60px] items-center">
      <ul className="flex w-full flex-col gap-6 text-white">
        <li className=" w-full text-base">
          <Link
            className="flex justify-center"
            href="https://github.com/MohMost"
          >
            <GithubIcon size={25} className="fill-gray-700 dark:fill-white" />
          </Link>
        </li>
        <li className="text-base">
          <Link
            className="flex justify-center"
            href="https://www.linkedin.com/in/mostefai-mohamed/"
          >
            <LinkedinIcon size={25} className="fill-gray-700 dark:fill-white" />
          </Link>
        </li>
        <li className=" text-base">
          <Link
            className="flex justify-center"
            href="https://www.instagram.com/mohmost32/"
          >
            <InstagramIcon
              size={25}
              className="fill-gray-700 dark:fill-white"
            />
          </Link>
        </li>
      </ul>
      <div className="flex bg-gray-700 dark:bg-gray-300  h-20 justify-center w-[1px]" />
    </div>
  );
}

export default Sidebar;
