import { useMemo } from "react";

export function Sparkles({ count = 30 }: { count?: number }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        size: 4 + Math.random() * 8,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-sparkle rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: "radial-gradient(circle, oklch(1 0 0) 0%, oklch(0.9 0.18 350 / 0.8) 60%, transparent 100%)",
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 12px oklch(0.9 0.2 350 / 0.8)",
          }}
        />
      ))}
    </div>
  );
}
