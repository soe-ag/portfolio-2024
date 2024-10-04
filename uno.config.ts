import { defineConfig } from "unocss";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetIcons(),
    // ...other presets
  ],
});
