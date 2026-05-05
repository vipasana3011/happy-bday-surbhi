import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { TypewriterText } from "./TypewriterText";
import { Sparkles } from "./Sparkles";

export function Landing({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <Sparkles count={40} />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <p className="font-script text-3xl md:text-4xl text-rose-400 mb-4" style={{ color: "oklch(0.7 0.18 350)" }}>
          a little surprise just for you...
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-gradient-rose">
          Happy Birthday
          <br />
          Surbhi <span className="inline-block animate-drift">💖</span>
        </h1>
        <div className="mt-8 text-lg md:text-2xl font-script min-h-[3rem]" style={{ color: "oklch(0.5 0.1 350)" }}>
          <TypewriterText text="Today the whole world celebrates the most magical soul — you ✨" startDelay={1200} />
        </div>

        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="mt-12 group relative inline-flex items-center gap-3 px-10 py-5 rounded-full gradient-rose text-white font-semibold text-lg tracking-wide shadow-[var(--shadow-glow)] animate-pulse-glow"
        >
          <span className="absolute inset-0 rounded-full overflow-hidden">
            <span className="absolute inset-0 animate-shimmer opacity-60" />
          </span>
          <Gift className="h-5 w-5 relative z-10" />
          <span className="relative z-10">Tap to Enter Surprise</span>
          <span className="relative z-10">🎁</span>
        </motion.button>

        <p className="mt-6 text-xs uppercase tracking-[0.3em]" style={{ color: "oklch(0.6 0.08 350)" }}>
          turn up your sound 🎵
        </p>
      </motion.div>
    </motion.section>
  );
}
