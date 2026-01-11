"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import TestimonialCard from "./common/TestimonialCard";
import Container from "./Container";

const TestimonialData = [
  {
    name: "Nguyên Văn Viên",
    avt: "https://chothuestudio.com/wp-content/uploads/2024/07/TCA_3837.jpg",
    date: "12/5/2024",
    rating: 5,
    comment:
      "Sau khi trải nghiệm nhiều sản phẩm tại đây, tôi hoàn toàn bị thuyết phục bởi độ bền và tính năng vượt trội. Đây chắc chắn là địa chỉ uy tín mà tôi sẽ tiếp tục ủng hộ lâu dài.",
  },
  {
    name: "Trần Thị Kiều Oanh",
    avt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNGUQL1gZCdFgTIDV4QlkQsqM6llZzdFiFn-b9_mqq1j6TkAoopuY4eZOMUj8dwlUpZA&usqp=CAU",
    date: "17/9/2024",
    rating: 5,
    comment:
      "Tôi rất ấn tượng với quy trình kiểm duyệt kỹ lưỡng và sự tận tâm của đội ngũ nhân viên. Sản phẩm khi đến tay đều đạt chuẩn chất lượng cao, mang lại sự yên tâm tuyệt đối.",
  },
  {
    name: "Đinh Văn Cao",
    avt: "https://m.yodycdn.com/products/taodangchupanhgymnamyodyvn1_m28mrh4yrsttstf2ub.jpg",
    date: "21/2/2025",
    rating: 5,
    comment:
      "Các dòng sản phẩm thể hình tại đây cực kỳ chuyên nghiệp, hỗ trợ tối ưu cho quá trình tập luyện. Một lựa chọn không thể bỏ qua cho những ai đam mê thể thao.",
  },
  {
    name: "Huỳnh Thị Ngọc Anh",
    avt: "https://nguoinoitieng.tv/images/nnt/101/0/bfnn.jpg",
    date: "2/5/2025",
    rating: 4,
    comment:
      "Không chỉ có bao bì tinh tế, sang trọng mà chất lượng mỹ phẩm bên trong cũng thực sự hiệu quả. Trải nghiệm sử dụng rất đáng tiền và tôi sẽ giới thiệu cho bạn bè.",
  },
];

export default function Testimonials() {
  return (
    <Container>
      <section className="container py-20">
        <h2 className="text-center text-3xl text-secondary font-bold mb-12">
          <span className="text-primary">Khách hàng</span> nói gì?
        </h2>

        <div className="mt-5 mx-10">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {TestimonialData.map((item, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <TestimonialCard testimonial={item} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </Container>
  );
}
