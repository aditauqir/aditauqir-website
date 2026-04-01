import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import HomeClock from "@/components/HomeClock";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/aditauqir",
    icon: faSquareGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditauqir/",
    icon: faSquareLinkedin,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-8 sm:px-8 sm:py-10 lg:px-[50rem] lg:py-[7rem]">
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="space-y-5">
              <h1 className="text-[clamp(2rem,5.8vw,3.6rem)] leading-[0.92] font-normal tracking-[-0.08em]">
                hi, i&apos;m Adi
              </h1>
              <HomeClock />
            </div>

            <div className="flex items-center gap-4 lg:pt-2">
              {socialLinks.map((socialLink) => (
                <Link
                  key={socialLink.label}
                  href={socialLink.href}
                  aria-label={socialLink.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[1.2rem] w-[1.2rem] items-center justify-center rounded-sm border border-border-subtle bg-white text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-panel"
                >
                  <FontAwesomeIcon icon={socialLink.icon} className="text-[1.95rem]" />
                </Link>
              ))}
            </div>
          </div>

          <div className="max-w-[48rem] space-y-6 text-[clamp(0.6rem,1.5vw,0.81rem)] leading-[1.6] tracking-[-0.05em]">
            <p>i&apos;m a computer science student at georgia state.</p>
            <p>i like building things that feel useful, sharp, and a little unfair.</p>
            <div className="space-y-3">
              <p>right now i&apos;m interested in:</p>
              <ul className="space-y-1 pl-5">
                <li>macroeconomic forecasting</li>
                <li>ai systems that are useful</li>
                <li>software that actually does something</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
