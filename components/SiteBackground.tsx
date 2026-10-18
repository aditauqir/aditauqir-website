"use client";

import { useState } from "react";
import { ImdivyanshmvShader } from "@/components/ImdivyanshmvShader.webgpu";
import { cn } from "@/lib/utils";

const LIGHT_BACKGROUND = "#ffffff";
const DARK_BACKGROUND = "#090909";

export default function SiteBackground({ isMobileDevice }: { isMobileDevice: boolean }) {
  const [shaderFailed, setShaderFailed] = useState(false);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed -top-[10vh] -bottom-[10vh] -left-[2vw] -right-[2vw] z-0 select-none overflow-hidden bg-white"
    >
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          isMobileDevice ? "opacity-65" : "opacity-65 sm:opacity-100",
        )}
      >
        {shaderFailed ? (
          <div className="h-full w-full bg-white" />
        ) : (
          <ImdivyanshmvShader
            theme="light"
            background={{ dark: DARK_BACKGROUND, light: LIGHT_BACKGROUND }}
            className="h-full w-full"
            onError={() => setShaderFailed(true)}
          />
        )}
      </div>

      <div
        className={cn(
          "absolute inset-0 overflow-hidden transition-opacity duration-300",
          isMobileDevice ? "opacity-75" : "opacity-75 sm:opacity-100",
        )}
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 42%, black 52%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 42%, black 52%, black 100%)",
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage:
              "radial-gradient(ellipse 26rem 100% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 26rem 100% at 50% 50%, black 50%, transparent 100%)",
          }}
        >
          <div
            className="absolute inset-0 scale-[1.03] bg-white/40 backdrop-blur-[18px]"
            style={{
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 22rem 100% at 50% 50%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 75%, transparent 100%)",
            }}
          />
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-300",
          isMobileDevice
            ? "bg-gradient-to-b from-white/30 via-white/40 to-white/55 opacity-100"
            : "bg-gradient-to-b from-white/30 via-white/40 to-white/55 sm:hidden",
        )}
      />
    </div>
  );
}
