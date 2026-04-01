"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AlertCircleIcon, ArrowUpIcon, CheckCircle2Icon } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import HomeClock from "@/components/HomeClock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

const projectItems = [
  {
    value: "awry",
    label: "awry",
    description:
      "a recession prediction system that uses macroeconomic data and an ensemble of machine learning models to estimate real-time and forward-looking economic risk. it combines multiple indicators from fred and outputs a calibrated probability rather than a binary signal.",
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

const stackItems = [
  "python",
  "c/c++",
  "typescript",
  "react / next.js",
  "fastapi",
  "redis",
  "docker",
  "linux",
];

const currentYear = new Date().getFullYear();

type SendStatus = "success" | "failed" | "empty" | null;

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [sendStatus, setSendStatus] = useState<SendStatus>(null);
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const showOverlay = (status: Exclude<SendStatus, null>) => {
    setSendStatus(status);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setSendStatus(null);
      timeoutRef.current = null;
    }, 3600);
  };

  const handleSend = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isSending) {
      showOverlay("empty");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmedMessage }),
      });

      if (!response.ok) {
        showOverlay("failed");
        return;
      }

      setMessage("");
      showOverlay("success");
    } catch {
      showOverlay("failed");
    } finally {
      setIsSending(false);
    }
  };

  const alertCopy =
    sendStatus === "success"
      ? {
          title: "Sent the message!",
          body: "Hold on tight, I will ask my AI SaaS mail platform to look for it, trust.",
        }
      : sendStatus === "empty"
        ? {
            title: "Say something first",
            body: "Add a message, im not wasting my API credits bruh",
          }
        : {
            title: "This server sucks bruhhh",
            body: "Try again, or just try linkedin.",
          };

  return (
    <>
      <main className="flex min-h-screen flex-col bg-background text-foreground">
        <div
          className={
            sendStatus
              ? "flex min-h-screen flex-1 flex-col blur-sm transition-all duration-200"
              : "flex min-h-screen flex-1 flex-col transition-all duration-200"
          }
        >
          <section className="flex-1 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-[7rem] xl:px-16">
            <div className="mx-auto flex w-full max-w-[34rem] flex-col gap-6 lg:gap-8">
              <div className="flex items-start justify-between gap-8">
                <div className="space-y-5">
                  <h1 className="text-[clamp(2rem,5.8vw,3.6rem)] leading-[0.92] font-normal tracking-[-0.08em]">
                    hi, i&apos;m Adi
                  </h1>
                  <HomeClock />
                </div>

                <div className="flex shrink-0 items-center gap-4 pt-1">
                  {socialLinks.map((socialLink) => (
                    <Link
                      key={socialLink.label}
                      href={socialLink.href}
                      aria-label={socialLink.label}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-[1.2rem] w-[1.2rem] items-center justify-center rounded-sm border border-border-subtle bg-white text-black transition-colors duration-200 hover:text-[rgb(90,90,90)]"
                    >
                      <FontAwesomeIcon
                        icon={socialLink.icon}
                        className="text-[1.95rem]"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-full space-y-8 text-[0.86rem] leading-[1.6] tracking-[-0.05em] lg:text-[0.81rem]">
                <Button
                  asChild
                  className="h-auto w-fit rounded-full bg-black px-3 py-1.5 text-[0.86rem] font-medium tracking-[-0.05em] !text-white hover:bg-[rgb(35,35,35)] hover:!text-white lg:text-[0.81rem]"
                >
                  <a href="/resume.pdf" download>
                    resume
                  </a>
                </Button>

                <p>i&apos;m a computer science student at georgia state.</p>
                <p>
                  i like building things that feel useful, sharp, and a little
                  unfair.
                </p>

                <div className="space-y-3">
                  <p>right now i&apos;m interested in:</p>
                  <ul className="space-y-1 pl-5">
                    <li>macroeconomic forecasting</li>
                    <li>ai systems that are useful</li>
                    <li>software that actually does something</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold tracking-[-0.08em]">
                    A FEW THINGS:
                  </p>
                  <ul className="space-y-1 pl-5">
                    <li>
                      built awry, a recession prediction system using
                      macroeconomic data
                    </li>
                    <li>trained an ensemble model with 99%+ auroc</li>
                    <li>
                      building full-stack + ai systems with python, c/c++, and
                      typescript
                    </li>
                    <li>shipping projects fast, iterating faster</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold tracking-[-0.08em]">
                    SOME THINGS I&apos;M WORKING ON:
                  </p>
                  <Accordion type="single" collapsible className="w-full">
                    {projectItems.map((projectItem) => (
                      <AccordionItem
                        key={projectItem.value}
                        value={projectItem.value}
                        className="border-border-subtle"
                      >
                        <AccordionTrigger className="py-3 text-[0.86rem] tracking-[-0.06em] lg:text-[0.81rem]">
                          {projectItem.label}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-3 text-[0.8rem] leading-[1.55] tracking-[-0.05em] text-muted-foreground lg:text-[0.76rem]">
                          <p>{projectItem.description}</p>
                          <p>
                            {projectItem.githubHref ? (
                              <Link
                                href={projectItem.githubHref}
                                target="_blank"
                                rel="noreferrer"
                                className="text-foreground underline underline-offset-4"
                              >
                                Github
                              </Link>
                            ) : (
                              <span className="text-foreground">Github</span>
                            )}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold tracking-[-0.08em]">STACK:</p>
                  <ul className="space-y-1 pl-5">
                    {stackItems.map((stackItem) => (
                      <li key={stackItem}>{stackItem}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <p>Say hi, hello, yo :3</p>
                  <div className="flex items-center gap-3">
                    <Input
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="say hi"
                      aria-label="Say hi"
                      className="h-9 max-w-[14rem] rounded-full border-black px-3 text-[0.86rem] tracking-[-0.05em] placeholder:text-[rgb(153,151,151)] lg:max-w-[12rem] lg:text-[0.81rem]"
                    />
                    <Button
                      type="button"
                      onClick={handleSend}
                      className="h-auto rounded-full bg-black px-3 py-1.5 text-[0.86rem] font-medium tracking-[-0.05em] !text-white hover:bg-[rgb(35,35,35)] hover:!text-white lg:text-[0.81rem]"
                    >
                      {isSending ? "sending" : "send"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-[rgb(130,130,130)] px-6 py-4 text-[1rem] tracking-[-0.08em] sm:px-8 lg:px-12 lg:py-6 lg:text-[0.8rem] xl:px-16">
            <div className="mx-auto flex w-full max-w-[34rem] items-center justify-between">
              <p>{`©aditauqir ${currentYear} made in Atlanta, GA`}</p>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="size-auto rounded-full border-0 p-0 text-[1rem] shadow-none hover:bg-transparent hover:text-[rgb(90,90,90)] lg:text-[0.8rem]"
              >
                <ArrowUpIcon className="size-[1rem] lg:size-[0.8rem]" />
              </Button>
            </div>
          </footer>
        </div>
      </main>

      {sendStatus ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/35 px-6">
          <Alert
            variant={sendStatus === "success" ? "default" : "destructive"}
            className="max-w-[25rem] rounded-[1.4rem] border-black/10 bg-white px-[0.9rem] py-[0.9rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
          >
            {sendStatus === "success" ? (
              <CheckCircle2Icon className="text-[#11260e]" />
            ) : (
              <AlertCircleIcon />
            )}
            <AlertTitle className="text-[1rem] font-bold tracking-[-0.08em]">
              {alertCopy.title}
            </AlertTitle>
            <AlertDescription className="mt-1 text-[0.88rem] leading-[1.5] tracking-[-0.06em] text-[rgb(90,90,90)]">
              {alertCopy.body}
            </AlertDescription>
          </Alert>
        </div>
      ) : null}
    </>
  );
}
