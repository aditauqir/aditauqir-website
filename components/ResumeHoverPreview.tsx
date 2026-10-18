"use client";

import { Button } from "@/components/ui/button";
import FollowHoverPreview from "@/components/FollowHoverPreview";

const CARD_WIDTH = 214;
const CARD_HEIGHT = 277;

export default function ResumeHoverPreview() {
  return (
    <FollowHoverPreview
      className="relative z-30"
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
      preview={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/resume-preview.png"
          alt="Resume preview"
          className="pointer-events-none h-full w-full select-none object-cover object-top"
        />
      }
    >
      <Button
        asChild
        className="h-auto w-fit rounded-full bg-black/90 px-3 py-1.5 text-[0.86rem] font-medium !text-white shadow-sm backdrop-blur-sm transition-transform duration-150 hover:bg-black hover:!text-white active:scale-95 lg:text-[0.81rem]"
      >
        <a href="/resume.pdf" download data-cuelume-tap="tap">
          resume
        </a>
      </Button>
    </FollowHoverPreview>
  );
}
