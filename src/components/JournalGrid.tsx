"use client";

import { motion } from "framer-motion";
import JournalCard from "@/components/JournalCard";
import { journalEntries } from "@/data/journal";
import { stagger } from "@/lib/motion";

export default function JournalGrid() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {journalEntries.map((entry) => (
        <JournalCard key={entry.id} entry={entry} />
      ))}
    </motion.div>
  );
}
