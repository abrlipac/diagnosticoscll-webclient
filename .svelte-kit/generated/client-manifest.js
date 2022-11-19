export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')];

export const server_loads = [];

export const dictionary = {
	"/": [3],
	"/cuenta/logout": [4],
	"/diagnosticos/editar": [5,[2]],
	"/diagnosticos/nuevo": [6,[2]],
	"/diagnosticos/paciente": [7,[2]],
	"/diagnosticos/paciente/editar": [8,[2]],
	"/diagnosticos/resultados": [9,[2]],
	"/diagnosticos/ver": [10,[2]],
	"/login": [11],
	"/signup": [12]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};