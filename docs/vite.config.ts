import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    // 添加JSX插件
    vueJsx(),

    Unocss(),
  ],
});