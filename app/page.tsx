"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUpIcon,
  ArrowUpRight,
  CheckIcon,
  CopyIcon,
  GlobeIcon,
} from "lucide-react";

import AdiNoorHover from "@/components/AdiNoorHover";
import FollowHoverPreview from "@/components/FollowHoverPreview";
import GsuLocationHover from "@/components/GsuLocationHover";
import HomeClock from "@/components/HomeClock";
import ResumeHoverPreview from "@/components/ResumeHoverPreview";
import SiteBackground from "@/components/SiteBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { cn } from "@/lib/utils";
import { redaction10 } from "./fonts";

function GithubPixelIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 0h12v12H0z" fill="none" />
      <path
        fill="currentColor"
        d="M2 12h2v-1H3v-1H2V9H1V8h1v1h1v1h1V9h1V8H3V7H2V4h1V2h1v1h3V2h1v2h1v3H8v1H6v1h1v3h2v-1h1v-1h1V3h-1V2H9V1H2v1H1v1H0v7h1v1h1Zm0 0"
      />
    </svg>
  );
}

function interactionCueProps(isMobileDevice: boolean) {
  return isMobileDevice
    ? { "data-cuelume-tap": "tap" as const }
    : { "data-cuelume-select": "select" as const };
}

function ProjectJump({
  value,
  onJump,
  children,
  isMobileDevice,
}: {
  value: string;
  onJump: (value: string) => void;
  children: ReactNode;
  isMobileDevice: boolean;
}) {
  return (
    <a
      href={`#project-${value}`}
      onClick={(event) => {
        event.preventDefault();
        onJump(value);
      }}
      {...interactionCueProps(isMobileDevice)}
      className="group cursor-pointer font-medium text-neutral-950"
    >
      <span className="underline decoration-neutral-700 decoration-dashed underline-offset-[3px] transition-colors group-hover:text-black group-hover:decoration-black">
        {children}
      </span>
    </a>
  );
}

function LinkedinPixelIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M20 22H4v-2h16zM4 20H2V4h2zm18 0h-2V4h2zM9 17H7v-6h2zm6-6v2h-2v4h-2v-6zm2 6h-2v-4h2zM9 9H7V7h2zm11-5H4V2h16z"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/aditauqir",
    icon: GithubPixelIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditauqir/",
    icon: LinkedinPixelIcon,
  },
];

function StarGlyph({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 0h1024v1024H0z" fill="none" />
      <path
        fill="currentColor"
        d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3M664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7z"
      />
    </svg>
  );
}

const projectItems = [
  {
    value: "fyp",
    label: "fyoutubepremium",
    description:
      "an orion browser extension for iphone that loads desktop youtube and restyles it into a phone-friendly player with background playback and screen-off audio. ublock origin handles ads, so it gets closer to youtube premium without the subscription.",
    githubHref: "https://github.com/aditauqir/fyp",
  },
  {
    value: "zirn",
    label: "zirn",
    description:
      "a local-first ai knowledge workspace for turning messy links, pdfs, screenshots, copied text, notes, and unfinished ideas into structured markdown knowledge. it focuses on durable context, editable vault files, source-aware organization, and ai-assisted compilation instead of temporary chatbot answers.",
    featured: true,
    siteHref: "https://www.zirn.app/",
  },
  {
    value: "shev",
    label: "shev",
    description:
      "a simple decision maker without the hype. paste one whole message, say what you want done, and it returns one decision as json: what to do, whether to act, and how sure it is. it can run a small model locally on a mac or call deepseek, and other tools can read the saved decisions over mcp.",
    githubHref: "https://github.com/aditauqir/shev",
  },
  {
    value: "kaiko",
    label: "kaiko",
    description:
      "an autonomous, psychometrically-calibrated adaptive learning companion for obsidian. it pairs a local agent control plane with a rasch 1pl item response theory engine to run computerized adaptive diagnostics, estimate latent ability (θ), and scaffold structured markdown instruction directly into your vault.",
    githubHref: "https://github.com/aditauqir/kaiko",
  },
  {
    value: "awry",
    label: "awry",
    description:
      "a recession prediction system that uses macroeconomic data and an ensemble of machine learning models to estimate real-time and forward-looking economic risk. it combines multiple indicators from fred and outputs a calibrated probability rather than a binary signal.",
    githubHref: "https://github.com/aditauqir/AWRY",
  },
  {
    value: "resume-fx",
    label: "resume fx",
    description:
      "an ai-powered resume optimization tool that analyzes content, rewrites bullet points, and generates clean, production-ready latex resumes. it's designed to improve clarity, impact, and ats performance in a single pipeline.",
    githubHref: "https://github.com/aditauqir/resume-fx",
  },
  {
    value: "zaman",
    label: "zaman",
    description:
      "a system for tracking and trading time. using a virtual coins system a user can trade their time for doing tasks. uses SHA-256 encryption and auth for login. all cli, quick and easy.",
    githubHref: "https://github.com/aditauqir/Zaman",
  },
];

