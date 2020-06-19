import App from './App.svelte';
import proj_settings from './env.js'

const app = new App({
	target: document.getElementById(proj_settings.bound_id),
});

export default app;