interface Request {
	avatar: string;
	name: string;
	desc: string;
}

export const requests: Request[] = [
	{
		name: 'Josue Sanchez',
		desc: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-2.jpg'),
	},
	{
		name: 'Juan Carlos',
		desc: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-3.jpg'),
	},
	{
		name: 'Diego Falcon',
		desc: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-4.jpg'),
	},
	{
		name: 'Jobs David',
		desc: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-5.jpg'),
	},
	{
		name: 'Renzo Rojas',
		desc: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-6.jpg'),
	},
	{
		name: 'Mario Dueñas',
		desc: 'te envio una solicitud de amistad',
		avatar: require('../images/profile-7.jpg'),
	},
];
