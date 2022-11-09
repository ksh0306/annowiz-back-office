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
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: [
      "@/assets/variables/_colors.scss",
      "@/assets/variables/_variables.scss",
      "@/assets/variables/_mixins.scss",
    ],
  },

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
  axios: {
    retry: {
      // 최대 재전송 횟수 4회
      retries: 4,
      // 재전송 간 타임아웃을 리셋하기
      shouldResetTimeout: true,
      // 재전송 횟수 * 0.1초만큼 재전송 시작 시간을 지연시키기
      retryDelay: (retry) => {
        return retry * 100;
      },
      // 서버 혼잡이 일어났을 경우에만 재전송하기
      retryCondition: (error) => err.response.status === 429,
    },
    // 로딩바를 사용하도록 설정
    progress: true,
    // baseURL: process.env.API_URL, // env 변수 값을 가져와서 사용한다.
  },
  router: {
    middleware: "auth",
  },
  server: {
    port: 4000,
  },
};
