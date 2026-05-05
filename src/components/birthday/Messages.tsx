import { motion } from "framer-motion";

const messages = [
  "You are my safe place 🌷",
  "Life is better with you 💫",
  "I'm so lucky to have you 💖",
  "You make ordinary days magical ✨",
  "Your laugh is my favorite song 🎶",
  "Forever my person 🤍",
];

export function Messages() {
  return (
    <div className="grid gap-6 md:gap-8">
      {messages.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
          className={`glass px-6 py-5 md:px-10 md:py-7 rounded-3xl max-w-xl ${i % 2 === 0 ? "self-start mr-auto" : "self-end ml-auto"}`}
          style={{ boxShadow: "var(--shadow-petal)" }}
        >
          <p className="font-script text-2xl md:text-3xl text-gradient-rose">{m}</p>
        </motion.div>
      ))}
    </div>
  );
}
