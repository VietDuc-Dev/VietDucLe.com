import Container from "./Container";
import Logo from "./common/Logo";
import HeaderMenu from "./common/HeaderMenu";
import CTAContract from "./common/CTAContract";
// import SearchBar from "./SearchBar";
// import MobileMenu from "./MobileMenu";

// import { getMyOrders } from "@/sanity/queries";

export default async function Header() {
  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto flex items-center gap-2.5 justify-start md:gap-0">
          {/* <MobileMenu /> */}
          <Logo />
        </div>
        <HeaderMenu />
        <CTAContract message="Tư vấn miễn phí" />
      </Container>
    </header>
  );
}
