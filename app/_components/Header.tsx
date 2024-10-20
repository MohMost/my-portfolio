import { Button } from "@/components/ui/button";
import Section from "./Section";
import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModToggler";
export default function Header() {
  const navigation = ["Projets", "About", "Pricing", "Contact"];
  return (
    <header className="fixed top-0 py-4 backdrop-none w-full">
      <div className="flex items-center px-4 lg:px-8 ">
        <Image src="/Group 1.png" width={64} height={64} alt="logo" />
        <div className="flex-1" />
        <div className="hidden text-white items-center text-center lg:flex lg:items-center ">
          <ul className="items-center list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <span className="text-[#e6d762]">0{index + 1}.</span>
                <Link
                  href="/"
                  className="inline-block  px-[10px] py-2 text-lg font-normal text-gray-300 no-underline rounded-md hover:text-[#e6d762] focus:text-indigo-500  focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
