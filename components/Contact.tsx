import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="container py-20">
      <h2 className="text-center text-secondary text-3xl font-bold mb-12">
        Bạn đang cần <span className="text-primary">Website</span> hoặc{" "}
        <span className="text-primary">Marketing</span> hiệu quả?
      </h2>

      <form className="max-w-xl mx-auto space-y-4">
        <Input placeholder="Tên công ty" />
        <Input placeholder="Số điện thoại" />
        <Textarea placeholder="Nội dung tư vấn" />
        <p>Thông tin được bảo mật - Tư vấn hoàn toàn miễn phí</p>
        <Button className="w-full">Tư vấn miễn phí ngay</Button>
      </form>
    </section>
  );
}
