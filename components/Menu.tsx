"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Menu: React.FC<{ item: ModuleItem }> = function ({ item }) {
  const pathname = usePathname();
  return (
    <Link
      className={[
        "mb-[0.5em] block relative h-60 cursor-pointer pl-20 rounded-[60px_0_0_60px]",
        pathname === item.path ? "bg-1f" : null,
      ].join(" ")}
      href={item.path}
    >
      <span className="relative z-10 flex items-center h-full">
        <Image
          src={item.icon}
          alt={""}
          priority={false}
          width={32}
          height={32}
          className="mr-[1em] object-cover"
        />
        {item.label}
      </span>
    </Link>
  );
};

export default Menu