

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/3.BHy6IQHk.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/chunks/index.CpO4BYFI.js"];
export const stylesheets = ["app/immutable/assets/3.6zUY_dsb.css"];
export const fonts = [];
