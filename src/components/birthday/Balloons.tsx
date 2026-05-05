import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const colors = [
  "oklch(0.78 0.18 5)",
  "oklch(0.82 0.14 340)",
  "oklch(0.85 0.12 30)",
  "oklch(0.78 0.16 350)",
  "oklch(0.88 0.1 60)",
  "oklch(0.8 0.15 320)",
];

interface B { id: number; color: string; left: number; delay: number; }

const initial: B[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  color: colors[i % colors.length],
  left: 4 + (i * 92) / 12 + (Math.random() * 6 - 3),
  delay: Math.random() * 4,
}));

export function Balloons() {
  const [balloons, setBalloons] = useState<B[]>(initial);

  const pop = (id: number) => {
    confetti({
      particleCount: 60,
      spread: 70,
      startVelocity: 35,
      origin: { x: Math.random(), y: Math.random() * 0.5 + 0.2 },
      colors: ["#ff8fab", "#ffc2d4", "#ffe5ec", "#fb6f92", "#ffb3c6"],
      scalar: 0.9,
    });
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.setValueAtTime(880, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);
      g.gain.setValueAtTime(0.2, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      o.connect(g); g.connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + 0.2);
    } catch { /* ignore */ }
    setBalloons((b) => b.filter((x) => x.id !== id));
  };

  const reset = () => setBalloons(initial);

  return (
    <div className="relative h-[60vh] w-full glass rounded-3xl overflow-hidden">
      <AnimatePresence>
        {balloons.map((b) => (
          <motion.button
            key={b.id}
            onClick={() => pop(b.id)}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: ["110%", "-20%"], opacity: [0, 1, 1, 0.9] }}
            exit={{ scale: 1.6, opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 12, delay: b.delay, repeat: Infinity, ease: "linear" }}
            style={{ left: `${b.left}%` }}
            className="absolute bottom-0 cursor-pointer"
            aria-label="Pop balloon"
          >
            <div className="relative">
              <div
                className="w-14 h-16 md:w-16 md:h-20 rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, oklch(1 0 0 / 0.6), ${b.color})`,
                  boxShadow: `0 8px 30px ${b.color}`,
                }}
              />
              <div
                className="w-0 h-0 mx-auto"
                style={{
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: `8px solid ${b.color}`,
                }}
              />
              <div className="w-px h-16 mx-auto" style={{ background: "oklch(0.5 0.05 350 / 0.4)" }} />
            </div>
          </motion.button>
        ))}
      </AnimatePresence>

      {balloons.length === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <p className="font-script text-3xl" style={{ color: "oklch(0.6 0.15 350)" }}>
            you popped them all! 🎉
          </p>
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full gradient-rose text-white font-semibold shadow-[var(--shadow-soft)] hover:scale-105 transition"
          >
            Send More Balloons 🎈
          </button>
        </div>
      )}

      <p className="absolute top-4 left-1/2 -translate-x-1/2 font-script text-xl pointer-events-none" style={{ color: "oklch(0.6 0.12 350)" }}>
        tap the balloons 💕
      </p>
    </div>
  );
}
