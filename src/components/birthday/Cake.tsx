import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function Cake() {
  const [cut, setCut] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const handleCut = () => {
    if (cut) return;
    setCut(true);
    const burst = (x: number) =>
      confetti({
        particleCount: 120,
        spread: 100,
        startVelocity: 45,
        origin: { x, y: 0.6 },
        colors: ["#ff8fab", "#ffc2d4", "#ffe5ec", "#fb6f92", "#ffd6a5", "#fff"],
      });
    burst(0.3); burst(0.7);
    setTimeout(() => burst(0.5), 300);
    setTimeout(() => setShowWish(true), 1200);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative h-[420px] w-full max-w-md">
        {/* Knife */}
        <motion.div
          initial={{ x: 200, y: -120, rotate: 30, opacity: 0 }}
          animate={cut ? { x: 0, y: 0, rotate: 90, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="absolute left-1/2 top-0 -translate-x-1/2 z-30 text-6xl"
        >
          🔪
        </motion.div>

        {/* Cake */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72">
          {/* Plate */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-6 rounded-full"
            style={{ background: "linear-gradient(180deg, oklch(0.95 0.02 350), oklch(0.85 0.04 350))", boxShadow: "0 10px 30px oklch(0.7 0.1 350 / 0.4)" }}
          />
          {/* Bottom tier */}
          <motion.div
            animate={cut ? { scaleX: [1, 1.02, 1], rotate: [0, -1, 1, 0] } : {}}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-72 h-32 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, oklch(0.92 0.08 5), oklch(0.85 0.12 350))",
              boxShadow: "var(--shadow-petal)",
            }}
          >
            {cut && (
              <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: -20, opacity: 1 }}
                className="absolute top-0 left-1/2 w-1 h-full bg-white/60"
              />
            )}
            <div className="absolute top-0 left-0 right-0 h-3" style={{ background: "linear-gradient(90deg, oklch(0.95 0.06 5), oklch(0.92 0.1 350), oklch(0.95 0.06 5))" }} />
          </motion.div>
          {/* Middle tier */}
          <div
            className="absolute bottom-32 left-1/2 -translate-x-1/2 w-56 h-24 rounded-2xl"
            style={{ background: "linear-gradient(180deg, oklch(0.96 0.05 340), oklch(0.9 0.1 340))", boxShadow: "0 6px 20px oklch(0.7 0.12 340 / 0.4)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl" style={{ background: "oklch(0.98 0.03 340)" }} />
            {/* drips */}
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="absolute top-2 w-3 h-6 rounded-b-full" style={{ left: `${10 + i * 20}%`, background: "oklch(0.78 0.16 350)" }} />
            ))}
          </div>
          {/* Top tier */}
          <div
            className="absolute bottom-52 left-1/2 -translate-x-1/2 w-40 h-20 rounded-2xl"
            style={{ background: "linear-gradient(180deg, oklch(0.97 0.03 5), oklch(0.92 0.07 5))", boxShadow: "0 6px 20px oklch(0.7 0.1 5 / 0.4)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl" style={{ background: "oklch(0.99 0.02 5)" }} />
          </div>

          {/* Candles */}
          {[0, 1, 2].map((i) => (
            <div key={i} className="absolute" style={{ bottom: "280px", left: `calc(50% - 36px + ${i * 30}px)` }}>
              <div className="w-2 h-10 rounded-sm" style={{ background: "linear-gradient(180deg, oklch(0.85 0.12 350), oklch(0.7 0.18 5))" }} />
              <AnimatePresence>
                {!cut && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.15, 1] }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                  >
                    <div
                      className="w-3 h-5 rounded-full"
                      style={{
                        background: "radial-gradient(circle, oklch(1 0.15 90), oklch(0.85 0.2 50) 60%, transparent)",
                        boxShadow: "0 0 16px oklch(0.9 0.2 60), 0 0 32px oklch(0.85 0.2 30 / 0.6)",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Sprinkles */}
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                bottom: `${40 + Math.random() * 180}px`,
                left: `${15 + Math.random() * 70}%`,
                width: 6,
                height: 3,
                background: ["#fb6f92", "#ffd6a5", "#ffc2d4", "#fff"][i % 4],
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleCut}
        disabled={cut}
        className="px-10 py-4 rounded-full gradient-rose text-white font-semibold text-lg shadow-[var(--shadow-glow)] hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed animate-pulse-glow"
      >
        {cut ? "🎉 Yay! Make a wish 💖" : "Cut the Cake 🎂"}
      </button>

      <AnimatePresence>
        {showWish && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass px-8 py-6 rounded-2xl text-center"
          >
            <p className="font-script text-3xl md:text-4xl text-gradient-rose">
              Make a wish, beautiful 💖
            </p>
            <p className="mt-2 text-sm" style={{ color: "oklch(0.5 0.08 350)" }}>
              ...close your eyes ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
