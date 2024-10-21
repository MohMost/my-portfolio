import Section from "./Section";

import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="flex flex-row gap-8 my-8">
        <Link href="mailto:mohmost32@gmail.com">
          <Button>Get in touch</Button>
        </Link>
      </div>
    </Section>
  );
}

export default GetInTouch;
