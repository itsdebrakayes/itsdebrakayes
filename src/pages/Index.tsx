import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StickyTextScrub from "@/components/StickyTextScrub";
import HorizontalScroll from "@/components/HorizontalScroll";
import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";
import CountUpDisplay from "@/components/CountUpNumber";
import {
  Code2,
  FileCode,
  FileJson,
  Palette,
  LayoutTemplate,
  PaintBucket,
  Server,
  Unplug,
  Database,
  DatabaseZap,
  GitBranch,
  Cloud,
} from "lucide-react";

const PROJECTS = [
  {
    title: "DanraK Productions",
    description:
      "A full-scale production company website — live and serving clients. Built with modern web technologies and a cinematic design language.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    siteUrl: "https://danarkprod.com",
    previewImage: "https://image.thum.io/get/width/800/crop/600/https://danarkproductions.com",
    gradient: "warm" as const,
  },
  {
    title: "QME Now",
    description:
      "A smart queue management and ordering platform — live and streamlining customer experiences with intuitive real-time flows.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    siteUrl: "https://qmenow.lovable.app",
    previewImage: "https://image.thum.io/get/width/800/crop/600/https://qmenow.lovable.app",
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
  { name: "React", description: "Building dynamic, component-driven interfaces with optimal performance and reusability.", category: "Frontend", icon: Code2 },
  { name: "TypeScript", description: "Type-safe development for scalable, maintainable codebases and fewer runtime errors.", category: "Frontend", icon: FileCode },
  { name: "JavaScript", description: "Core scripting for interactive web experiences, from DOM manipulation to async workflows.", category: "Frontend", icon: FileJson },
  { name: "Tailwind CSS", description: "Utility-first styling for rapid, consistent UI development with full design control.", category: "Frontend", icon: Palette },
  { name: "HTML", description: "Semantic markup for accessible, SEO-friendly web structures.", category: "Frontend", icon: LayoutTemplate },
  { name: "CSS", description: "Custom styling with animations, responsive layouts, and modern design techniques.", category: "Frontend", icon: PaintBucket },
  { name: "Node.js", description: "Server-side JavaScript for building fast, scalable backend services and APIs.", category: "Backend", icon: Server },
  { name: "Express", description: "Lightweight framework for RESTful APIs and middleware-driven server architecture.", category: "Backend", icon: Unplug },
  { name: "Supabase", description: "Open-source backend with real-time databases, auth, and instant APIs.", category: "Backend", icon: DatabaseZap },
  { name: "MySQL", description: "Relational database management for structured data and complex queries.", category: "Backend", icon: Database },
  { name: "Git", description: "Version control for collaborative development and clean project history.", category: "Tools", icon: GitBranch },
  { name: "Azure", description: "Cloud computing platform for deployment, scaling, and DevOps workflows.", category: "Tools", icon: Cloud },
];

const IDENTITY_BADGES = [
  { label: "🇯🇲 Jamaican", color: "warm" },
  { label: "🎮 Gamer", color: "blue" },
  { label: "🎓 UWI Mona", color: "warm" },
  { label: "💻 CS Graduate", color: "blue" },
];

const ABOUT_SKILLS: Record<string, string[]> = {
  Frontend: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  Design: ["UI/UX Design", "Figma", "Responsive Design", "Prototyping"],
  Tools: ["Git", "Docker", "AWS", "Azure", "REST APIs"],
};

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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
          style={{
            background: "radial-gradient(circle, hsl(220, 90%, 56%) 0%, hsl(270, 80%, 60%) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div style={{ scale, opacity, y }} className="text-center">
          <motion.h1
            className="text-5xl font-bold tracking-tight md:text-[100px] lg:text-[130px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-gradient-blue">Debra-Kaye Smith</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-muted-foreground md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            Full Stack Developer. Creative.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {IDENTITY_BADGES.map((b) => (
              <span
                key={b.label}
                className={`glass rounded-full px-6 py-2.5 text-sm font-semibold tracking-wider md:text-base ${
                  b.color === "blue"
                    ? "shadow-[0_0_20px_hsl(220,90%,56%,0.3)]"
                    : "shadow-[0_0_20px_hsl(30,90%,56%,0.3)]"
                }`}
              >
                {b.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

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
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
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
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left — Visual / Experience card */}
          <ScrollReveal>
            <div className="relative">
              <div className="tech-card" style={{ minHeight: 320 }}>
                <div className="tech-card__accent" />
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <motion.div
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl"
                    style={{ background: "hsla(30, 95%, 55%, 0.12)", border: "1px solid hsla(30, 95%, 55%, 0.2)" }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Code2 size={36} style={{ color: "hsl(30, 95%, 55%)" }} />
                  </motion.div>
                  <p className="text-5xl font-bold text-foreground">5+</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">Years Experience</p>

                  <div className="mx-auto mt-8 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-[hsla(30,95%,55%,0.3)] to-transparent" />

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {["React", "TypeScript", "Node.js", "Tailwind"].map((t) => (
                      <span key={t} className="rounded-full border border-[hsla(30,95%,55%,0.2)] bg-[hsla(30,95%,55%,0.08)] px-3 py-1 text-xs font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Text content */}
          <ScrollReveal delay={0.15}>
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Who I Am</h2>
              <p className="mt-4 text-4xl font-bold md:text-5xl">
                About <span className="text-gradient-warm">Me</span>
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">Full-Stack Developer & Creative</p>

              <p className="mt-6 leading-relaxed text-muted-foreground">
                I create digital experiences that combine innovative technology with
                elegant design. With expertise in both frontend and backend development,
                I deliver solutions that are visually stunning, highly functional, and
                user-friendly. Jamaican creative bringing culture, clarity, and precision
                into every project.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {Object.entries(ABOUT_SKILLS).map(([category, skills]) => (
                  <div key={category} className="about-skill-category">
                    <div className="about-skill-dot" />
                    <div>
                      <p className="text-sm font-bold text-foreground">{category}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {skills.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
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
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Technologies</h2>
        <p className="mt-4 text-4xl font-bold md:text-6xl">
          <span className="text-gradient-warm">Stack.</span>
        </p>
      </ScrollReveal>

      <div className="mx-auto mt-20 max-w-6xl space-y-16">
        {categories.map((cat) => (
          <div key={cat}>
            <ScrollReveal>
              <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">{cat}</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TECH_STACK.filter((t) => t.category === cat).map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <ScrollReveal key={tech.name} delay={i * 0.08}>
                    <div className="tech-card">
                      <div className="tech-card__accent" />
                      <div className="tech-card__icon">
                        <Icon size={20} />
                      </div>
                      <span className="tech-card__title">{tech.name}</span>
                      <p className="tech-card__desc">{tech.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
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
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">By the Numbers</h2>
      </ScrollReveal>

      <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-3">
        <CountUpDisplay value={5} suffix="+" label="Years as a Developer" />
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

        <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Debra-Kaye Smith</p>
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
