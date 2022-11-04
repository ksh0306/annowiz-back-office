<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group> -->
      <el-menu
        default-active="0"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title"> Member </span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <NuxtLink to="/sample">- 회원 조회</NuxtLink>
            </el-menu-item>
            <el-menu-item index="1-2">
              <NuxtLink to="/Project/ProjectList">-회원 등록</NuxtLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title"> Project </span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <NuxtLink to="/Project/ProjectList">-프로젝트 조회</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2-2">
              <NuxtLink to="/sample">-프로젝트 등록</NuxtLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title"> Task </span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <NuxtLink to="/Project/ProjectList">-작업 조회</NuxtLink>
            </el-menu-item>
            <el-menu-item index="3-2">
              <NuxtLink to="/sample">-작업 등록</NuxtLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="4">
          <i class="el-icon-document"></i>
          <span slot="title">
            <NuxtLink to="/">Job</NuxtLink>
          </span>
        </el-menu-item>
        <el-menu-item index="5">
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
import variables from "@/assets/styles/variables.scss";

export default {
  // components: { Logo },
  computed: {
    showLogo() {
      // return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return false;
    },
  },
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
