import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyTextScrubProps {
  text: string;
  className?: string;
}

const StickyTextScrub = ({ text, className = "" }: StickyTextScrubProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className="relative" style={{ height: "180vh" }}>
      <div className="sticky top-0 flex min-h-screen items-center justify-center px-6">
        <p
          className={`max-w-5xl text-4xl font-light leading-tight tracking-tight md:text-6xl md:leading-[1.15] ${className}`}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  word: string;
  range: [number, number];
  progress: any;
}

const Word = ({ word, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const isActive = useTransform(progress, (v: number) => v >= range[0] ? 1 : 0);

  return (
    <motion.span
      style={{ opacity }}
      className="mr-[0.25em] inline-block"
    >
      <motion.span
        style={{
          color: useTransform(isActive, [0, 1], ["hsl(0,0%,30%)", "transparent"]),
          backgroundImage: useTransform(isActive, (v: number) =>
            v >= 1
              ? "linear-gradient(135deg, hsl(220,90%,56%), hsl(270,80%,60%))"
              : "none"
          ),
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        {word}
      </motion.span>
    </motion.span>
  );
};

export default StickyTextScrub;
