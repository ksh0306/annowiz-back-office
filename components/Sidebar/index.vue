<template>
  <!-- <div :class="{ 'has-logo': showLogo }">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-menu-item index="0">
          <span slot="title">
            <NuxtLink
              to="/table"
              style="
                font-size: 1.5rem;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica,
                  sans-serif;
              "
              >table</NuxtLink
            >
          </span>
        </el-menu-item>
        <el-menu-item index="1">
          <span slot="title">
            <NuxtLink
              to="/form"
              style="
                font-size: 1.5rem;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica,
                  sans-serif;
              "
              >form</NuxtLink
            >
          </span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">
            <NuxtLink
              to="/Project/ProjectList"
              style="
                font-size: 1.5rem;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica,
                  sans-serif;
              "
              >Project</NuxtLink
            >
          </span>
        </el-menu-item>
        <!-- <el-menu-item index="1">
          <span slot="title">
            <NuxtLink
              to="/imageTask"
              style="
                font-size: 1.5rem;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica,
                  sans-serif;
              "
              >imageTask</NuxtLink
            >
          </span>
        </el-menu-item> -->

  <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>multi</span>
          </template>
          <el-menu-item-group>
            <template slot="title">1</template>
            <el-menu-item index="1-1">1</el-menu-item>
            <el-menu-item index="1-2">2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="2">
            <el-menu-item index="1-3">1</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">4</template>
            <el-menu-item index="1-4-1">4</el-menu-item>
          </el-submenu>
        </el-submenu> -->
  <!-- <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">
            <NuxtLink
              to="/member/member"
              style="
                font-size: 1.5rem;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica,
                  sans-serif;
              "
              >member</NuxtLink
            >
          </span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">
            <NuxtLink
              to="/taskLable"
              style="
                font-size: 1.5rem;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica,
                  sans-serif;
              "
              >taskLable</NuxtLink
            >
          </span>
        </el-menu-item> 
      </el-menu>
    </el-scrollbar>
  </div> -->
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group> -->
      <el-menu
        default-active="2"
        class="leftMenu"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-menu-item index="0">
          <i class="el-icon-setting"></i>
          <span slot="title">
            <NuxtLink to="/">Member</NuxtLink>
          </span>
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title">
            <NuxtLink to="/Project/ProjectList">Project</NuxtLink>
          </span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">
            <NuxtLink to="/">Task</NuxtLink>
          </span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">
            <NuxtLink to="/">Job</NuxtLink>
          </span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">
            <NuxtLink to="/">Image</NuxtLink>
          </span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//import Logo from "./Logo";
//import variables from "@/assets/styles/variables.scss";

export default {
  // components: { Logo },
  // computed: {
  //   showLogo() {
  //     // return this.$store.state.settings.sidebarLogo;
  //   },
  //   variables() {
  //     return variables;
  //   },
  //   isCollapse() {
  //     return false;
  //   },
  // },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: relative !important;
  min-width: 240px;
  width: 100% !important;
  height: 100% !important;
  background-color: #20212b !important;
}
.leftMenu:not(.el-menu--collapse) {
  min-width: 240px;
  width: 100%;
}
.leftMenu {
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  background-color: #20212b;
}
.leftMenu li {
  padding: 0 12px !important;
  display: flex;
  align-items: center;
  gap: 0 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  height: 48px;
}
.leftMenu li:focus,
.leftMenu li:hover,
.leftMenu li:active {
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #168fff inset;
}
.leftMenu li.is-active {
  color: #168fff;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #168fff inset;
}
.leftMenu li [class^="el-icon-"] {
  margin-right: 0;
  width: 24px;
  height: 24px;
  color: #fff;
  font-size: 24px;
}
.leftMenu li.is-active [class^="el-icon-"] {
  color: #168fff;
}
</style>
