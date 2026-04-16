import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

const HorizontalScroll = ({ children, className = "" }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className={`flex gap-8 px-12 ${className}`}>
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
