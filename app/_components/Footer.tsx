import Link from "next/link";
import Section from "./Section";
import { Button } from "@/components/ui/button";

function Footer() {
  const figmaColors = {
    green: "#09CF83",
    blue: "#19BCFE",
    red: "#F24E1E",
    orange: "#FF7262",
    purple: "#A259FF",
  };
  return (
    <Section className="flex flex-col  items-center gap-4 mt-28 mb-8">
      <footer>
        <div className="flex flex-row justify-start items-center gap-2 w-fit">
          <p>
            Designed & Built by{""}
            <Link href="https://github.com/MohMost">
              <Button variant={"link"}>Mostefai Mohamed</Button>
            </Link>
          </p>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;
