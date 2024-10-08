

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/5.DLjUfaAn.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/chunks/index.CpO4BYFI.js"];
export const stylesheets = ["app/immutable/assets/5.CjBO73hM.css"];
export const fonts = [];
