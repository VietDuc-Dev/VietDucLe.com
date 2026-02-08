"use client";

import Container from "./Container";
import { Card } from "./ui/card";
import { motion, type Variants, easeOut } from "framer-motion";

const projects = [
  {
    logo: "https://vnroyal.com/upload/photo/thiet-ke-chua-co-ten-1-9936.png",
    name: "Tập đoàn VN ROYAL",
    link: "",
  },
  {
    logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/08/logo-benh-vien-hung-vuong.png",
    name: "Bệnh viện Hùng Vương",
    link: "",
  },
  {
    logo: "https://lms.giadinh.edu.vn/pluginfile.php/1/theme_edumy/headerlogo1/1763023545/logo-dai-hoc-gia-dinh-gold.png",
    name: "Đại học Gia Định",
    link: "",
  },
  {
    logo: "https://logoso1.com/wp-content/uploads/2020/07/logo-sacombank-ban-dau.png",
    name: "Ngân hàng Sacombank",
    link: "",
  },
  {
    logo: "https://lh4.googleusercontent.com/proxy/a1_5i_tevZE2SdKYgVmet98nhNYaX2du_ol3iUXk-FJuEezWtcEdBm5YH7VMaZYujHVgRS67QtTPFCx3-RW07NOTkbuJuSbCsMQD7kq5I1FKBV6kHsioAmQoaTF6sedlLRmDZDf3F-8",
    name: "Bảo tàng mỹ thuật TP HCM ",
    link: "",
  },
  {
    logo: "https://images.vietnamworks.com/pictureofcompany/30/11126423.png",
    name: "Cty CP Việt Nhật E&C",
    link: "",
  },
  {
    logo: "https://thodia.mservice.io/display?url=https://attachment.momocdn.net/common/u/2e02fb5fe4f64fb55bc713540643c6f8eae702d101cea8c59afc49cfc505fc37/0af0642e-549f-435e-92ac-95e2bc6fde29cmbuiarz.jpg&fmt=jpg&w=300&op=resize",
    name: "Cafe muối Chú Long",
    link: "",
  },
  {
    logo: "https://gaquaytranchung.com.vn/thumbs/180x242x1/upload/photo/logo1-1727881149.png",
    name: "Gà quay Trần Chung",
    link: "",
  },
  {
    logo: "https://kingdomkaraoke.com/upload/photo/c5c5003ffff0a9bec3d1a7cf8c73a5db-8142-2991.png",
    name: "Karaoke kingdom",
    link: "",
  },
  {
    logo: "https://hoangchauplywood.vn/th/thumbs/170x188x2/upload/photo/logo-8897.png",
    name: "Hoang Chau Plywood International",
    link: "",
  },
  {
    logo: "https://bizweb.dktcdn.net/thumb/large/100/288/381/products/439526433-824974353003625-1480553731867065032-n.jpg?v=1744192143723",
    name: "Marina Bay Vũng Tàu",
    link: "",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuS2Jo6GhdPPhixQ9Wgnntr5ZX9bsmtLtZWg&s",
    name: "Showroom Ưng Hoàng Phúc",
    link: "",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
};

export default function Projects() {
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
            <span className="text-primary">Khách hàng</span> tiêu biểu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hơn 100+ doanh nghiệp, tổ chức và thương hiệu đã tin tưởng lựa chọn
            tôi trong hành trình xây dựng và phát triển nền tảng số.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
        >
          {projects.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Card className="group h-full p-6 flex flex-col items-center justify-center gap-4 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-14 object-contain transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>

                <p className="text-xs text-center font-medium text-muted-foreground group-hover:text-secondary transition-colors">
                  {item.name}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
