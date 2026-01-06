import { Card } from "@/components/ui/card";

export default function Blog() {
  return (
    <section className="bg-muted py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-12">Our Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <img src="/blog.jpg" alt="Blog" />
              <div className="p-4">
                <h3 className="font-semibold">Why UX is important?</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  UX impacts conversion and retention.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
