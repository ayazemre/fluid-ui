import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "fluid-ui-react",
            fileName: "index",
        },
        rollupOptions: {
            external: ["react"],
        },
    },
});