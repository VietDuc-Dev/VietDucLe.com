"use client";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex items-center justify-center gap-7 text-sm capitalize font-semibold text-foreground">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-primary hoverEffect relative group ${
            pathname === item?.href && "text-primary"
          }`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 hoverEffect group-hover:left-0.5 ${
              pathname === item?.href && "w-1/2"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 hoverEffect group-hover:right-0.5 ${
              pathname === item?.href && "w-1/2"
            }`}
          />
        </Link>
      ))}
    </div>
  );
}
