export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set([".nojekyll","3d.png","3dclose.png","Background.jpg","Background.png","bell-collar.png","book.png","character.png","creature-close.png","creature-far.png","creature.png","creatures.png","dance.png","dar.jpg","dar.png","darkenedBackground.jpg","dudd.jpg","dudd.png","Eyes.png","favicon.png","fox.png","foxxig.png","game.png","Greenhouse.mp4","half life.png","horse.png","ineta.png","killa.png","klumpe.png","leaves.mp4","Logo.png","me.jpg","moth.png","paintingg.jpg","photo-album.png","photo-combo.png","pink.png","plant.png","rain.png","rainn.png","Witch break.png","wolf.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".mp4":"video/mp4"},
	_: {
		client: {"start":"app/immutable/entry/start.jFxRn6Ze.js","app":"app/immutable/entry/app.CXdpdoSb.js","imports":["app/immutable/entry/start.jFxRn6Ze.js","app/immutable/chunks/entry.DNyhS7lf.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/entry/app.CXdpdoSb.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/chunks/index.CpO4BYFI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
