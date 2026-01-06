import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface Props {
  className?: string;
  spanDesign?: string;
}

export default function Logo({ className, spanDesign }: Props) {
  return (
    <Link href={"/"} className="inline-flex">
      <>
        <Image
          src="/logo.png"
          width={30}
          height={30}
          alt="logo"
          priority
          className="shrink-0 mr-1"
        />
        <h2
          className={cn(
            "text-2xl text-secondary font-black tracking-wider hover:text-primary hoverEffect group font-sans",
            className
          )}
        >
          VietDuc
          <span
            className={cn(
              "text-primary group-hover:text-secondary hoverEffect",
              spanDesign
            )}
          >
            {" "}
            Website
          </span>
        </h2>
      </>
    </Link>
  );
}
