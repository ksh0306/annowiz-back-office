<template>
  <section :class="classObj" class="app-wrapper">
    <!-- <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    /> -->
    <Header />
    <!-- <div :class="{ 'fixed-header': fixedHeader }">
      <navbar />
    </div> -->
    <div class="main-container">
      <sidebar class="sidebar-container" />
      <article class="main-section">
        <app-main />
        <Footer />
      </article>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
//import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AppMain from "@/components/AppMain";
import ResizeMixin from "@/components/mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
    //Navbar,
    Sidebar,
    AppMain,
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        // mobile: this.device === "mobile",
      };
    },
  },
  methods: {
    handleClickOutside() {
      // this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  min-height: inherit !important;
  // transition: margin-left 0.28s;
  // margin-left: $sideBarWidth;
  // position: relative;
  margin-left: 0 !important;
  display: flex !important;
  height: calc(100% - 48px) !important;
}
.main-section {
  display: flex;
  flex-direction: column;
  width: calc(100% - 240px);
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
}
// .app-wrapper {
//   @include clearfix;
//   position: relative;
//   height: 100%;
//   width: 100%;
//   &.mobile.openSidebar {
//     position: fixed;
//     top: 0;
//   }
// }
// .drawer-bg {
//   background: #000;
//   opacity: 0.3;
//   width: 100%;
//   top: 0;
//   height: 100%;
//   position: absolute;
//   z-index: 999;
// }

// .fixed-header {
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 9;
//   //width: calc(100% - #{$sideBarWidth});
//   transition: width 0.28s;
// }

// .hideSidebar .fixed-header {
//   width: calc(100% - 54px);
// }

// .mobile .fixed-header {
//   width: 100%;
// }
</style>
