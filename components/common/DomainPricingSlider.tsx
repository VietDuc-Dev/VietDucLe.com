"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const domains = [
  { name: ".com", price: "366.120đ", extend: "366.120đ", hot: true },
  { name: ".com.vn", price: "691.000đ", extend: "349.000đ", hot: true },
  { name: ".vn", price: "820.000đ", extend: "479.000đ", hot: true },
  { name: ".net", price: "415.800đ", extend: "415.800đ" },
  { name: ".info", price: "783.000đ", extend: "783.000đ" },
  { name: ".org", price: "405.000đ", extend: "405.000đ" },
  { name: ".biz", price: "583.200đ", extend: "583.200đ" },
  { name: ".net.vn", price: "415.800đ", extend: "415.800đ" },
  { name: ".me", price: "691.200đ", extend: "691.200đ" },
  { name: ".name", price: "313.200đ", extend: "313.200đ" },
  { name: ".us", price: "270.000đ", extend: "270.000đ" },
];

// Container animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function DomainPricingSlider() {
  return (
    <div className="relative px-6 bg-white shadow-lg shadow-primary/50 border rounded-2xl">
      <Carousel opts={{ align: "start" }} className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <CarouselContent className="my-6">
            {domains.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6 "
              >
                <div className="mx-1">
                  <motion.div
                    variants={cardVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.04,
                      transition: { duration: 0.25 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="relative rounded-2xl p-4 text-center cursor-pointer bg-white shadow-lg border border-primary"
                  >
                    {/* HOT Badge */}
                    {item.hot && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="absolute -top-3 right-3 text-xs bg-primary text-white px-2 py-1 rounded-full shadow"
                      >
                        HOT 🔥
                      </motion.span>
                    )}

                    {/* Domain */}
                    <h3 className="text-lg font-semibold text-secondary">
                      {item.name}
                    </h3>

                    {/* Price */}
                    <p className="text-primary text-2xl font-bold mt-2">
                      {item.price}
                    </p>

                    {/* Extend */}
                    <p className="text-muted-foreground text-sm mt-1">
                      Gia hạn {item.extend}
                    </p>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>

        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
