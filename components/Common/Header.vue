<template>
  <header>
    <div class="innerSection">
      <h1>
        <router-link to="/">
          <span class="svg-container">
            <svg-icon icon-class="logo" />
          </span>
          {{ logoText }}
        </router-link>
      </h1>
      <div class="UserOption">
        <el-dropdown>
          <i class="avatar">A</i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logoText: "AnnoWiz BackOffice",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";
</style>
