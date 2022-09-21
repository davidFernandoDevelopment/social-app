interface Feed {
	avatar: string;
	name: string;
	place: string;
	time: string;
	photo: string;
	liked: string[];
}
export const feeds: Feed[] = [
	{
		avatar: require('../images/profile-8.jpg'),
		name: 'Josue Sanchez',
		place: 'Lima',
		time: 'hace 2 días',
		photo: require('../images/feed-1.jpg'),
		liked: [
			require('../images/profile-10.jpg'),
			require('../images/profile-11.jpg'),
			require('../images/profile-12.jpg'),
		],
	},
	{
		avatar: require('../images/profile-7.jpg'),
		name: 'Juan Carlos',
		place: 'Ica',
		time: 'hace 2 min',
		photo: require('../images/feed-2.jpg'),
		liked: [
			require('../images/profile-10.jpg'),
			require('../images/profile-11.jpg'),
			require('../images/profile-12.jpg'),
		],
	},
	{
		avatar: require('../images/profile-7.jpg'),
		name: 'Juan Carlos',
		place: 'Ica',
		time: 'hace 2 min',
		photo: require('../images/feed-3.jpg'),
		liked: [
			require('../images/profile-10.jpg'),
			require('../images/profile-11.jpg'),
			require('../images/profile-12.jpg'),
		],
	},
	{
		avatar: require('../images/profile-6.jpg'),
		name: 'Diego Falcon',
		place: 'Chosica',
		time: 'hace 5 horas',
		photo: require('../images/feed-4.jpg'),
		liked: [
			require('../images/profile-10.jpg'),
			require('../images/profile-11.jpg'),
			require('../images/profile-12.jpg'),
		],
	},
	{
		avatar: require('../images/profile-7.jpg'),
		name: 'Jobs David',
		place: 'El agustino',
		time: 'hace 5 min',
		photo: require('../images/feed-5.jpg'),
		liked: [
			require('../images/profile-10.jpg'),
			require('../images/profile-11.jpg'),
			require('../images/profile-12.jpg'),
		],
	},
	{
		avatar: require('../images/profile-8.jpg'),
		name: 'Renzo Rojas',
		place: 'Pueblo libre',
		time: 'hace 15 min',
		photo: require('../images/feed-6.jpg'),
		liked: [
			require('../images/profile-10.jpg'),
			require('../images/profile-11.jpg'),
			require('../images/profile-12.jpg'),
		],
	},
	{
		avatar: require('../images/profile-9.jpg'),
		name: 'Mario Dueñas',
		place: 'Villa el salvador',
		time: 'hace 12 min',
		photo: require('../images/feed-7.jpg'),
		liked: [
			require('../images/profile-10.jpg'),
			require('../images/profile-11.jpg'),
			require('../images/profile-12.jpg'),
		],
	},
];
