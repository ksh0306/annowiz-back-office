<template>
  <section class="app-wrapper">
    <Header />
    <div class="login-wrapper">
      <Nuxt />
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/login.scss";
</style>
