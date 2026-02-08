"use client";

import { motion } from "framer-motion";
import CTAContract from "./common/CTAContract";
import Container from "./Container";

export default function About() {
  return (
    <section className="bg-muted overflow-hidden">
      <Container>
        <div className="pt-30 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://png.pngtree.com/png-vector/20250110/ourmid/pngtree-amazon-keyword-research-png-image_14435773.png"
              alt="About me"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-secondary text-3xl font-bold leading-snug">
              Vì sao bạn nên gọi cho <span className="text-primary">tôi?</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Tôi không chỉ cung cấp dịch vụ <strong>thiết kế website</strong>,
              mà còn đồng hành cùng doanh nghiệp trong việc xây dựng nền tảng
              tăng trưởng bền vững. Tôi tập trung vào chiến lược{" "}
              <strong>Marketing Online toàn diện</strong>, giúp thương hiệu của
              bạn tiếp cận đúng khách hàng, tối ưu chi phí và gia tăng doanh thu
              lâu dài.
            </p>

            {/* INFO BOX */}
            <div className="mt-4 rounded-xl bg-background p-5 shadow-sm max-w-md">
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Email:</strong>{" "}
                  <span className="text-muted-foreground">
                    vietducle.nasani@gmail.com
                  </span>
                </li>
                <li>
                  <strong>Số điện thoại:</strong>{" "}
                  <span className="text-muted-foreground">+84 386 631 531</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <CTAContract message="Liên hệ tư vấn" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
