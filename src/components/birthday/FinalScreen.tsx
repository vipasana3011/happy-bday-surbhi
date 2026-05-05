import { motion } from "framer-motion";
import { useMemo } from "react";

export function FinalScreen({ onReplay }: { onReplay: () => void }) {
  const drops = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 8,
        emoji: ["💕", "⭐", "✨", "🌸"][i % 4],
        size: 14 + Math.random() * 18,
      })),
    []
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, oklch(0.95 0.12 350 / 0.6), transparent 60%), radial-gradient(circle at 50% 60%, oklch(0.92 0.1 5 / 0.5), transparent 70%)",
        }}
      />
      {drops.map((d) => (
        <span
          key={d.id}
          className="absolute animate-float-up"
          style={{
            left: `${d.left}%`,
            fontSize: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            animationDirection: "reverse",
          }}
        >
          {d.emoji}
        </span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="relative z-10 max-w-3xl glass rounded-[2rem] px-8 py-14 md:px-16 md:py-20"
      >
        <p className="font-script text-3xl md:text-4xl mb-4" style={{ color: "oklch(0.6 0.16 350)" }}>
          and finally...
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-bold text-gradient-rose leading-tight">
          I like You Alot  💕
        </h2>
        <p className="mt-6 text-base md:text-lg" style={{ color: "oklch(0.45 0.08 350)" }}>
          Thank you for being my person — today, tomorrow, and always.You make every day brighter just by being you.  You are My "Tum Ho Toh Sab AChha hai" Person
          <br />
          Here's to a year as beautiful as you are. 🥂✨
        </p>

        <button
          onClick={onReplay}
          className="mt-10 px-8 py-4 rounded-full gradient-rose text-white font-semibold shadow-[var(--shadow-glow)] hover:scale-105 transition animate-pulse-glow"
        >
          Replay the Magic ↺
        </button>

        <p className="mt-8 font-script text-xl" style={{ color: "oklch(0.6 0.12 350)" }}>
          made by gautam  with all my love 💖
        </p>
      </motion.div>
    </section>
  );
}
