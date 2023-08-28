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
	interface MenusProps {
		setItemData: React.Dispatch<React.SetStateAction<MenuItem[]>>
	}
	interface NavItem {
		label: string
		icon: string
	}
	interface SettingsItem {
		isDark: boolean
		themeType: 'default' | 'clean' | 'floor'
	}
	interface FullData extends NavItem {
		children: MenuItem[]
	}
}
