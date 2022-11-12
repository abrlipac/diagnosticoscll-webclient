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
	() => import('./nodes/10')];

			export const server_loads = [];

			export const dictionary = {
	"/": [2],
	"/diagnosticos/editar": [3],
	"/diagnosticos/nuevo": [4],
	"/diagnosticos/paciente": [5],
	"/diagnosticos/paciente/editar": [6],
	"/diagnosticos/resultados": [7],
	"/diagnosticos/ver": [8],
	"/login": [9],
	"/signup": [10]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};