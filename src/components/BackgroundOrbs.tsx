import { motion } from "framer-motion";

const BackgroundOrbs = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top-left blue orb */}
      <motion.div
        className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[hsl(220,90%,56%)] opacity-[0.07] blur-[120px] dark:opacity-[0.12]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Center-right purple orb */}
      <motion.div
        className="absolute right-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-[hsl(270,80%,60%)] opacity-[0.06] blur-[100px] dark:opacity-[0.10]"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Bottom-left warm orb */}
      <motion.div
        className="absolute bottom-[10%] left-[10%] h-[450px] w-[450px] rounded-full bg-[hsl(330,80%,60%)] opacity-[0.05] blur-[110px] dark:opacity-[0.08]"
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      {/* Mid-page teal orb */}
      <motion.div
        className="absolute left-[40%] top-[55%] h-[350px] w-[350px] rounded-full bg-[hsl(170,70%,45%)] opacity-[0.04] blur-[100px] dark:opacity-[0.07]"
        animate={{ x: [0, -15, 0], y: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      {/* Bottom-right orange orb */}
      <motion.div
        className="absolute bottom-[-5%] right-[5%] h-[300px] w-[300px] rounded-full bg-[hsl(25,95%,60%)] opacity-[0.04] blur-[90px] dark:opacity-[0.07]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />
    </div>
  );
};

export default BackgroundOrbs;
