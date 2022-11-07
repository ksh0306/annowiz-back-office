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
       <el-menu-item index="1">
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
  <div class="leftMenu">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group> -->
      <el-menu
        default-active="0"
        :collapse="isCollapse"
        :background-color="variables.Dark - Gray600"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-submenu index="1">
          <template slot="title">
            <span class="svg-container">
              <svg-icon icon-class="users" />
            </span>
            <span slot="title">Member</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <NuxtLink to="/sample">회원 조회</NuxtLink>
            </el-menu-item>
            <el-menu-item index="1-2">
              <NuxtLink to="/Project/ProjectList">회원 등록</NuxtLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-menu-item index="2">
          <i class="el-icon-location"></i>
          <span slot="title">
            <NuxtLink to="/Project/ProjectList">Project</NuxtLink>
          </span>
        </el-menu-item> -->

        <el-submenu index="2">
          <template slot="title">
            <span class="svg-container">
              <svg-icon icon-class="project" />
            </span>
            <span slot="title">Project</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <NuxtLink to="/Project/ProjectList">프로젝트 조회</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2-2">
              <NuxtLink to="/sample">프로젝트 등록</NuxtLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <span class="svg-container">
              <svg-icon icon-class="task" />
            </span>
            <span slot="title">Task</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <NuxtLink to="/Project/ProjectList">태스크 조회</NuxtLink>
            </el-menu-item>
            <el-menu-item index="3-2">
              <NuxtLink to="/sample">태스크 등록</NuxtLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <span class="svg-container">
              <svg-icon icon-class="job" />
            </span>
            <span slot="title">Job</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">
              <NuxtLink to="/Project/ProjectList">잡 조회</NuxtLink>
            </el-menu-item>
            <el-menu-item index="4-2">
              <NuxtLink to="/sample">잡 등록</NuxtLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <span class="svg-container">
              <svg-icon icon-class="image" />
            </span>
            <span slot="title">
              <NuxtLink to="/">Image</NuxtLink>
            </span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">
              <NuxtLink to="/Project/ProjectList">Upload</NuxtLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//import Logo from "./Logo";
//import variables from "@/assets/styles/variables.scss";
import variables from "@/assets/styles/common.scss";

export default {
  // components: { Logo },
  computed: {
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

<style lang="scss">
.leftMenu {
  position: relative;
  max-width: 240px;
  width: 100%;
  height: 100%;
  background-color: #20212b;

  &:not(.el-menu--collapse) {
    max-width: 240px;
    width: 100%;
  }

  .el-menu {
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    background-color: #20212b;

    .el-submenu,
    .el-menu-item {
      padding: 0;
      color: #fff;
      font-size: 16px;
      font-weight: 500;

      &:focus,
      &:hover,
      &:active {
        background-color: transparent;
      }

      &.is-opened {
        .el-submenu__title,
        .el-submenu__icon-arrow {
          color: #168fff !important;
        }

        & .svg-icon {
          fill: #168fff !important;
        }
      }

      // Title
      .el-submenu__title {
        padding: 0 12px !important;
        display: flex;
        align-items: center;
        gap: 0 16px;
        width: 100%;
        height: 48px;
        line-height: 24px;
        color: #fff !important;
        font-size: 16px;
        font-weight: 500;

        &:hover {
          background-color: transparent !important;

          span,
          .el-submenu__icon-arrow {
            color: #168fff !important;
          }

          & .svg-icon {
            fill: #168fff !important;
          }
        }

        span {
          width: calc(100% - 60px);
        }

        // Icon
        & .svg-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;

          .svg-icon {
            width: 24px;
            height: 24px;
          }
        }

        .el-submenu__icon-arrow {
          right: 12px;
          width: 16px;
          height: 16px;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }

    // Depth
    .el-menu--inline {
      padding: 0;
      gap: 0;

      .el-menu-item-group {
        .el-menu-item-group__title {
          display: none;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .el-menu-item {
          min-width: 100% !important;
          height: 100%;
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
