import { Button } from "@/components/ui/button";
import Container from "./Container";
import CTAContract from "./common/CTAContract";
import TrustSignals from "./common/TrustSignals";

export default function Hero() {
  return (
    <section className="relative">
      <Container>
        <div className="container grid grid-cols-1 lg:grid-cols-3 items-center py-20 gap-10">
          <div className="col-span-2 space-y-2">
            <h1 className="mt-4 text-secondary text-4xl md:text-5xl font-bold leading-tight">
              Giải pháp <span className="text-primary">Marketing Online</span>
              <br /> Toàn diện cho{" "}
              <span className="text-primary">doanh nghiệp</span>
            </h1>
            <p className="font-medium">
              Xây dựng Website giúp tăng khách hàng - tối ưu chi phí
              <br />
              • Tăng chuyển đổi
              <br />
              • Tối ưu chi phí quảng cáo
              <br />• Website chuẩn SEO - bảo mật
            </p>
            <span className="font-medium text-primary">
              Google Ads • Facebook Ads • TikTok Ads
            </span>
            <div className="mt-6 flex gap-4">
              <CTAContract message="Liên hệ ngay" />
              <Button variant="outline">Xem dự án</Button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://png.pngtree.com/png-vector/20250110/ourmid/pngtree-amazon-keyword-research-png-image_14435943.png"
              // src="https://png.pngtree.com/png-vector/20250110/ourmid/pngtree-amazon-keyword-research-png-image_14435773.png"
              alt="Hero"
              className="w-full max-w-md object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
