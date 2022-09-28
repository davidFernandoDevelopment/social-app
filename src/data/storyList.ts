interface Story {
	name: string;
	avatar: string;
	image: string;
}

export const stories: Story[] = [
	{
		name: 'Josue Sanchez',
		avatar: require('../images/profile-8.jpg'),
		image: require('../images/story-1.jpg'),
	},
	{
		name: 'Juan Carlos',
		avatar: require('../images/profile-9.jpg'),
		image: require('../images/story-2.jpg'),
	},
	{
		name: 'Diego Falcon',
		avatar: require('../images/profile-10.jpg'),
		image: require('../images/story-3.jpg'),
	},
	{
		name: 'Jobs David',
		avatar: require('../images/profile-11.jpg'),
		image: require('../images/story-4.jpg'),
	},
	// {
	// 	name: 'Renzo Rojas',
	// 	avatar: require('../images/profile-12.jpg'),
	// 	image: require('../images/story-5.jpg'),
	// },
	// {
	// 	name: 'Mario Dueñas',
	// 	avatar: require('../images/profile-13.jpg'),
	// 	image: require('../images/story-6.jpg'),
	// },
];
