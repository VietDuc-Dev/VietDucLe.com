"use client";

import { Card } from "@/components/ui/card";
import Container from "./Container";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import Design from "@/public/design.svg";
import Marketing from "@/public/marketing.svg";
import Help from "@/public/help.svg";
import Map from "@/public/map.svg";
import Pen from "@/public/pen.svg";
import Security from "@/public/scurity.svg";
import CardService from "./common/CardService";

const services = [
  {
    icon: Design,
    title: "Thiết kế Website",
    description:
      "Thiết kế website chuẩn UI/UX, tối ưu tốc độ và SEO, giúp doanh nghiệp xây dựng hình ảnh chuyên nghiệp và tăng tỷ lệ chuyển đổi khách hàng.",
  },
  {
    icon: Marketing,
    title: "Marketing Online",
    description:
      "Giải pháp marketing tổng thể: Facebook Ads, Google Ads, TikTok Ads giúp tiếp cận đúng khách hàng, tối ưu chi phí và tăng trưởng doanh thu bền vững.",
  },
  {
    icon: Security,
    title: "Bảo trì & Nâng cấp",
    description:
      "Hỗ trợ kỹ thuật 24/7, nâng cấp tính năng, vá lỗi và bảo mật SSL giúp website vận hành ổn định, an toàn và hiệu quả lâu dài.",
  },
  {
    icon: Help,
    title: "Chăm sóc Website & Fanpage",
    description:
      "Quản trị nội dung, cập nhật hình ảnh, bài viết và tương tác fanpage giúp doanh nghiệp duy trì hình ảnh và kết nối khách hàng hiệu quả.",
  },
  {
    icon: Map,
    title: "Google Maps",
    description:
      "Xây dựng và tối ưu Google Maps từ A–Z, tăng khả năng hiển thị địa phương và thu hút khách hàng tiềm năng gần bạn.",
  },
  {
    icon: Pen,
    title: "Thiết kế Đồ họa",
    description:
      "Thiết kế banner, poster, logo, ấn phẩm truyền thông sáng tạo, nhất quán thương hiệu và nổi bật giữa thị trường cạnh tranh.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <Container>
      <section className="py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center space-y-3"
        >
          <h2 className="text-3xl font-bold text-secondary">
            <span className="text-primary">Dịch vụ</span> của tôi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tôi đồng hành cùng doanh nghiệp của bạn từ xây dựng nền tảng online
            đến triển khai marketing, hướng tới tăng trưởng bền vững và hiệu
            quả.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <CardService
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Container>
  );
}
