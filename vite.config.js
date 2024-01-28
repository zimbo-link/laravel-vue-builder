import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/Assets/less.min.js', 'resources/js/Assets/sass.sync.min.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue(),
    ],
});
