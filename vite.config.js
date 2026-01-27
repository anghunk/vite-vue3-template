import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// 加载环境变量
	const env = loadEnv(mode, process.cwd());

	return {
		// 基础路径
		base: './',

		// 插件配置
		plugins: [
			// Vue 插件
			vue(),
			// 自动导入组件
			Components({
				resolvers: [
					// Element Plus 按需导入
					ElementPlusResolver(),
				],
				// 自动导入的组件目录
				dirs: ['src/components'],
				// 生成类型声明文件
				dts: false,
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
			// 监听所有网络接口
			host: '0.0.0.0',
			// 端口号
			port: 5173,
			// 自动打开浏览器
			open: false,
			// 启用 CORS
			cors: true,
			// 代理配置
			proxy: {
				'/api': {
					target: env.VITE_APP_BASE_API || 'http://localhost:3000',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			},
		},

		// 构建配置
		build: {
			// 输出目录
			outDir: 'dist',
			// 静态资源目录
			assetsDir: 'assets',
			// 小于此阈值的导入或引用资源将内联为 base64
			assetsInlineLimit: 4096,
			// 启用/禁用 CSS 代码拆分
			cssCodeSplit: true,
			// 生成 source map
			sourcemap: false,
			// 块大小警告限制（kb）
			chunkSizeWarningLimit: 2000,
			// Rollup 配置
			rollupOptions: {
				output: {
					// 分包策略
					manualChunks: {
						// Vue 核心库
						vue: ['vue', 'vue-router', 'vuex'],
						// Element Plus
						'element-plus': ['element-plus'],
					},
					// 输出文件命名
					chunkFileNames: 'js/[name]-[hash].js',
					entryFileNames: 'js/[name]-[hash].js',
					assetFileNames: '[ext]/[name]-[hash].[ext]',
				},
			},
			// 压缩配置（使用 esbuild，速度更快）
			minify: 'esbuild',
			esbuildOptions: {
				// 生产环境移除 console 和 debugger
				drop: ['console', 'debugger'],
			},
		},

		// CSS 配置
		css: {
			// CSS 预处理器配置
			preprocessorOptions: {
				// Less 配置
				less: {
					javascriptEnabled: true,
					additionalData: '@import "@/assets/styles/base/variables.css";',
				},
				// SCSS 配置
				scss: {
					api: 'modern-compiler',
					additionalData: '@import "@/assets/styles/base/variables.css";',
				},
			},
		},

		// 依赖优化配置
		optimizeDeps: {
			include: ['vue', 'vue-router', 'vuex', 'axios', 'element-plus/es'],
		},

		// 预览服务器配置
		preview: {
			host: '0.0.0.0',
			port: 4173,
			open: false,
		},
	};
});
