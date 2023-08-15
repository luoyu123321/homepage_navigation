"use client";
import Link from "next/link";
import React from "react";
import { Image } from "antd";

const LinkItem: React.FC<{ item: NavItem }> = ({ item }) => {
  return (
    <Link
      href={item.link}
      target="_blank"
      className="item hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] dark:hover:drop-shadow-[0_10px_10px_rgba(15,23,42,0.8)]"
      key={item.link}
    >
      <Image
        src={item.icon}
        width={"80%"}
        height={40}
        className="rounded-10 object-scale-down object-center"
        preview={false}
        fallback={"/BM.svg"}
        placeholder={
          <Image
            preview={false}
            src={"/img-loading.svg"}
            height={40}
            width={"100%"}
            className="object-center"
          />
        }
      />
      <h1 className="text-333 py-[1em] text-20 dark:text-white">{item.text}</h1>
      <p
        className="text-12 text-999 px-[1em] leading-[1.2em] dark:text-darkTextWhite"
        style={{ height: item.desc ? "auto" : "1em" }}
      >
        {item.desc}
      </p>
    </Link>
  );
};

export default LinkItem;
