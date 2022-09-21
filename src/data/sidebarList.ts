interface Item {
	path: string;
	name: string;
	icon: string;
	popup: boolean;
	badge: boolean;
}

export const sidebarList: Item[] = [
	{
		path: '/',
		name: 'Home',
		icon: 'uil uil-home',
		popup: false,
		badge: false,
	},
	{
		path: '/explore',
		name: 'Explore',
		icon: 'uil uil-compass',
		popup: false,
		badge: false,
	},
	{
		path: '/notifications',
		name: 'Notifications',
		icon: 'uil uil-bell',
		popup: true,
		badge: true,
	},
	{
		path: '/messages',
		name: 'Messages',
		icon: 'uil uil-envelope-alt',
		popup: false,
		badge: true,
	},
	{
		path: '/bookmarks',
		name: 'Bookmarks',
		icon: 'uil uil-bookmark',
		popup: false,
		badge: false,
	},
	{
		path: '/analytics',
		name: 'Analytics',
		icon: 'uil uil-chart-line',
		popup: false,
		badge: false,
	},
	{
		path: '/theme',
		name: 'Theme',
		icon: 'uil uil-pallete',
		popup: false,
		badge: false,
	},
	{
		path: '/settings',
		name: 'Settings',
		icon: 'uil uil-setting',
		popup: false,
		badge: false,
	},
];
