import { resolve } from "path";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "annowiz-back-office",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css",
      },
    ],
  },
  // ,element-theme-dark
  // Global CSS: https://go.nuxtjs.dev/config-css
  // 공통 CSS
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "@/assets/styles/index.scss",
    "@/assets/styles/common.scss",
    "@/assets/styles/normalize.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui", "@/plugins/vue-global.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["@nuxtjs/dotenv", { filename: ".env" }],
    "nuxt-vuex-localstorage",
    "cookie-universal-nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
      const svgRule = config.module.rules.find((rule) =>
        rule.test.test(".svg")
      );
      svgRule.exclude = [resolve(__dirname, "assets/icons/svg")];
      config.module.rules.push({
        test: /\.svg$/,
        include: [resolve(__dirname, "assets/icons/svg")],
        use: [
          { loader: "svg-sprite-loader", options: { symbolId: "icon-[name]" } },
        ],
      });
    },
    postcss: null,
  },

  router: {
    middleware: "auth",
  },
  server: {
    port: 4000,
  },
};
