import CTAContract from "./common/CTAContract";
import Container from "./Container";

export default function About() {
  return (
    <div className="bg-muted">
      <Container>
        <section className="container py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://png.pngtree.com/png-vector/20250110/ourmid/pngtree-amazon-keyword-research-png-image_14435773.png"
            alt="About me"
            className="w-full max-w-md mx-auto"
          />

          <div>
            <h2 className="mt-4 text-secondary text-3xl font-bold">
              Vì sao bạn nên gọi cho <span className="text-primary">tôi?</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
              Tôi không chỉ cung cấp dịch vụ thiết kế website, xây dựng nền tảng
              thành công cho doanh nghiệp của bạn. Tôi sinh ra để đồng hành cùng
              bạn xây dựng và hoạch định chiến lược phát triển thương hiệu toàn
              diện trên thị trường Online với những dịch vụ vượt trội: Thiết kế
              website, SEO, Sáng tạo nội dung website & Fanpage, Google Ads,
              Facebook Ads…  
            </p>

            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <strong>Email:</strong> vietducle.nasani@gmail.com
              </li>
              <li>
                <strong>Số điện thoại:</strong> +84 386 631 531
              </li>
            </ul>

            <div className="mt-8">
              <CTAContract message="Liên hệ" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
