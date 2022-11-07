<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <Nuxt />
    </transition>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  /* min-height: calc(100vh - 50px); */
  position: relative;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  /* background: #222730; */
  .app-container {
    //max-width: 1200px;
    margin: 0 auto;
  }
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
