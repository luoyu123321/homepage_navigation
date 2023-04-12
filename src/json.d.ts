declare interface MenuItem {
	text: string
	link: string
	icon?: string
	desc?: string
}

declare interface JsonList {
	title: string
	sort: number
	nav: MenuItem[]
}
