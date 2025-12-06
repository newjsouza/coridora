import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "src/app"),
			"@components": path.resolve(__dirname, "src/components"),
			"@features": path.resolve(__dirname, "src/features"),
			"@types": path.resolve(__dirname, "src/types"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@store": path.resolve(__dirname, "src/store"),
		}
	},
	server: {
		port: 5173,
	},
	build: {
		outDir: "dist",
	},
});
