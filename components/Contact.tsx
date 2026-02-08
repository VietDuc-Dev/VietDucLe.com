"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Container from "./Container";
import { motion, easeOut } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 bg-background">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12 text-center space-y-3"
        >
          <h2 className="text-3xl font-bold text-secondary">
            Bạn đang cần <span className="text-primary">Website</span> hoặc{" "}
            <span className="text-primary">Marketing</span> hiệu quả?
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Để lại thông tin, tôi sẽ liên hệ tư vấn giải pháp phù hợp nhất cho
            doanh nghiệp của bạn – hoàn toàn miễn phí.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <Card className="max-w-xl mx-auto p-6 md:p-8 shadow-md border border-primary/10">
            <form className="space-y-4">
              <Input placeholder="Tên công ty / Cá nhân" />

              <Input placeholder="Số điện thoại" />

              <Textarea
                placeholder="Nhu cầu của bạn (Website, Ads, SEO, Google Maps...)"
                rows={4}
              />

              <p className="text-xs text-muted-foreground text-center">
                🔒 Thông tin được bảo mật • Tư vấn hoàn toàn miễn phí • Phản hồi
                trong 24h
              </p>

              <Button type="submit" className="w-full text-base font-semibold">
                Nhận tư vấn miễn phí ngay
              </Button>
            </form>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
