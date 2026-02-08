"use client";

import { motion } from "framer-motion";
import DomainPricingSlider from "./common/DomainPricingSlider";
import Container from "./Container";

export default function DomainPricingSliderSection() {
  return (
    <motion.section
      className="absolute w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // easing mượt kiểu Apple
      }}
      viewport={{ once: true }}
    >
      <Container className="relative -top-20">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <DomainPricingSlider />
        </motion.div>
      </Container>
    </motion.section>
  );
}
