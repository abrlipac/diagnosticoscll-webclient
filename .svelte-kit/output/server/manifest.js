export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","img/bot.svg","img/facebook_48px.png","img/instagram_48px.png","img/logo.png","img/logo1.png","img/send_48px.png","img/user.png","img/youtube_48px.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-65086cb1.js","imports":["_app/immutable/start-65086cb1.js","_app/immutable/chunks/index-a15a9088.js","_app/immutable/chunks/singletons-b541a95c.js","_app/immutable/chunks/index-0c606873.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "signup",
				pattern: /^\/signup\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "diagnosticos/nuevo",
				pattern: /^\/diagnosticos\/nuevo\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "diagnosticos/resultados",
				pattern: /^\/diagnosticos\/resultados\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
