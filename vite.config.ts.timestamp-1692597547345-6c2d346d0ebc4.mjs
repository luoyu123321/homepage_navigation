// vite.config.ts
import { defineConfig } from "file:///G:/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/homepage_navigation/node_modules/.pnpm/vite@4.4.9_@types+node@18.15.11/node_modules/vite/dist/node/index.js";
import react from "file:///G:/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/homepage_navigation/node_modules/.pnpm/@vitejs+plugin-react@3.1.0_vite@4.4.9/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///G:/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/homepage_navigation/node_modules/.pnpm/tailwindcss@3.3.1_postcss@8.4.21/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///G:/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/homepage_navigation/node_modules/.pnpm/autoprefixer@10.4.14_postcss@8.4.21/node_modules/autoprefixer/lib/autoprefixer.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "G:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\homepage_navigation";
var pathResolve = (dir) => resolve(__vite_injected_original_dirname, ".", dir);
var vite_config_default = defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": pathResolve("./src/"),
      "~img": pathResolve("./src/assets/img")
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"]
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxcdTY1QjBcdTVFRkFcdTY1ODdcdTRFRjZcdTU5MzlcXFxcaG9tZXBhZ2VfbmF2aWdhdGlvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRzpcXFxcXHU2NUIwXHU1RUZBXHU2NTg3XHU0RUY2XHU1OTM5XFxcXGhvbWVwYWdlX25hdmlnYXRpb25cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0c6LyVFNiU5NiVCMCVFNSVCQiVCQSVFNiU5NiU4NyVFNCVCQiVCNiVFNSVBNCVCOS9ob21lcGFnZV9uYXZpZ2F0aW9uL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnXHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuXHJcbmNvbnN0IHBhdGhSZXNvbHZlID0gZGlyID0+IHJlc29sdmUoX19kaXJuYW1lLCAnLicsIGRpcilcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRiYXNlOicuLycsXHJcblx0cGx1Z2luczogW3JlYWN0KCldLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdGFsaWFzOiB7XHJcblx0XHRcdCdAJzogcGF0aFJlc29sdmUoJy4vc3JjLycpLFxyXG5cdFx0XHQnfmltZyc6IHBhdGhSZXNvbHZlKCcuL3NyYy9hc3NldHMvaW1nJylcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNzczoge1xyXG5cdFx0cG9zdGNzczoge1xyXG5cdFx0XHRwbHVnaW5zOiBbXHJcblx0XHRcdFx0dGFpbHdpbmRjc3MsXHJcblx0XHRcdFx0YXV0b3ByZWZpeGVyKHtcclxuXHRcdFx0XHRcdG92ZXJyaWRlQnJvd3NlcnNsaXN0OiBbJ2xhc3QgMiB2ZXJzaW9ucyddXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLG9CQUFvQjtBQUNqVixPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxrQkFBa0I7QUFDekIsU0FBUyxlQUFlO0FBSnhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU0sY0FBYyxTQUFPLFFBQVEsa0NBQVcsS0FBSyxHQUFHO0FBQ3RELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE1BQUs7QUFBQSxFQUNMLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLLFlBQVksUUFBUTtBQUFBLE1BQ3pCLFFBQVEsWUFBWSxrQkFBa0I7QUFBQSxJQUN2QztBQUFBLEVBQ0Q7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNKLFNBQVM7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNSO0FBQUEsUUFDQSxhQUFhO0FBQUEsVUFDWixzQkFBc0IsQ0FBQyxpQkFBaUI7QUFBQSxRQUN6QyxDQUFDO0FBQUEsTUFDRjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
