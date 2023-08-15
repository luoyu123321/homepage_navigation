import { modules } from "@/json";
import LinkItem from "@/components/LinkItem";

type Props = {
  params: { type: string };
};

function getData(type: string) {
  return Promise.resolve(modules[type]);
}

export default async function ({ params }: Props) {
  const navData = await getData(params.type);
  return (
    <main className="rounded-[20px_20px_0_0] grid gap-20 grid-rows-auto p-20 auto-rows-[176px] grid-cols-[repeat(auto-fill,minmax(160px,1fr))] overflow-y-auto beautyScroll overflow-x-hidden dark:bg-darkWhite">
      {navData?.nav?.map((item: NavItem) => (
        <LinkItem item={item} key={item.link}/>
      ))}
    </main>
  );
}

export function generateMetadata({ params }: Props) {
  const type = params.type;
  const pageInfo = modules[type];

  return pageInfo
    ? {
        title: pageInfo.title,
        description: pageInfo.description,
        keywords: pageInfo.keywords,
      }
    : {
        title: "BM快捷导航",
        description: "前端开发常用的导航聚合书签",
        keywords: "BM快捷导航，前端快捷导航，导航，前端导航，技术导航",
      };
}
