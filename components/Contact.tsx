import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="container py-20">
      <h2 className="text-center text-3xl font-bold mb-12">Have a Project?</h2>

      <form className="max-w-xl mx-auto space-y-4">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Textarea placeholder="Message" />
        <Button className="w-full">Send Message</Button>
      </form>
    </section>
  );
}
