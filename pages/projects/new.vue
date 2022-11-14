<template>
  <div class="app-container">
    <el-row>
      <el-card class="box-card" :body-style="{ padding: '28px 20px' }">
        <el-page-header @back="goBack" title="프로젝트"></el-page-header>
      </el-card>
    </el-row>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>프로젝트 생성</span>
      </div>
      <el-form :model="formInline" :label-position="horizontalItems">
        <el-form-item label="ID">
          <el-input v-model="formInline.userId"></el-input>
        </el-form-item>
        <el-form-item label="제목">
          <el-input v-model="formInline.title" placeholder="제목"></el-input>
        </el-form-item>
        <el-form-item label="내용">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="내용 입력"
            v-model="formInline.contents"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="마감 기간">
          <div class="CommonDatePicker">
            <el-date-picker
              v-model="startDate"
              type="date"
              placeholder="날짜 선택"
              format="yy-MM-dd"
              :clearable="false"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="라벨">
          <el-button type="secondary" class="commonButton">라벨 추가</el-button>
          <el-col>
            <div>
              <el-form-item label="라벨 이름">
                <el-input v-model="formInline.userId"></el-input>
              </el-form-item>
            </div>
            <div>
              <ColorPicker/>

            </div>
            <div>
              <el-form-item label="라인 선택">
                <el-select
                  v-model="lineSelect"
                  placeholder="라인 선택"
                  class="commonSelect"
                >
                  <el-option
                    v-for="item in lineOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div>
              <el-button type="secondary" class="commonButton">취소</el-button>
              <el-button type="primary" class="commonButton">등록</el-button>
            </div>
          </el-col>
        </el-form-item>
        <el-form-item label="프로젝트 회원">
          <el-button
            type="secondary"
            @click="dialogMemberAdd = true"
            class="commonButton"
            >회원 추가</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-row type="flex" justify="end">
            <el-button type="primary" class="commonButton">취소</el-button>
            <el-button type="primary" class="commonButton">등록</el-button>
          </el-row>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import ColorPicker from "@/components/Base/ColorPicker";

export default {
  name: "ProjectCreate",
  components: {
    ColorPicker
  },
  data() {
    return {
      horizontalItems: "top",


      formInline: {
        userId: "",
        title: "",
        contents: "",
      },

      // 마감 기간 DatePicker
      startDate: "",

      // 색상 선택 colorPicker
      colorPicker: "",

      // 라인 선택 Select
      lineOptions: [
        {
          value: "solid",
          label: "solid",
        },
        {
          value: "dashed",
          label: "dashed",
        },
        {
          value: "double",
          label: "double",
        },
        {
          value: "groove",
          label: "groove",
        },
        {
          value: "ridge",
          label: "ridge",
        },
        {
          value: "inset",
          label: "inset",
        },
        {
          value: "outset",
          label: "outset",
        },
      ],
      lineSelect: "",
    };
  },

  methods: {
    // 이전 페이지 이동
    goBack() {
      this.$router.go(-1);
    },
    onChange(val) {
      this.colors = val;
      console.log(val);
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
</style>
