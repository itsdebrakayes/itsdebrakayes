import { motion } from "framer-motion";

interface GlassCardProps {
  title: string;
  description: string;
  techStack?: string[];
  siteUrl?: string;
  repoUrl?: string;
  previewImage?: string;
  gradient?: "blue" | "warm";
}

const GlassCard = ({
  title,
  description,
  techStack = [],
  siteUrl,
  repoUrl,
  previewImage,
  gradient = "blue",
}: GlassCardProps) => {
  const gradientBar =
    gradient === "blue"
      ? "bg-gradient-to-r from-[hsl(220,90%,56%)] to-[hsl(270,80%,60%)]"
      : "bg-gradient-to-r from-[hsl(330,80%,60%)] to-[hsl(25,95%,60%)]";

  const glowClass = gradient === "blue" ? "glow-blue" : "glow-warm";

  return (
    <motion.div
      className={`glass rounded-3xl p-8 flex-shrink-0 w-[85vw] max-w-[500px] md:w-[420px] flex flex-col group hover:${glowClass} transition-shadow duration-500`}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Gradient accent bar */}
      <div className={`h-1 w-20 rounded-full mb-6 ${gradientBar}`} />

      {/* Site preview */}
      {previewImage && (
        <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
          <img
            src={previewImage}
            alt={`${title} preview`}
            className="w-full h-48 object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      {/* Title */}
      <h3
        className={`text-2xl font-bold mb-3 ${
          gradient === "blue" ? "text-gradient-blue" : "text-gradient-warm"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{description}</p>

      {/* Tech stack pills */}
      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="glass-subtle rounded-full px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4">
        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium ${
              gradient === "blue" ? "text-gradient-blue" : "text-gradient-warm"
            } hover:opacity-80 transition-opacity`}
          >
            Visit Site →
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default GlassCard;
