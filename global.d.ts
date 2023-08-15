declare interface NavItem {
    text:string
    link:string
    icon?:string
    desc?:string
}
declare interface ModuleItem {
    label:string
    title:string
    description:string
    keywords:string
    icon:string
    path:string
    index:number
    nav:NavItem[]
}