const passionProjects: {
  value: string;
  label: string;
  href: string;
  stars: number;
  previewSrc?: string;
  previewAlt?: string;
  previewWidth?: number;
  previewHeight?: number;
}[] = [
  {
    value: "fyp",
    label: "fyoutubepremium",
    href: "https://github.com/aditauqir/fyp",
    stars: 21,
  },
  {
    value: "shev",
    label: "shev",
    href: "https://github.com/aditauqir/shev",
    stars: 4,
    previewSrc: "/shev-preview.png",
    previewAlt: "shev — jev without the hype",
    previewWidth: 320,
    previewHeight: 200,
  },
];

const howIBuildItems = [
  "start with the real problem, not a cool idea",
  "build the smallest thing that proves it works",
  "use it until something breaks",
  "throw away the assumptions that were wrong",
  "fix it fast and dont get attached",
  "keep only the parts that still help",
];

const stackItems = [
  "python",
  "c / c++ / c#",
  "typescript",
  "react / next.js",
  "openai + claude apis",
  "ollama / mistral / gemini",
  "rag + semantic retrieval",
  "ai agents + mcp",
  "langchain / langgraph",
  "pytorch / tensorflow",
  "fastapi",
  "supabase / postgres / mysql",
  "faiss vector search",
  "redis",
  "docker",
  "aws / s3 / ec2",
  "azure",
  "vercel",
  "linux",
  "cursor / claude code / codex / windsurf",
  "github actions",
];

const currentYear = new Date().getFullYear();

