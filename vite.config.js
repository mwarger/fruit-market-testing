import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'src/setupTests.ts',
	},
	server: {
		proxy: {
			'/api/fruit': {
				target: 'https://www.fruityvice.com',
				changeOrigin: true,
			},
		},
	},
});
