<template>
  <div class="app-container">
    <el-row>
      <el-card class="box-card" :body-style="{ padding: '28px 20px' }">
        <el-page-header @back="goBack" title="프로젝트"></el-page-header>
      </el-card>
    </el-row>

    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <span>프로젝트 생성</span>
      </div>
      <div class="text item"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ProjectCreate",
  data() {},

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/project.scss";
.el-row {
  margin-bottom: 24px;

  & :last-child {
    margin-bottom: 0;
  }
}

// Title
.el-page-header {
  display: flex;
  line-height: 24px;

  .el-page-header__left {
    margin-right: 0;
    align-items: center;
    gap: 0 20px;

    // Title
    .el-page-header__title {
      color: $Light-Gray800;
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
    }

    // Icon
    .el-icon-back {
      margin-right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      color: $Light-Primary500;
      font-size: 20px;
      border: 2px solid $Light-Primary500;
      border-radius: 4px;
    }

    &::after {
      content: none;
    }
  }
}
</style>
