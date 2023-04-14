declare namespace BM {
	interface MenuItem {
		text: string
		link: string
		icon?: string
		desc?: string
	}
	interface JsonList {
		title: string
		sort: number
		nav: MenuItem[]
	}
	interface LogoProps {
		setSideVisible: React.Dispatch<React.SetStateAction<boolean>>
	}
	interface MenusProps {
		setItemData: React.Dispatch<React.SetStateAction<MenuItem[]>>
		sideVisible: boolean
		setSideVisible: React.Dispatch<React.SetStateAction<boolean>>
	}
}
