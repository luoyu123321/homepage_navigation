import Image from "next/image";

export default function () {
  return (
    <div className="h-80 flex items-center rounded-[0_20px_0_0] justify-center lg:justify-start sticky top-0 pb-10">
      <Image src="/BM.svg" alt="" width={30} height={30} className="mr-10" />
      <span className="text-26 text-333">
        <b className="text-main font-bold align-bottom DIN align-[2px]">BM</b>
        <span className="font-thin dark:text-white align-[2px]">快捷导航</span>
      </span>
    </div>
  );
}
