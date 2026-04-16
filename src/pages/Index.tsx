import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StickyTextScrub from "@/components/StickyTextScrub";
import HorizontalScroll from "@/components/HorizontalScroll";
import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";
import CountUpDisplay from "@/components/CountUpNumber";

const PROJECTS = [
  {
    title: "DanraK Productions",
    description:
      "A full-scale production company website — live and serving clients. Built with modern web technologies and a cinematic design language.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    siteUrl: "https://danarkproductions.com",
    previewImage: "https://image.thum.io/get/width/800/crop/600/https://danarkproductions.com",
    gradient: "warm" as const,
  },
  {
    title: "Cumino",
    description:
      "A beautifully crafted culinary platform — live and connecting food lovers. Elegant UI with seamless user experience.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    siteUrl: "https://cumino.com",
    previewImage: "https://image.thum.io/get/width/800/crop/600/https://cumino.com",
    gradient: "warm" as const,
  },
  {
    title: "CACTUS",
    description:
      "A campus safety application designed to keep students informed and connected. Real-time alerts and community-driven safety features.",
    techStack: ["React Native", "TypeScript", "Firebase", "Maps API"],
    repoUrl: "https://github.com/itsdebrakayes",
    gradient: "blue" as const,
  },
  {
    title: "JamAI",
    description:
      "AI-powered music creation tool — blending machine learning with creative expression. Generate, remix, and explore new sounds.",
    techStack: ["Python", "TensorFlow", "React", "Web Audio API"],
    repoUrl: "https://github.com/itsdebrakayes",
    gradient: "blue" as const,
  },
  {
    title: "YaadExplorer",
    description:
      "Explore Jamaica like never before — a cultural discovery platform highlighting local gems, hidden spots, and authentic experiences.",
    techStack: ["React", "Node.js", "MongoDB", "Mapbox"],
    repoUrl: "https://github.com/itsdebrakayes",
    gradient: "warm" as const,
  },
];

const TECH_STACK = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Firebase", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Vercel", category: "Tools" },
];

const BADGES = [
  { label: "PRO", color: "blue" },
  { label: "Pull Shark", color: "warm" },
];

// ─── Hero Section ────────────────────────────────────────────────
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className="relative flex min-h-[200vh] flex-col">
      {/* Gradient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, hsl(220, 90%, 56%) 0%, hsl(270, 80%, 60%) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div style={{ scale, opacity, y }} className="text-center">
          <motion.h1
            className="text-6xl font-bold tracking-tight md:text-[120px] lg:text-[150px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-gradient-blue">itsdebrakayes</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-muted-foreground md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Developer. Creator. Builder.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {BADGES.map((b) => (
              <span
                key={b.label}
                className={`glass rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider ${
                  b.color === "blue" ? "text-gradient-blue" : "text-gradient-warm"
                }`}
              >
                {b.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <motion.div
            className="h-8 w-[1px] bg-muted-foreground/40"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

// ─── About Section ───────────────────────────────────────────────
const AboutSection = () => {
  return (
    <section className="relative">
      <StickyTextScrub
        text="I'm a developer and creative technologist who builds products that people love. From production company websites to AI-powered music tools, I craft experiences that blend design and engineering into something unforgettable."
      />
    </section>
  );
};

// ─── Projects Section ────────────────────────────────────────────
const ProjectsSection = () => {
  return (
    <section className="relative">
      <ScrollReveal className="px-6 py-24">
        <h2 className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Featured Work
        </h2>
        <p className="mt-4 text-center text-4xl font-bold md:text-6xl">
          <span className="text-gradient-blue">Projects.</span>
        </p>
      </ScrollReveal>

      <HorizontalScroll>
        {PROJECTS.map((project) => (
          <GlassCard key={project.title} {...project} />
        ))}
      </HorizontalScroll>
    </section>
  );
};

// ─── Tech Stack Section ──────────────────────────────────────────
const TechStackSection = () => {
  const categories = ["Frontend", "Backend", "Tools"];

  return (
    <section className="px-6 py-32">
      <ScrollReveal className="text-center">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Technologies
        </h2>
        <p className="mt-4 text-4xl font-bold md:text-6xl">
          <span className="text-gradient-warm">Stack.</span>
        </p>
      </ScrollReveal>

      <div className="mx-auto mt-20 max-w-5xl space-y-16">
        {categories.map((cat) => (
          <div key={cat}>
            <ScrollReveal>
              <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {cat}
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {TECH_STACK.filter((t) => t.category === cat).map((tech, i) => (
                <ScrollReveal key={tech.name} delay={i * 0.1}>
                  <div className="glass-subtle group rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/10">
                    <span className="text-sm font-medium text-foreground group-hover:text-gradient-blue transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Stats Section ───────────────────────────────────────────────
const StatsSection = () => {
  return (
    <section className="px-6 py-32">
      <ScrollReveal className="text-center">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          By the Numbers
        </h2>
      </ScrollReveal>

      <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-3">
        <CountUpDisplay value={194} suffix="+" label="Contributions" />
        <CountUpDisplay value={19} suffix="" label="Repositories" />
        <CountUpDisplay value={5} suffix="+" label="Live Projects" />
      </div>
    </section>
  );
};

// ─── Footer ──────────────────────────────────────────────────────
const Footer = () => {
  return (
    <footer className="border-t border-border/20 px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <ScrollReveal>
          <p className="text-3xl font-bold md:text-5xl">
            <span className="text-gradient-blue">Let's build something.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex gap-8">
            <a
              href="https://github.com/itsdebrakayes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </ScrollReveal>

        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} itsdebrakayes
        </p>
      </div>
    </footer>
  );
};

// ─── Main Page ───────────────────────────────────────────────────
const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <StatsSection />
      <Footer />
    </main>
  );
};

export default Index;
