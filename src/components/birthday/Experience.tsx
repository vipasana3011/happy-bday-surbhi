import { SectionShell } from "./SectionShell";
import { DedicatedGallery } from "./DedicatedGallery";
import { Balloons } from "./Balloons";
import { Cake } from "./Cake";
import { Messages } from "./Messages";
import { GiftBox } from "./GiftBox";
import { CuteGifs } from "./CuteGifs";
import { FinalScreen } from "./FinalScreen";
import { TypewriterText } from "./TypewriterText";
import { MusicToggle } from "./MusicToggle"; // 💖 ADD THIS
import { motion } from "framer-motion";

export function Experience({ onReplay }: { onReplay: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative scroll-smooth"
    >

      {/* 💖 MUSIC (AUTO PLAY TRY) */}
      <MusicToggle />

      {/* Welcome */}
      <SectionShell subtitle="welcome to your day" title="It's All About You Today 🌸">
        <div className="glass rounded-3xl p-8 md:p-14 text-center max-w-3xl mx-auto">
          <p
            className="font-script text-2xl md:text-3xl leading-relaxed"
            style={{ color: "oklch(0.5 0.1 350)" }}
          >
            <TypewriterText
              text="From the bottom of my heart — happy birthday to the girl who lights up every room she walks into. This little corner of the internet is just for you 💖"
              speed={35}
            />
          </p>
        </div>
      </SectionShell>

      {/* Dedicated Gallery */}
      <SectionShell subtitle="for you 💕" title="Dedicated To You 💖">
        <DedicatedGallery />
      </SectionShell>

      {/* Balloons */}
      <SectionShell subtitle="a little fun" title="Pop the Balloons 🎈">
        <Balloons />
      </SectionShell>

      {/* Cake */}
      <SectionShell subtitle="the main event" title="Cut Your Cake 🎂">
        <Cake />
      </SectionShell>

      {/* Messages */}
      <SectionShell subtitle="words from my heart" title="Just for You 💌">
        <Messages />
      </SectionShell>

      {/* Gift */}
      <SectionShell subtitle="a tiny surprise" title="Open Your Gift 🎁">
        <GiftBox />
      </SectionShell>

      {/* Cute */}
      <SectionShell subtitle="because you're adorable" title="Cute Things For Cute You 🧸">
        <CuteGifs />
      </SectionShell>

      {/* Final */}
      <FinalScreen onReplay={onReplay} />
    </motion.div>
  );
}