import Section from "./Section";
import Frame from "./Frame";
import Code from "@/components/ui/Code";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";
import { Mail } from "lucide-react";
import { getI18n } from "@/locales/server";

const Hero = async () => {
  const t = await getI18n(); // Access translations for the 'banner' section

  return (
    <Section className="w-full py-32 md:py-40">
      <Frame
        grid
        className="flex flex-col md:flex-row gap-12 md:gap-8 items-center justify-center p-8 md:p-16"
      >
        <div className="flex flex-col items-center justify-center w-full z-50">
          <div className="text-center lg:text-left w-full">
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-primary font-mono mb-3">
              {t("banner.text1")} {/* Hi, my name is */}
            </p>
            <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-serif italic font-light leading-[1.1] tracking-tight text-foreground">
              {t("banner.text2")} {/* Mostefai Mohamed */}
            </h1>
            <h2 className="mt-3 text-2xl xl:text-3xl 2xl:text-4xl font-heading leading-tight tracking-tight text-foreground/70">
              {t("banner.text3")}{" "}
              {/* I build modern and intuitive web experiences */}
            </h2>
            <p className="py-6 max-w-xl mx-auto lg:mx-0 leading-relaxed text-muted-foreground text-base xl:text-lg">
              {t("banner.text4").split("JavaScript")[0]}
              <Code>JavaScript</Code>
              {t("banner.text4").split("JavaScript")[1]}
            </p>
          </div>
          <ul className="flex md:hidden w-full flex-row justify-center items-center gap-6">
            <li className="text-base">
              <Link className="flex justify-center" href="/">
                <GithubIcon
                  size={25}
                  className="fill-muted-foreground hover:fill-foreground transition-colors"
                />
              </Link>
            </li>
            <li className="text-base">
              <Link className="flex justify-center" href="/about">
                <LinkedinIcon
                  size={25}
                  className="fill-muted-foreground hover:fill-foreground transition-colors"
                />
              </Link>
            </li>
            <li className="text-base">
              <Link className="flex justify-center" href="/about">
                <InstagramIcon
                  size={25}
                  className="fill-muted-foreground hover:fill-foreground transition-colors"
                />
              </Link>
            </li>
            <li className="text-base">
              <Link
                className="flex justify-center"
                href="mailto:mohmost.contact@gmail.com"
              >
                <Mail
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  size={25}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-center w-full">
          <CodeWindow />
        </div>
      </Frame>
    </Section>
  );
};

function CodeWindow() {
  return (
    <div className="w-full max-w-md rounded-lg border border-primary/10 bg-card shadow-[0_1px_2px_rgba(49,38,59,0.10),0_26px_57px_rgba(49,38,59,0.10),0_103px_103px_rgba(49,38,59,0.06)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">
          engineer.ts
        </span>
      </div>
      <pre className="p-6 text-[13px] leading-[1.8] font-mono overflow-x-auto">
        <code>
          <span className="text-muted-foreground">
            {"// currently building"}
          </span>
          {"\n"}
          <span className="code-key">const</span>{" "}
          <span className="text-foreground">engineer</span>{" "}
          <span className="text-muted-foreground">=</span>{" "}
          <span className="text-muted-foreground">{"{"}</span>
          {"\n"}
          {"  "}
          name<span className="text-muted-foreground">:</span>{" "}
          <span className="code-string">&quot;Mostefai Mohamed&quot;</span>
          <span className="text-muted-foreground">,</span>
          {"\n"}
          {"  "}
          role<span className="text-muted-foreground">:</span>{" "}
          <span className="code-string">&quot;Fullstack Engineer&quot;</span>
          <span className="text-muted-foreground">,</span>
          {"\n"}
          {"  "}
          stack<span className="text-muted-foreground">:</span>{" "}
          <span className="text-muted-foreground">[</span>
          <span className="code-string">&quot;Next.js&quot;</span>
          <span className="text-muted-foreground">, </span>
          <span className="code-string">&quot;TypeScript&quot;</span>
          <span className="text-muted-foreground">, </span>
          <span className="code-string">&quot;PostgreSQL&quot;</span>
          <span className="text-muted-foreground">],</span>
          {"\n"}
          {"  "}
          <span className="code-fn">ship</span>
          <span className="text-muted-foreground">() {"{"}</span>
          {"\n"}
          {"    "}
          <span className="code-key">return</span>{" "}
          <span className="code-string">&quot;always&quot;</span>
          <span className="text-muted-foreground">;</span>
          {"\n"}
          {"  "}
          <span className="text-muted-foreground">{"}"},</span>
          {"\n"}
          <span className="text-muted-foreground">{"};"}</span>
        </code>
      </pre>
    </div>
  );
}

export default Hero;
