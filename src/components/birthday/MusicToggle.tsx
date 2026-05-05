import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import song from "../../music/TumhoToh.mp3";

export function MusicToggle() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = ref.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.4;
      audio.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      <audio ref={ref} src={song} loop preload="auto" />

      <button
        onClick={toggle}
        className="fixed top-5 right-5 z-50 glass rounded-full p-3 hover:scale-110 transition-transform"
      >
        {playing ? (
          <Volume2 className="h-5 w-5 text-rose-500" />
        ) : (
          <VolumeX className="h-5 w-5 text-gray-500" />
        )}
      </button>
    </>
  );
}