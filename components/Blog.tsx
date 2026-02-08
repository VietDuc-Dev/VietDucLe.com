"use client";

import { Card } from "@/components/ui/card";
import Container from "./Container";
import { motion, type Variants, easeOut } from "framer-motion";

const blogs = [
  {
    image:
      "https://dps.media/wp-content/uploads/mcp/2026/01/fees_vs_website_cost_1767975719203.jpg",
    title:
      "Phí sàn Shopee, TikTok tăng cao: Đã đến lúc nhà bán hàng chuyển khách về “ngôi nhà riêng” website?",
    description:
      "Khi phí sàn ngày càng leo thang và biên lợi nhuận bị bào mòn, việc phụ thuộc hoàn toàn vào Shopee hay TikTok Shop không còn là chiến lược an toàn. Website riêng đang trở thành tài sản số bền vững cho nhà bán hàng.",
  },
  {
    image:
      "https://dps.media/wp-content/uploads/2026/01/photo-1655199798186-23a85b12c4e4.jpg",
    title:
      "7 sai lầm “đốt tiền” khi chạy Facebook Ads tại Việt Nam mà chuyên gia ít chia sẻ",
    description:
      "Chi phí Facebook Ads tăng mạnh khiến nhiều SMEs tiêu tiền nhưng không ra đơn. Bài viết chỉ ra 7 sai lầm phổ biến và checklist tối ưu thực tế dựa trên kinh nghiệm triển khai hàng nghìn chiến dịch.",
  },
  {
    image:
      "https://dps.media/wp-content/uploads/2025/12/photo-1563558603156-1e0f5d0592a2.jpg",
    title: "Top 7 dịch vụ SEO Google Maps giúp doanh nghiệp lên Top bền vững",
    description:
      "SEO Google Maps là kênh sống còn với doanh nghiệp địa phương. Khi người dùng tìm kiếm “gần đây”, Maps thường chiếm ưu thế tuyệt đối trên mobile và mang lại khách hàng có nhu cầu cao.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
};

export default function Blog() {
  return (
    <section className="bg-muted py-20">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-14 text-center space-y-3"
        >
          <h2 className="text-3xl font-bold text-secondary">
            <span className="text-primary">Bài viết</span> & Chia sẻ chuyên môn
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kiến thức thực chiến về Website, Marketing Online và tăng trưởng
            doanh nghiệp trong môi trường số.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {blogs.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="group h-full overflow-hidden border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>

                  <span className="inline-block text-sm font-medium text-primary">
                    Đọc tiếp →
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
