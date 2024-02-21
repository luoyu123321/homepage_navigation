import Image from "next/image";

export default function({type}){
    return <Image width={80} height={80} src={type === 'logo' ? require('@/public/BM.svg').default : type==='folder' ? require('@/public/folder.svg').default : require('@/public/img-loading.svg').default} />
}