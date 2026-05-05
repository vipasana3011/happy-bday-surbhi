import { useMemo } from "react";

interface FloatingHeartsProps {
  count?: number;
  emojis?: string[];
}

export function FloatingHearts({ count = 18, emojis = ["💖", "💕", "🌸", "✨", "🎀"] }: FloatingHeartsProps) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        size: 12 + Math.random() * 22,
        drift: (Math.random() - 0.5) * 120,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      })),
    [count, emojis]
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-up select-none"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            ["--drift" as string]: `${h.drift}px`,
            filter: "drop-shadow(0 4px 12px oklch(0.85 0.2 350 / 0.5))",
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
