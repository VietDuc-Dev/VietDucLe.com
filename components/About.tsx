export default function About() {
  return (
    <section className="container py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <img
        src="/about.png"
        alt="About me"
        className="w-full max-w-md mx-auto"
      />

      <div>
        <span className="text-primary uppercase text-sm tracking-widest">
          About Me
        </span>
        <h2 className="mt-4 text-3xl font-bold">Creative UI/UX Designer</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          I am a creative designer with passion for building beautiful and
          functional user interfaces.
        </p>

        <ul className="mt-6 space-y-2 text-sm">
          <li>
            <strong>Name:</strong> Clyde Walker
          </li>
          <li>
            <strong>Email:</strong> hello@email.com
          </li>
          <li>
            <strong>Phone:</strong> +123 456 789
          </li>
        </ul>
      </div>
    </section>
  );
}
