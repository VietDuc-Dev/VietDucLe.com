import { Card } from "@/components/ui/card";

const skills = [
  { name: "CSS", value: 95 },
  { name: "HTML", value: 98 },
  { name: "jQuery", value: 88 },
  { name: "Photoshop", value: 92 },
  { name: "WordPress", value: 83 },
  { name: "SEO", value: 95 },
];

export default function Skills() {
  return (
    <section className="bg-muted py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-12">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6 text-center">
              <p className="font-semibold">{skill.name}</p>
              <p className="mt-2 text-2xl font-bold text-primary">
                {skill.value}%
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
