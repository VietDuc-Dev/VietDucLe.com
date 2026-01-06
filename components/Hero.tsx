import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-muted">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center py-20 gap-10">
        <div>
          <span className="text-sm uppercase tracking-widest text-primary">
            Hello
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Hi, I am Clyde <br /> This is my favorite work.
          </h1>
          <div className="mt-6 flex gap-4">
            <Button>Hire Me</Button>
            <Button variant="outline">View Portfolio</Button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
