import { motion } from "framer-motion";
import CloudSection from "../components/CloudSection";

const red = "#d7263d";

export default function Home() {
  return (
    <main className="bg-white text-black font-poppins overflow-x-hidden">
      <CloudSection>
        <section className="mx-auto max-w-6xl px-4 pt-24 pb-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            className="text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Evoke Films
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.1 },
            }}
            className="mt-4 text-lg md:text-xl text-neutral-700"
          >
            Connect. Create. Collaborate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.18 },
            }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="/work"
              className="px-5 py-2.5 rounded-full text-white"
              style={{ backgroundColor: red }}
            >
              View Our Work
            </a>
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-full border"
              style={{ borderColor: red, color: red }}
            >
              Get in Touch
            </a>
          </motion.div>
        </section>
      </CloudSection>
    </main>
  );
}
