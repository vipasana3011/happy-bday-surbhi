import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function GiftBox() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    confetti({
      particleCount: 200,
      spread: 160,
      startVelocity: 50,
      origin: { y: 0.6 },
      shapes: ["circle"],
      colors: ["#ff8fab", "#ffc2d4", "#ffe5ec", "#fb6f92", "#ffd6a5"],
    });
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative h-72 w-72">
        <AnimatePresence>
          {!open ? (
            <motion.button
              key="box"
              onClick={handleOpen}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              exit={{ scale: 1.4, opacity: 0 }}
              className="absolute inset-0 cursor-pointer"
              aria-label="Open gift"
            >
              {/* Lid */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-56 h-16 rounded-xl gradient-rose shadow-[var(--shadow-petal)]" />
              {/* Box */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-52 h-44 rounded-xl shadow-[var(--shadow-petal)]"
                style={{ background: "linear-gradient(180deg, oklch(0.85 0.14 350), oklch(0.72 0.18 5))" }}
              />
              {/* Ribbon vertical */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-58 h-[15rem]"
                style={{ background: "linear-gradient(180deg, oklch(0.96 0.06 60), oklch(0.88 0.1 50))" }}
              />
              {/* Bow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-5xl">🎀</div>
              <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-script text-xl whitespace-nowrap" style={{ color: "oklch(0.55 0.12 350)" }}>
                tap to open 💝
              </p>
            </motion.button>
          ) : (
            <motion.div
              key="opened"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="glass rounded-3xl p-8 text-center max-w-sm">
                <div className="text-6xl mb-3 animate-drift">💖</div>
                <p className="font-script text-3xl text-gradient-rose">My biggest gift is you</p>
                <p className="mt-2 text-sm" style={{ color: "oklch(0.5 0.08 350)" }}>
                  thank you for existing in my life ✨
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {open &&
          ["💖", "🌸", "✨", "💕", "🎀", "🌷", "💫", "🤍"].map((e, i) => (
            <motion.span
              key={i}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
              animate={{
                x: Math.cos((i / 8) * Math.PI * 2) * 200,
                y: Math.sin((i / 8) * Math.PI * 2) * 200,
                opacity: 0,
                scale: 1.5,
              }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 text-4xl pointer-events-none"
            >
              {e}
            </motion.span>
          ))}
      </div>
    </div>
  );
}
