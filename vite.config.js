import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		Components({
			resolvers: [],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		host: true,
		// open: false,
	},
	css: {
		preprocessorOptions: {
			less: {},
		},
	},
});
