import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    button: "src/button.tsx",
    input: "src/input.tsx",
    select: "src/select.tsx",
    card: "src/card.tsx",
    modal: "src/modal.tsx",
    badge: "src/badge.tsx",
    alert: "src/alert.tsx",
    tabs: "src/tabs.tsx",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  target: "es2019",
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    "lucide-react",
    "@radix-ui/react-select",
    "@radix-ui/react-dialog",
    "@radix-ui/react-tabs"
  ]
})
