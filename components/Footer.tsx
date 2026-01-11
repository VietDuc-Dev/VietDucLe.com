import Container from "./Container";
import FooterTop from "./common/FooterTop";
import Logo from "./common/Logo";
import SocialMedia from "./common/SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Giải pháp Marketing Online Toàn diện cho doanh nghiệp. <br />
              Xây dựng Website giúp tăng khách hàng - tối ưu chi phí • Tăng
              chuyển đổi • Tối ưu chi phí quảng cáo • Website chuẩn SEO - bảo
              mật
              <br /> Google Ads • Facebook Ads • TikTok Ads
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle>Liên kết nhanh</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Dịch vụ</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Google Map</SubTitle>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.5087586500254!2d106.6286882060663!3d10.852706524206326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295349d0d5a3%3A0xced384ab00155ada!2sT%C3%B2a%20nh%C3%A0%20Saigon%20ICT%20-%20Saigontel!5e0!3m2!1svi!2s!4v1768136470510!5m2!1svi!2s"
                width="300"
                height="200"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
