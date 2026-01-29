import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
		base: './',
		plugins: [
			vue(),
			// 自动导入组件
			Components({
				resolvers: [
					ElementPlusResolver(), // Element Plus 按需导入
				],
				dirs: ['src/components'], // 自动导入的组件目录
				dts: false, // 生成类型声明文件
			}),
		],

		// 路径别名
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
			// 扩展名
			extensions: ['.js', '.vue', '.json', '.ts'],
		},

		// 开发服务器配置
		server: {
			host: '0.0.0.0',
			port: 9527,
			open: false,
		},

		build: {
			outDir: 'dist', // 输出目录
			assetsDir: 'assets', // 静态资源目录
			assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64
			cssCodeSplit: true, // 启用/禁用 CSS 代码拆分
			sourcemap: false, // 生成 source map
			chunkSizeWarningLimit: 2000, // 块大小警告限制（kb）

			rollupOptions: {
				// Rollup 配置
				output: {
					// 分包策略
					manualChunks: {
						vue: ['vue', 'vue-router', 'vuex'], // Vue 核心库
						'element-plus': ['element-plus'], // Element Plus
					},
					// 输出文件命名
					chunkFileNames: 'js/[name]-[hash].js',
					entryFileNames: 'js/[name]-[hash].js',
					assetFileNames: '[ext]/[name]-[hash].[ext]',
				},
			},
			minify: 'esbuild', // 压缩配置（使用 esbuild，速度更快）
			esbuildOptions: {
				drop: ['console', 'debugger'], // 生产环境移除 console 和 debugger
			},
		},

		// CSS 配置
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler', // or "modern"
				},
			},
		},

		// 依赖优化配置
		optimizeDeps: {
			include: ['vue', 'vue-router', 'vuex', 'axios', 'element-plus/es'],
		},
	};
});
