import { Card } from "@/components/ui/card";
import Container from "./Container";

const blogs = [
  {
    image:
      "https://dps.media/wp-content/uploads/mcp/2026/01/fees_vs_website_cost_1767975719203.jpg",
    title:
      "Phí sàn Shopee, TikTok tăng cao: Đã đến lúc nhà bán hàng chuyển khách về “ngôi nhà riêng” website?",
    description:
      "Trong bối cảnh kinh doanh online năm 2024-2025, câu chuyện “bão giá” phí sàn đang trở thành nỗi ám ảnh của không ít nhà bán hàng (Seller) tại Việt Nam. Khi biên lợi nhuận ngày càng mỏng, việc phụ thuộc hoàn toàn vào các “ông lớn” như Shopee hay TikTok Shop liệu có còn là nước đi an toàn?",
  },
  {
    image:
      "https://dps.media/wp-content/uploads/2026/01/photo-1655199798186-23a85b12c4e4.jpg",
    title:
      "7 sai lầm “đốt tiền” khi chạy quảng cáo Facebook Ads tại VN mà chuyên gia ít chia sẻ",
    description:
      "Facebook Ads tại Việt Nam thu hút hơn 70 triệu người dùng hàng tháng. Tuy nhiên, theo báo cáo Digital 2024 Vietnam của DataReportal, chi phí quảng cáo trung bình tăng 25% so với 2023 do cạnh tranh khốc liệt. Nhiều SMEs “đốt tiền” mà không có kết quả. Bài viết phân tích 7 sai lầm thực tế từ kinh nghiệm agency phục vụ 5.400 khách hàng từ 2017. Bạn sẽ học được framework kiểm tra chiến dịch và checklist tối ưu cụ thể.",
  },
  {
    image:
      "https://dps.media/wp-content/uploads/2025/12/photo-1563558603156-1e0f5d0592a2.jpg",
    title: "Top 7 Dịch Vụ SEO Google Maps Giúp Doanh Nghiệp Lên Top",
    description:
      "SEO Google Maps giúp doanh nghiệp địa phương xuất hiện nổi bật trên bản đồ tìm kiếm. Khi người dùng tìm ‘quán cà phê gần đây’, kết quả Maps thường chiếm ưu thế. Điều này đặc biệt quan trọng với SMEs tại Việt Nam, nơi 80% tìm kiếm địa phương diễn ra trên mobile.",
  },
];

export default function Blog() {
  return (
    <section className="bg-muted py-20">
      <Container>
        <div className="container">
          <h2 className="text-center text-3xl text-primary font-bold mb-12">
            Bài viết
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((item) => (
              <Card key={item.title} className="overflow-hidden">
                <img src={item.image} alt="Blog" className="h-70" />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 truncate">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
