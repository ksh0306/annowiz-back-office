<template>
  <div class="leftMenu">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group> -->
      <el-menu
        default-active="0"
        :collapse="isCollapse"
        :unique-opened="false"
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
import variables from "@/assets/styles/variables.scss";

export default {
  computed: {
    variables() {
      return variables;
    },
    // isCollapse() {
    //   return false;
    // },
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
@import "@/assets/styles/sidebar.scss";
</style>
