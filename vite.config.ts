import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from "@tailwindcss/vite";
import solid from "vite-plugin-solid";

export default defineConfig({
    plugins: [
        tailwindcss(),
        solidPlugin(),
        solid()
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
    resolve: {
        conditions: ["development", "browser"],
    },
});
