import { motion } from "framer-motion";

const items = [
  { e: "🧸", label: "teddy hugs" },
  { e: "🐰", label: "bunny love" },
  { e: "🦄", label: "magical you" },
  { e: "🍰", label: "sweet dreams" },
  { e: "🌸", label: "soft soul" },
  { e: "☁️", label: "head in clouds" },
];

export function CuteGifs() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((it, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          className="glass rounded-3xl p-8 text-center"
        >
          <div className="text-7xl mb-3" style={{ filter: "drop-shadow(0 8px 16px oklch(0.7 0.15 350 / 0.4))" }}>
            {it.e}
          </div>
          <p className="font-script text-xl" style={{ color: "oklch(0.55 0.12 350)" }}>
            {it.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
