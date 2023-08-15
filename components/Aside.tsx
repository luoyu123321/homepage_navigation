import Image from "next/image";
import React from "react";
import Logo from "@/components/Logo";
import { modules } from "@/json";
import Menu from "./Menu";

export default function Aside() {
  const keys = Object.keys(modules).sort((prev, next) => {
    return modules[prev].index - modules[next].index;
  });
  return (
    <aside className="bg-white text-666 relative dark:bg-darkWhite lg:rounded-[0_20px_0_0] lg:flex lg:flex-col lg:h-screen lg:pb-10 lg:items-center">
      <Logo />
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full pl-2em beautyScroll py-20">
        <Menu
          item={{
            path: "/",
            icon: "/12.png",
            label: "搜索",
            description: "",
            keywords: "",
            nav: [],
            index: 0,
            title: "",
          }}
        />
        {keys.map((item: string, index: number) => (
          <Menu item={modules[item]} key={index} />
        ))}
      </div>
      <div className="px-10 w-full">
        <a
          className="w-full h-60 mt-10 bg-1f rounded-full items-center px-30 text-666 dark:bg-dark1f dark:text-darkTextWhite hidden lg:flex"
          href="mailto:303278055@qq.com"
        >
          <Image src={"/connect.svg"} alt={""} width={40} height={40} />
          <div className="ml-[0.5em]">
            <span className="text-16">联系作者</span>
            <p className="text-14 mt-5 tracking-wide DIN">303278055@qq.com</p>
          </div>
        </a>
      </div>
    </aside>
  );
}
