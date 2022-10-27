<template>
  <div :class="{ 'has-logo': showLogo }">
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
        </el-menu-item> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import Logo from "./Logo";
import variables from "@/assets/styles/variables.scss";

export default {
  components: { Logo },
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
};
</script>
