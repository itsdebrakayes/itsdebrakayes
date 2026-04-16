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
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex min-h-screen items-center justify-center px-6">
        <p
          className={`max-w-4xl text-3xl font-medium leading-relaxed md:text-5xl md:leading-snug ${className}`}
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
  const color = useTransform(progress, range, [
    "hsl(0, 0%, 30%)",
    "hsl(0, 0%, 100%)",
  ]);

  return (
    <motion.span style={{ opacity, color }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
};

export default StickyTextScrub;
