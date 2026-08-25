"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * objectPosition biases the cover crop toward the focal subject so
 * important UI/text (e.g. "BUSINESS AUTOMATION WORKFLOW") stays in frame.
 * transformOrigin keeps the ken-burns zoom growing away from that subject.
 */
const HERO_SLIDES = [
  {
    src: "/hero/automation-hero-1.jpg",
    objectPosition: "center 36%",
    transformOrigin: "center 40%",
  },
  {
    src: "/hero/automation-hero-2.jpg",
    objectPosition: "center center",
    transformOrigin: "center center",
  },
  {
    src: "/hero/automation-hero-3.jpg",
    objectPosition: "center 18%",
    transformOrigin: "center 25%",
  },
  {
    src: "/hero/automation-hero-4.jpg",
    objectPosition: "center 40%",
    transformOrigin: "center 45%",
  },
] as const;

const SLIDE_DURATION_MS = 5500;

export function HeroBackgroundSlider() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {HERO_SLIDES.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={slide.src}
            className="absolute inset-0 overflow-hidden transition-opacity duration-1200 ease-out motion-reduce:duration-0"
            style={{ opacity: active ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={`Automation agency hero background ${i + 1}`}
              fill
              className={`object-cover ${
                active && !reduceMotion ? "hero-ken-burns" : ""
              }`}
              style={{
                objectPosition: slide.objectPosition,
                transformOrigin: slide.transformOrigin,
              }}
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        );
      })}
    </div>
  );
}
