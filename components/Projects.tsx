import Container from "./Container";
import { Card } from "./ui/card";

const project = [
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

export default function Projects() {
  return (
    <section className="bg-muted py-20">
      <Container>
        <div className="container">
          <div className="mb-12 space-y-2">
            <h2 className="text-center text-secondary text-3xl font-bold">
              <span className="text-primary">Khách hàng</span> tiêu biểu
            </h2>

            <p className="text-secondary text-center">
              Một số khách hàng tiêu biểu đã và đang tin dùng dịch vụ website
              suốt nhiều năm qua.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {project.map((item) => (
              <Card key={item.name} className="p-6">
                <div className="flex justify-center">
                  <img
                    src={item.logo}
                    alt="Project"
                    className="h-30 w-30 rounded-lg object-cover"
                  />
                </div>
                <p className="text-center font-semibold">{item.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
