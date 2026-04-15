import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                game: resolve(__dirname, 'game.html'),
                privacy: resolve(__dirname, 'privacy.html'),
                releases: resolve(__dirname, 'releases.html'),
            },
        },
    },
});
