import { useRef } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

interface CountUpNumberProps {
  value: number;
  suffix?: string;
  label: string;
}

const CountUpNumber = ({ value, suffix = "", label }: CountUpNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [0, value]);
  const rounded = useSpring(raw, { stiffness: 60, damping: 20 });

  return (
    <div ref={ref} className="text-center">
      <motion.span className="text-gradient-blue text-6xl font-bold md:text-8xl block">
        <motion.span>{rounded}</motion.span>
      </motion.span>
      <span className="text-gradient-blue text-4xl font-bold md:text-6xl">{suffix}</span>
      <p className="mt-3 text-sm text-muted-foreground uppercase tracking-widest">{label}</p>
    </div>
  );
};

// Need a display component that actually renders the number
import { useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const CountUpDisplay = ({ value, suffix = "", label }: CountUpNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [0, value]);
  const smoothed = useSpring(raw, { stiffness: 60, damping: 20 });

  useMotionValueEvent(smoothed, "change", (v) => {
    setDisplayValue(Math.round(v));
  });

  return (
    <div ref={ref} className="text-center">
      <div>
        <span className="text-gradient-blue text-6xl font-bold md:text-8xl">
          {displayValue}
        </span>
        <span className="text-gradient-blue text-4xl font-bold md:text-6xl">{suffix}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground uppercase tracking-widest">{label}</p>
    </div>
  );
};

export default CountUpDisplay;
