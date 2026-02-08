import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  description: string;
}

export default function CardService({ icon, title, description }: Props) {
  return (
    <div>
      <Card className="group h-full p-6 bg-muted border border-transparent transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
            <Image src={icon} alt={title} width={28} height={28} />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </Card>
    </div>
  );
}
