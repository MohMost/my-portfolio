import Image from "next/image";
import Section from "./Section";
import Code from "@/components/ui/Code";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";
import { Mail } from "lucide-react";
const Hero = () => {
  return (
    <Section className="flex h-screen items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full lg:w-2/3">
        <div className="text-center lg:text-left w-full 2xl:w-3/4">
          <p className="text-xl w-full font-semibold tracking-wider text-secondary ">
            Hi, my name is
          </p>
          <h1 className=" 2xl:text-6xl xl:text-5xl lg:text-2xl font-bold leading-snug tracking-tight  lg:leading-tight  xl:leading-tight dark:text-gray-300 text-black inconsolata-bold-title">
            Mostefai Mohamed.
          </h1>
          <h1 className="2xl:text-5xl w-full xl:text-4xl lg:text-2xl text-4xl font-bold leading-snug tracking-tight  lg:leading-tight xl:leading-tight dark:text-gray-400 text-black/70 inconsolata-bold-title">
            I build modern and intuitive web experiences
          </h1>
          <p className="py-5 base leading-normal text-gray-500 2xl:text-1xl xl:text-[20px] lg:text-2xl dark:text-gray-400 fira-sans">
            I&apos;m a self-taught full-stack web developer specializing in{" "}
            <Code>JavaScript</Code> building web apps for both business and
            consumer use.
          </p>
        </div>
        <ul className="flex md:hidden w-full flex-row justify-center items-center gap-6 text-white">
          <li className="  text-base">
            <Link className="flex justify-center" href="/">
              <GithubIcon size={25} className="fill-gray-700 dark:fill-white" />
            </Link>
          </li>
          <li className="text-base">
            <Link className="flex justify-center" href="/about">
              <LinkedinIcon
                size={25}
                className="fill-gray-700 dark:fill-white"
              />
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
          <li className=" text-base">
            <Link
              className="flex justify-center"
              href="mailto:mohmost32@gmail.com"
            >
              <Mail size={25} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex items-center justify-center w-full ">
        <HeroSVG />
      </div>
    </Section>
  );
};
function HeroSVG() {
  return (
    <div className="hidden md:block">
      <svg
        className="w-full md:w-[400px] 2xl:w-[500px] h-auto"
        viewBox="0 0 722 780"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_60_2)">
          <path
            d="M42.1315 625.634C39.4608 624.236 39.2378 620.498 41.7234 618.792L453.318 336.332C454.421 335.575 455.829 335.419 457.07 335.917L684.239 427.027C687.262 428.24 687.646 432.364 684.899 434.114L231.767 722.646C230.56 723.415 229.033 723.48 227.764 722.816L42.1315 625.634Z"
            fill="url(#paint0_diamond_60_2)"
            shape-rendering="crispEdges"
          />
        </g>
        <g filter="url(#filter1_f_60_2)">
          <ellipse
            cx="514.342"
            cy="433.517"
            rx="72.0214"
            ry="43.8592"
            fill="#A450DF"
          />
        </g>
        <g filter="url(#filter2_f_60_2)">
          <path
            d="M316.709 607.624C315.746 608.223 314.575 608.385 313.486 608.07L164.438 564.987C161.254 564.067 160.506 559.895 163.173 557.926L435.244 357.057C436.777 355.926 438.895 356.032 440.306 357.311L466.483 381.036C468.412 382.783 468.184 385.878 466.021 387.325L389.828 438.273C387.299 439.964 387.509 443.748 390.21 445.149L486.353 495.011C489.106 496.439 489.257 500.321 486.623 501.959L316.709 607.624Z"
            fill="url(#paint1_linear_60_2)"
          />
        </g>
        <g filter="url(#filter3_d_60_2)">
          <path
            d="M362.657 536.619C361.391 537.486 359.74 537.553 358.408 536.79L313.76 511.213C311.211 509.752 311.053 506.134 313.466 504.457L444.333 413.535C445.594 412.659 447.245 412.582 448.582 413.337L494.536 439.276C497.114 440.731 497.273 444.386 494.831 446.059L362.657 536.619Z"
            fill="url(#paint2_linear_60_2)"
            shape-rendering="crispEdges"
          />
        </g>
        <g filter="url(#filter4_d_60_2)">
          <path
            d="M243.483 554.477C242.84 554.101 242.819 553.178 243.445 552.774L306.509 512.033C306.824 511.829 307.227 511.819 307.552 512.006L357.585 540.871C358.234 541.245 358.256 542.175 357.624 542.579L293.929 583.304C293.612 583.506 293.21 583.514 292.886 583.325L243.483 554.477Z"
            fill="url(#paint3_linear_60_2)"
            fill-opacity="0.8"
            shape-rendering="crispEdges"
          />
        </g>
        <path
          d="M156.257 208.142L485.59 -12L485.59 352.555L156.257 572.697L156.257 208.142Z"
          fill="#1A1B24"
        />
        <path
          d="M167.059 212.635L226.278 172.385L226.278 315.876L167.059 357.314L167.059 212.635Z"
          fill="#272A35"
        />
        <path
          d="M399.77 57.6204L458.989 17.3711L458.989 160.862L399.77 202.3L399.77 57.6204Z"
          fill="#272A35"
        />
        <path
          d="M234.421 167.49L375.712 72.8498L375.712 213.178L234.421 312.17L234.421 167.49Z"
          fill="#272A35"
        />
        <path
          d="M233.752 183.807L347.429 110.106L347.429 157.156L233.752 233.847L233.752 183.807Z"
          fill="#1A1B24"
        />
        <path
          d="M235.006 173.908L252.789 161.549L252.789 165.858L235.006 178.259L235.006 173.908Z"
          fill="#E6CF5C"
        />
        <path
          d="M255.509 225.706L347.692 166.402L347.692 187.615L255.509 249.365L255.509 225.706Z"
          fill="#1A1B24"
        />
        <path
          d="M235.384 298.572L375.169 207.739L375.169 218.618L235.384 310.538L235.384 298.572Z"
          fill="#E6CF5C"
        />
        <path
          d="M237.559 380.702L295.88 338.986L295.88 470.448L237.56 507.977L237.559 380.702Z"
          fill="#272A35"
        />
        <path
          d="M239.442 394.15L249.399 387.229L249.399 391.539L239.442 398.501L239.442 394.15Z"
          fill="#E6CF5C"
        />
        <path
          d="M303.726 336.481L477.967 220.793L477.967 346.98L303.726 463.756L303.726 336.481Z"
          fill="#272A35"
        />
        <path
          d="M236.308 320.626L295.732 279.535L295.732 330.328L236.308 371.91L236.308 320.626Z"
          fill="#272A35"
        />
        <path
          d="M304.46 275.728L477.967 164.771L477.967 209.371L304.46 324.136L304.46 275.728Z"
          fill="#272A35"
        />
        <path
          d="M167.229 368.737L228.009 326.312L228.009 512.812L167.229 552.034L167.229 368.737Z"
          fill="#272A35"
        />
        <g filter="url(#filter5_f_60_2)">
          <line
            x1="179.068"
            y1="379.21"
            x2="222.58"
            y2="347.663"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter6_f_60_2)">
          <line
            x1="173.626"
            y1="395.529"
            x2="222.578"
            y2="359.631"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter7_f_60_2)">
          <line
            x1="173.627"
            y1="407.494"
            x2="218.227"
            y2="374.86"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter8_f_60_2)">
          <line
            x1="173.638"
            y1="419.452"
            x2="222.59"
            y2="385.73"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter9_f_60_2)">
          <line
            x1="173.632"
            y1="388.998"
            x2="222.584"
            y2="354.187"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter10_f_60_2)">
          <line
            x1="173.626"
            y1="402.056"
            x2="222.578"
            y2="366.158"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter11_f_60_2)">
          <line
            x1="173.627"
            y1="414.021"
            x2="218.227"
            y2="381.387"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter12_f_60_2)">
          <line
            x1="173.639"
            y1="425.979"
            x2="191.044"
            y2="414.013"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter13_f_60_2)">
          <line
            x1="179.068"
            y1="445.567"
            x2="222.58"
            y2="414.02"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter14_f_60_2)">
          <line
            x1="173.632"
            y1="459.706"
            x2="222.584"
            y2="424.896"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter15_f_60_2)">
          <line
            x1="173.626"
            y1="472.764"
            x2="222.578"
            y2="436.866"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter16_f_60_2)">
          <line
            x1="173.627"
            y1="484.73"
            x2="218.227"
            y2="452.095"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter17_f_60_2)">
          <line
            x1="173.621"
            y1="496.7"
            x2="222.573"
            y2="459.714"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter18_f_60_2)">
          <line
            x1="207.324"
            y1="492.364"
            x2="220.378"
            y2="481.486"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter19_f_60_2)">
          <path
            d="M173.922 453.586L222.555 419.424"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter20_f_60_2)">
          <line
            x1="173.632"
            y1="465.145"
            x2="222.584"
            y2="430.335"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter21_f_60_2)">
          <line
            x1="173.626"
            y1="478.203"
            x2="222.578"
            y2="442.305"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter22_f_60_2)">
          <line
            x1="173.627"
            y1="490.169"
            x2="218.227"
            y2="457.534"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter23_f_60_2)">
          <line
            x1="173.63"
            y1="502.132"
            x2="200.825"
            y2="482.552"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <g filter="url(#filter24_f_60_2)">
          <line
            x1="200.811"
            y1="502.144"
            x2="220.391"
            y2="486.914"
            stroke="#9D8E41"
            stroke-opacity="0.9"
          />
        </g>
        <path
          d="M165.219 214.266L473.072 6.49297L479.599 345.892L165.22 552.578L165.219 214.266Z"
          fill="url(#paint4_linear_60_2)"
          fill-opacity="0.7"
        />
        <defs>
          <filter
            id="filter0_d_60_2"
            x="35.9866"
            y="335.63"
            width="654.764"
            height="398.642"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0574486 0 0 0 0 0.0549306 0 0 0 0 0.0583333 0 0 0 0.68 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_60_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_60_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_f_60_2"
            x="342.321"
            y="289.658"
            width="344.043"
            height="287.718"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter2_f_60_2"
            x="149.547"
            y="344.275"
            width="350.964"
            height="275.952"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="6"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter3_d_60_2"
            x="307.749"
            y="412.82"
            width="192.822"
            height="135.499"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0574486 0 0 0 0 0.0549306 0 0 0 0 0.0583333 0 0 0 0.68 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_60_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_60_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_60_2"
            x="239.988"
            y="511.873"
            width="121.097"
            height="81.589"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="7" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0574486 0 0 0 0 0.0549306 0 0 0 0 0.0583333 0 0 0 0.68 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_60_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_60_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_f_60_2"
            x="176.774"
            y="345.258"
            width="48.0997"
            height="36.3564"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter6_f_60_2"
            x="171.331"
            y="357.228"
            width="53.5432"
            height="40.7044"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter7_f_60_2"
            x="171.332"
            y="372.456"
            width="49.1911"
            height="37.4416"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter8_f_60_2"
            x="171.355"
            y="383.318"
            width="53.5191"
            height="38.5459"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter9_f_60_2"
            x="171.343"
            y="351.78"
            width="53.5314"
            height="39.6252"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter10_f_60_2"
            x="171.331"
            y="363.754"
            width="53.5432"
            height="40.7044"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter11_f_60_2"
            x="171.332"
            y="378.983"
            width="49.1911"
            height="37.4416"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter12_f_60_2"
            x="171.356"
            y="411.601"
            width="21.9716"
            height="16.79"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter13_f_60_2"
            x="176.774"
            y="411.615"
            width="48.0997"
            height="36.3563"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter14_f_60_2"
            x="171.343"
            y="422.488"
            width="53.5314"
            height="39.6252"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter15_f_60_2"
            x="171.331"
            y="434.463"
            width="53.5432"
            height="40.7044"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter16_f_60_2"
            x="171.332"
            y="449.691"
            width="49.1911"
            height="37.4416"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter17_f_60_2"
            x="171.319"
            y="457.315"
            width="53.5547"
            height="41.7837"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter18_f_60_2"
            x="205.004"
            y="479.101"
            width="17.694"
            height="15.6464"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter19_f_60_2"
            x="171.635"
            y="417.014"
            width="53.2074"
            height="38.981"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter20_f_60_2"
            x="171.343"
            y="427.927"
            width="53.5314"
            height="39.6251"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter21_f_60_2"
            x="171.331"
            y="439.902"
            width="53.5432"
            height="40.7044"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter22_f_60_2"
            x="171.332"
            y="455.131"
            width="49.1911"
            height="37.4416"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter23_f_60_2"
            x="171.338"
            y="480.146"
            width="31.7798"
            height="24.3923"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <filter
            id="filter24_f_60_2"
            x="198.504"
            y="484.519"
            width="24.1947"
            height="20.0188"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_60_2"
            />
          </filter>
          <radialGradient
            id="paint0_diamond_60_2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(883.298 20.33) rotate(140.693) scale(904.046 1459.46)"
          >
            <stop offset="0.516158" stop-color="#721CB0" />
            <stop offset="0.742265" stop-color="#66199C" />
            <stop offset="0.854145" stop-color="#472364" />
            <stop offset="0.973601" stop-color="#250F36" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_60_2"
            x1="297.549"
            y1="496.439"
            x2="353.242"
            y2="575.97"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#110D16" />
            <stop offset="1" stop-color="#150825" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_60_2"
            x1="370.857"
            y1="606.526"
            x2="287.072"
            y2="489.472"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.432979" stop-color="#563185" />
            <stop
              offset="0.625163"
              stop-color="#391B5A"
              stop-opacity="0.949344"
            />
            <stop offset="0.792186" stop-color="#1E0630" stop-opacity="0.9" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_60_2"
            x1="332.009"
            y1="533.387"
            x2="295.894"
            y2="524.933"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0358943" stop-color="#360E54" />
            <stop offset="1" stop-color="#34154C" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_60_2"
            x1="-37.1147"
            y1="154.436"
            x2="43.384"
            y2="572.159"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.329897" stop-color="#1E202D" stop-opacity="0.6" />
            <stop offset="0.466343" stop-color="#704A79" stop-opacity="0.54" />
            <stop offset="0.697047" stop-color="#1A1B24" stop-opacity="0.47" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
export default Hero;
