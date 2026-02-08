"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import CTAContract from "./common/CTAContract";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center pt-10 pb-30 gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* H1 – SEO core */}
            <h1 className="text-secondary text-4xl md:text-5xl font-bold leading-tight">
              Giải pháp <span className="text-primary">Marketing Online</span>
              <br />
              Toàn diện cho <span className="text-primary">doanh nghiệp</span>
            </h1>

            {/* Description – keyword support */}
            <p className="max-w-2xl font-medium text-muted-foreground leading-relaxed">
              Xây dựng Website giúp <strong>Tăng khách hàng</strong> –{" "}
              <strong>Giảm chi phí</strong> – <strong>Tối ưu doanh thu</strong>.
              <br />
              • Tăng chuyển đổi
              <br />
              • Tối ưu chi phí quảng cáo
              <br />• Website chuẩn SEO – bảo mật
            </p>

            {/* Channels */}
            <span className="inline-block font-semibold text-primary tracking-wide">
              Google Ads • Facebook Ads • TikTok Ads
            </span>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-4">
              <CTAContract message="Liên hệ ngay" />
              <Button variant="outline">Xem dự án</Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://png.pngtree.com/png-vector/20250110/ourmid/pngtree-amazon-keyword-research-png-image_14435943.png"
              // src="https://png.pngtree.com/png-vector/20250110/ourmid/pngtree-amazon-keyword-research-png-image_14435773.png"
              alt="Hero"
              className="w-full max-w-md object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
