

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.CelqtrnX.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/chunks/index.CpO4BYFI.js"];
export const stylesheets = ["app/immutable/assets/2.C76XKni5.css"];
export const fonts = [];
