import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Landing } from "@/components/birthday/Landing";
import { Experience } from "@/components/birthday/Experience";
import { FloatingHearts } from "@/components/birthday/FloatingHearts";
import { MusicToggle } from "@/components/birthday/MusicToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Bestie 💖 — A Surprise Just For You" },
      { name: "description", content: "A magical, dreamy birthday surprise full of love, memories, and confetti — made with all my heart for my best friend." },
      { property: "og:title", content: "Happy Birthday, Bestie 💖" },
      { property: "og:description", content: "A magical birthday surprise made with love." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="relative min-h-screen">
      <FloatingHearts count={20} />
      <MusicToggle autoPlay={entered} />

      <AnimatePresence mode="wait">
        {!entered ? (
          <Landing key="landing" onEnter={() => setEntered(true)} />
        ) : (
          <Experience key="exp" onReplay={() => setEntered(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}
