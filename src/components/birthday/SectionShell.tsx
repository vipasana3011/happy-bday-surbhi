import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionShell({
  children,
  id,
  title,
  subtitle,
}: {
  children: ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id={id} className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center">
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-2xl"
        >
          {subtitle && (
            <p className="font-script text-2xl md:text-3xl mb-2" style={{ color: "oklch(0.7 0.16 350)" }}>
              {subtitle}
            </p>
          )}
          {title && <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-rose">{title}</h2>}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
