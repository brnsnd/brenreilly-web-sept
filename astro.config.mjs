// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://brenreilly.com',
	server: {
		host: true,
		port: 4321,
	},
	build: {
		assets: 'assets',
	},
	output: 'static',
	vite: {
		build: {
			rollupOptions: {
				output: {
					manualChunks: undefined,
				},
			},
		},
	},
});
