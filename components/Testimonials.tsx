import { Card } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="container py-20">
      <h2 className="text-center text-3xl font-bold mb-12">
        What clients say about?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="p-6">
            <p className="text-sm text-muted-foreground">
              &quot;Amazing work, very professional and fast delivery.&quot;
            </p>
            <p className="mt-4 font-semibold">John Doe</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
