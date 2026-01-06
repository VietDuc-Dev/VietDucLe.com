import { Card } from "@/components/ui/card";

const services = [
  "Web Design",
  "Web Development",
  "Branding",
  "UI/UX Design",
  "SEO",
  "App Design",
];

export default function Services() {
  return (
    <section className="container py-20">
      <h2 className="text-center text-3xl font-bold mb-12">
        We do awesome services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service} className="p-6 text-center">
            <h3 className="font-semibold">{service}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Professional service tailored for your business.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