export default function HomePage() {
  const [copiedProject, setCopiedProject] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<string>("fyp");
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const detectMobile = () => {
      if (typeof window === "undefined") return;
      const isTouch =
        window.matchMedia("(hover: none), (pointer: coarse)").matches ||
        (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0);
      const isNarrowViewport = window.innerWidth < 768;
      const isMobileUA =
        typeof navigator !== "undefined" &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );

      setIsMobileDevice(isNarrowViewport || (isTouch && isMobileUA));
    };

    detectMobile();
    window.addEventListener("resize", detectMobile);
    window.addEventListener("orientationchange", detectMobile);

    return () => {
      window.removeEventListener("resize", detectMobile);
      window.removeEventListener("orientationchange", detectMobile);
    };
  }, []);

  const jumpToProject = (value: string) => {
    setActiveAccordion(value);
    const element = document.getElementById(`project-${value}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const copyText = async (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      if (document.execCommand("copy")) {
        return true;
      }
    } catch {
    } finally {
      document.body.removeChild(textarea);
    }

    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  };

  const handleCopyGitCommand = async (
    projectValue: string,
    githubHref?: string,
  ) => {
    if (!githubHref) {
      return;
    }

    const didCopy = await copyText(`git clone ${githubHref}`);

    if (!didCopy) {
      return;
    }

    if (copyTimeoutRef.current) {
      window.clearTimeout(copyTimeoutRef.current);
    }

    setCopiedProject(projectValue);
    copyTimeoutRef.current = window.setTimeout(() => {
      setCopiedProject(null);
      copyTimeoutRef.current = null;
    }, 1800);
  };

  return (
    <>
      <main className="relative flex min-h-screen min-h-[100dvh] flex-col bg-transparent text-neutral-900">
        <SiteBackground isMobileDevice={isMobileDevice} />

        <div className="relative z-10 flex min-h-screen min-h-[100dvh] flex-1 flex-col transition-all duration-200">
          <section className="flex-1 px-5 pt-[calc(env(safe-area-inset-top)+2.5rem)] pb-12 sm:px-8 sm:py-12 lg:px-12 lg:py-[7rem] xl:px-16">
            <div className="mx-auto flex w-full max-w-[34rem] flex-col gap-6 lg:gap-8">
              <div className="space-y-5">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                  <h1
                    className={cn(
                      redaction10.className,
                      "text-[2.75rem] leading-[0.98] font-normal text-neutral-950 text-left sm:text-[clamp(1.75rem,5.5vw,3.6rem)] sm:leading-[0.92]",
                    )}
                  >
                    <span className="block sm:inline">hi, i&apos;m </span>
                    <PointerHighlight
                      rectangleClassName="border-black"
                      pointerClassName="text-black"
                      containerClassName="inline-flex align-baseline overflow-visible"
                    >
                      <AdiNoorHover />
                    </PointerHighlight>
                  </h1>

                  <div className="flex shrink-0 items-center gap-3.5">
                    {socialLinks.map((socialLink) => {
                      const Icon = socialLink.icon;
                      return (
                        <Link
                          key={socialLink.label}
                          href={socialLink.href}
                          aria-label={socialLink.label}
                          target="_blank"
                          rel="noreferrer"
                          {...interactionCueProps(isMobileDevice)}
                          className="flex items-center justify-center text-neutral-900 transition-all duration-200 hover:scale-110 hover:text-black hover:opacity-70"
                        >
                          <Icon className="size-7 shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <HomeClock />
              </div>

              <div className="w-full space-y-8 text-[0.86rem] leading-[1.6] text-neutral-900 lg:text-[0.81rem]">
                <ResumeHoverPreview />
                <p>
                  software engineer, designer, and ai systems builder pursuing a
                  b.s./m.s. at{" "}
                  <span className="whitespace-nowrap">
                    <GsuLocationHover />.
                  </span>
                </p>

                <p>
                  looking smart is easy. being useful is the hard part. so i
                  keep building things i need:{" "}
                  <ProjectJump
                    value="zirn"
                    onJump={jumpToProject}
                    isMobileDevice={isMobileDevice}
                  >
                    zirn
                  </ProjectJump>{" "}
                  for messy notes,{" "}
                  <ProjectJump
                    value="kaiko"
                    onJump={jumpToProject}
                    isMobileDevice={isMobileDevice}
                  >
                    kaiko
                  </ProjectJump>{" "}
                  for learning that adjusts,{" "}
                  <ProjectJump
                    value="fyp"
                    onJump={jumpToProject}
                    isMobileDevice={isMobileDevice}
                  >
                    fyoutubepremium
                  </ProjectJump>{" "}
                  so i dont pay for background playback, and{" "}
                  <ProjectJump
                    value="shev"
                    onJump={jumpToProject}
                    isMobileDevice={isMobileDevice}
                  >
                    shev
                  </ProjectJump>{" "}
                  when i just need a yes, a no, or a reply. i also care how it
                  feels in the hand. spacing, type, motion, the quiet stuff. a
                  product is only as good as how it feels to use.
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 py-0.5 text-[0.76rem] leading-[1.4]">
                  <span className="text-neutral-700">
                    passion projects im working on:
                  </span>
                  {passionProjects.map((project) => {
                    const link = (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        {...interactionCueProps(isMobileDevice)}
                        className="group inline-flex cursor-pointer items-center gap-1.5 font-medium text-neutral-950"
                      >
                        <span className="underline decoration-neutral-700 decoration-dashed underline-offset-[3px] transition-colors group-hover:text-black group-hover:decoration-black">
                          {project.label}
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-[0.74rem] text-neutral-600 transition-colors group-hover:text-black">
                          <StarGlyph className="size-3.5 fill-current" />
                          <span>{project.stars} stars</span>
                        </span>
                      </a>
                    );

                    if (!project.previewSrc) {
                      return (
                        <span key={project.label} className="inline-flex">
                          {link}
                        </span>
                      );
                    }

                    return (
                      <FollowHoverPreview
                        key={project.label}
                        className="inline-flex align-baseline"
                        width={project.previewWidth ?? 320}
                        height={project.previewHeight ?? 200}
                        preview={
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={project.previewSrc}
                            alt={project.previewAlt ?? project.label}
                            className="pointer-events-none h-full w-full select-none object-cover"
                          />
                        }
                      >
                        {link}
                      </FollowHoverPreview>
                    );
                  })}
                </div>

                <p className="text-neutral-950">
                  zero slop. beautiful software.
                </p>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <p className="font-semibold text-neutral-950">
                      MY PHILOSOPHY:
                    </p>
                    <p className="text-neutral-800">
                      i dont care if a project looks intelligent. most of what i
                      see is a demo that breaks on real work. i want software
                      that stays on my computer, remembers the work i already
                      did, and takes the boring part off my plate. if it doesnt
                      save time or make a decision clearer, i shouldnt have
                      built it. a product is only as good as how it feels to
                      use.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-neutral-950">
                      A FEW THINGS:
                    </p>
                    <ul className="space-y-1.5 pl-5 text-neutral-800">
                      <li>
                        built zirn, a local-first ai workspace for compiling
                        messy information into reusable markdown knowledge
                      </li>
                      <li>
                        built kaiko, an autonomous psychometric learning
                        companion pairing local agent control planes with item
                        response theory for obsidian
                      </li>
                      <li>
                        building fyoutubepremium, an ios browser extension
                        delivering ad-free background playback and screen-off
                        audio
                      </li>
                      <li>
                        building shev, a small decision maker that takes one
                        message and hands back one json decision
                      </li>
                      <li>
                        built awry, a recession prediction system using
                        macroeconomic data
                      </li>
                      <li>
                        building full-stack + ai systems with python, c/c++, and
                        typescript
                      </li>
                      <li>shipping projects fast, iterating faster</li>
                    </ul>
                  </div>

                <div className="space-y-3">
                  <p className="font-semibold">
                    SOME THINGS I&apos;M WORKING ON:
                  </p>
                  <Accordion
                    type="single"
                    collapsible
                    value={activeAccordion}
                    onValueChange={(val) => setActiveAccordion(val || "")}
                    className="w-full"
                  >
                    {projectItems.map((projectItem) => (
                      <AccordionItem
                        id={`project-${projectItem.value}`}
                        key={projectItem.value}
                        value={projectItem.value}
                        className={cn(
                          "border-black/15 scroll-mt-24 transition-colors",
                          projectItem.featured && "border-black",
                        )}
                      >
                        <AccordionTrigger
                          {...interactionCueProps(isMobileDevice)}
                          className={cn(
                            "py-3 text-[0.86rem] text-neutral-950 lg:text-[0.81rem]",
                            projectItem.featured && "font-semibold text-black",
                          )}
                        >
                          {projectItem.label}
                        </AccordionTrigger>
                        <AccordionContent
                          className={cn(
                            "space-y-3 text-[0.8rem] leading-[1.55] text-neutral-800 lg:text-[0.76rem]",
                            projectItem.featured && "text-neutral-900",
                          )}
                        >
                          <p>{projectItem.description}</p>
                          {projectItem.siteHref ? (
                            <a
                              href={projectItem.siteHref}
                              target="_blank"
                              rel="noreferrer"
                              {...interactionCueProps(isMobileDevice)}
                              className="inline-flex items-center gap-1 font-medium text-black underline decoration-black underline-offset-2"
                            >
                              zirn.app
                              <ArrowUpRight
                                aria-hidden
                                className="size-3.5"
                                strokeWidth={1.75}
                              />
                            </a>
                          ) : null}
                          {projectItem.githubHref ? (
                            <div className="flex max-w-full items-center overflow-hidden rounded-lg border border-black/15 bg-white/70 px-2 shadow-xs backdrop-blur-md">
                              <Input
                                readOnly
                                value={`git clone ${projectItem.githubHref}`}
                                aria-label={`${projectItem.label} git command`}
                                className="h-8 min-w-0 flex-1 border-0 bg-transparent px-0 text-[0.76rem] text-neutral-900 shadow-none selection:bg-black/10 selection:text-black focus-visible:ring-0 lg:text-[0.72rem]"
                              />
                              <Button
                                type="button"
                                onClick={() =>
                                  handleCopyGitCommand(
                                    projectItem.value,
                                    projectItem.githubHref,
                                  )
                                }
                                aria-label={`Copy ${projectItem.label} git command`}
                                {...interactionCueProps(isMobileDevice)}
                                className="size-7 shrink-0 rounded-md bg-transparent p-0 text-neutral-700 shadow-none hover:bg-black/10 hover:text-black"
                              >
                                {copiedProject === projectItem.value ? (
                                  <CheckIcon className="size-3.5" />
                                ) : (
                                  <CopyIcon className="size-3.5" />
                                )}
                              </Button>
                              <Link
                                href={projectItem.githubHref}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Open ${projectItem.label} GitHub`}
                                {...interactionCueProps(isMobileDevice)}
                                className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-transparent p-0 text-neutral-700 no-underline shadow-none transition-all hover:bg-black/10 hover:text-black"
                              >
                                <GlobeIcon className="size-3.5" />
                              </Link>
                            </div>
                          ) : null}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-neutral-950">
                    HOW I BUILD:
                  </p>
                  <ul className="space-y-1 pl-5 text-neutral-800">
                    {howIBuildItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-neutral-950">STACK:</p>
                  <ul className="space-y-1 pl-5 text-neutral-800">
                    {stackItems.map((stackItem) => (
                      <li key={stackItem}>{stackItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

          <footer className="relative mt-auto w-full px-6 pt-10 pb-[calc(env(safe-area-inset-bottom)+3.5rem)] sm:px-8 sm:pt-12 sm:pb-12 lg:px-12 lg:py-12 xl:px-16">
            <div className="mx-auto flex w-full max-w-[34rem] items-center justify-between text-[0.84rem] text-black lg:text-[0.8rem]">
              <p className="font-medium text-black">{`@noor ${currentYear} made in Atlanta, GA`}</p>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                {...interactionCueProps(isMobileDevice)}
                className="size-auto rounded-full border-0 p-0 text-[1rem] text-black shadow-none transition-transform hover:scale-110 hover:bg-transparent hover:text-black/70 active:scale-95 lg:text-[0.8rem]"
              >
                <ArrowUpIcon className="size-[1rem] text-black lg:size-[0.8rem]" />
              </Button>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
