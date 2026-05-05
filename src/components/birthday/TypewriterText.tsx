import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number;
  className?: string;
  onDone?: () => void;
  startDelay?: number;
}

export function TypewriterText({ text, speed = 55, className, onDone, startDelay = 0 }: Props) {
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(startDelay === 0);

  useEffect(() => {
    if (startDelay === 0) return;
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (shown.length >= text.length) {
      onDone?.();
      return;
    }
    const t = setTimeout(() => setShown(text.slice(0, shown.length + 1)), speed);
    return () => clearTimeout(t);
  }, [shown, text, speed, started, onDone]);

  return (
    <span className={className}>
      {shown}
      <span className="inline-block w-[2px] h-[0.9em] align-middle ml-1 bg-current opacity-70 animate-pulse" />
    </span>
  );
}
