"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { stagger, viewportOnce } from "@/lib/motion";

export default function ServicesGrid() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid gap-4 lg:grid-cols-2"
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </motion.div>
  );
}
