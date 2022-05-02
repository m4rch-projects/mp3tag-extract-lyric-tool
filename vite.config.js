import { defineConfig } from "vite"
import { builtinModules } from "node:module"

export default defineConfig({
	mode: process.env.MODE,
	build: {
		sourcemap: false,
		target: "esnext",
		outDir: "dist",
		minify: true,
		lib: {
			entry: "src/index.js",
			formats: [ "cjs" ],
		},
		rollupOptions: {
			external: [
				...builtinModules,
				"node:fs/promises"
			],
			output: {
				entryFileNames: "[name].js",
				chunkFileNames: "[name].[hash].js"
			}
		},
		emptyOutDir: true
	}
})
