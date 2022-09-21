interface Message {
	avatar: string;
	name: string;
	message: string;
	viewed: boolean;
	status?: 'none' | 'success' | 'danger';
}

export const messages: Message[] = [
	{
		name: 'Josue Sanchez',
		message: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-2.jpg'),
		viewed: false,
	},
	{
		name: 'Juan Carlos',
		message: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-3.jpg'),
		viewed: true,
		status: 'success',
	},
	{
		name: 'Diego Falcon',
		message: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-4.jpg'),
		viewed: false,
		status: 'success',
	},
	{
		name: 'Jobs David',
		message: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-5.jpg'),
		viewed: true,
	},
	{
		name: 'Renzo Rojas',
		message: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-6.jpg'),
		viewed: false,
	},
	{
		name: 'Mario Dueñas',
		message: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-7.jpg'),
		viewed: true,
	},
];
