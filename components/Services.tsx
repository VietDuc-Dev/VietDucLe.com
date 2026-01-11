import { Card } from "@/components/ui/card";
import Container from "./Container";
import Image from "next/image";
import Design from "@/public/design.svg";
import Marketing from "@/public/marketing.svg";
import Help from "@/public/help.svg";
import Map from "@/public/map.svg";
import Pen from "@/public/pen.svg";
import Scurity from "@/public/scurity.svg";

const services = [
  {
    icon: Design,
    title: "Thiết kế Website",
    description:
      "Thiết kế web đẹp, chuyên nghiệp với chi phí hợp lý cùng dịch vụ bảo hành và hậu mãi chu đáo luôn mang đến sự hài lòng cho khách hàng…",
  },
  {
    icon: Marketing,
    title: "Marketing Online",
    description:
      "Cung cấp giải pháp Affiliate Marketing giúp doanh nghiệp tăng doanh thu, mở rộng thị trường và tối ưu chi phí quảng cáo. Facebook Ads - Google Ads - Tiktok Ads",
  },
  {
    icon: Scurity,
    title: "Bảo trì & nâng cấp",
    description:
      "Hỗ trợ khách hàng liên tục 24/7 Nâng cấp tính năng cải thiện website Chứng chỉ bảo mật SSL tiểu chuẩn an ninh công nghệ toàn cầu.",
  },
  {
    icon: Help,
    title: "Chăm sóc Website - Fanpage",
    description:
      "Việc lựa chọn dịch vụ chăm sóc website phù hợp sẽ giúp doanh nghiệp tiết kiệm thời gian, tăng cường bảo mật và nâng cao hiệu quả kinh doanh.",
  },
  {
    icon: Map,
    title: "Googgle Maps",
    description:
      "Tôi cung cấp giải pháp xây dựng Google Maps chuyên nghiệp từ A đến Z, bao gồm tạo mới, xác minh và quảng bá, giúp doanh nghiệp tiếp cận nhiều khách hàng hơn.",
  },
  {
    icon: Pen,
    title: "Thiết kế đồ họa",
    description:
      "Bạn mong muốn banner, poster, logo, ... thiết kế đa dạng phong cách, bắt mắt, ấn tượng và hoàn hảo nhất nhằm gia tăng tính cạnh tranh cho sản phẩm của bạn!",
  },
];

export default function Services() {
  return (
    <Container>
      <section className="container py-20">
        <div className="mb-12 space-y-2">
          <h2 className="text-center text-secondary text-3xl font-bold">
            <span className="text-primary">Dịch vụ</span> của tôi
          </h2>

          <p className="text-secondary text-center">
            Tôi mong muốn đồng hành cùng bạn và doanh nghiệp của bạn, xây dựng
            một môi trường kinh doanh lý tưởng ngay hôm nay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="p-6 bg-muted">
              <Card className="bg-white w-fit p-2 rounded-lg">
                <Image
                  src={service.icon}
                  alt="icon service"
                  width={40}
                  height={40}
                  className="text-primary"
                  priority
                />
              </Card>
              <div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
