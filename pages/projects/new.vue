<template>
  <div class="app-container">
    <el-row>
      <el-card class="box-card" :body-style="{ padding: '28px 20px' }">
        <el-page-header @back="goBack" title="프로젝트"></el-page-header>
      </el-card>
    </el-row>

    <el-card class="box-card">
      <div slot="header">
        <span>프로젝트 생성</span>
      </div>
      <el-form :model="formProperty" :label-position="horizontalItems">
        <el-form-item label="ID">
          <el-input
            v-model="formProperty.userId"
            class="commonInput"
            readonly="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="제목">
          <el-input
            v-model="formProperty.title"
            placeholder="제목"
            class="commonInput"
            style="max-width: 780px"
          ></el-input>
        </el-form-item>
        <el-form-item label="내용">
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 4 }"
            placeholder="내용 입력"
            v-model="formProperty.contents"
            class="commonTextArea"
            style="max-width: 780px"
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
        <el-form-item label="">
          <el-collapse v-model="labelActive">
            <el-collapse-item title="라벨" name="1">
              <div>
                <el-button type="secondary" class="commonButton">
                  라벨 추가
                </el-button>
              </div>
              <div>
                <el-col>
                  <div class="el-col-item">
                    <el-form-item label="라벨 이름">
                      <el-input
                        v-model="formProperty.labelName"
                        class="commonInput"
                        placeholder="라벨 이름"
                        style="min-width: 300px"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="el-col-item">
                    <el-form-item label="색상 선택"> </el-form-item>
                  </div>
                  <div class="el-col-item">
                    <el-form-item label="라인 선택">
                      <el-dropdown
                        trigger="click"
                        class="commonDropDownSelect"
                        style="min-width: 240px"
                      >
                        <span class="el-dropdown-link">
                          <span>
                            <span class="svg-container">
                              <svg-icon icon-class="solid" />
                            </span>
                            Solid
                          </span>
                          <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>
                            <span class="svg-container">
                              <svg-icon icon-class="solid" />
                            </span>
                            Solid
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <span class="svg-container">
                              <svg-icon icon-class="dashed" />
                            </span>
                            Dashed
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <span class="svg-container">
                              <svg-icon icon-class="dotted" />
                            </span>
                            Dotted
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </el-form-item>
                  </div>
                  <div class="el-col-item">
                    <div class="el-col-button">
                      <el-button type="secondary" class="commonButton">
                        취소
                      </el-button>
                      <el-button type="primary" class="commonButton">
                        저장
                      </el-button>
                    </div>
                  </div>
                </el-col>
              </div>
              <div>
                <el-button
                  type="secondary"
                  class="commonButton"
                  icon="el-icon-circle-plus"
                >
                  속성 추가
                </el-button>
              </div>
              <div>
                <el-col>
                  <div class="el-col-item">
                    <el-form-item label="속성 이름">
                      <el-input
                        v-model="formProperty.labelName"
                        placeholder="속성 이름"
                        class="commonInput"
                        style="min-width: 300px"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="el-col-item">
                    <el-form-item label="요소 선택">
                      <el-dropdown
                        trigger="click"
                        class="commonDropDownSelect"
                        style="min-width: 240px"
                      >
                        <span class="el-dropdown-link">
                          <span>
                            <span class="svg-container">
                              <svg-icon icon-class="check-circle" />
                            </span>
                            Checkbox
                          </span>
                          <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>
                            <span class="svg-container">
                              <svg-icon icon-class="radio" />
                            </span>
                            Radio
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <span class="svg-container">
                              <svg-icon icon-class="check-circle" />
                            </span>
                            Checkbox
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <span class="svg-container">
                              <svg-icon icon-class="text" />
                            </span>
                            Text
                          </el-dropdown-item>
                          <el-dropdown-item>
                            <span class="svg-container">
                              <svg-icon icon-class="list-numbers" />
                            </span>
                            Number
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </el-form-item>
                  </div>
                  <div class="el-col-item">
                    <el-form-item label="속성값">
                      <!-- input -->
                      <el-input
                        v-model="formProperty.labelName"
                        placeholder="속성값"
                        class="commonInput"
                        style="min-width: 240px"
                      ></el-input>
                      <!-- input -->

                      <!-- multiple -->
                      <!-- <el-select v-model="value1" multiple placeholder="Select">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select> -->
                      <!-- multiple -->

                      <!-- checkbox type -->
                      <!-- <el-select
                        v-model="value2"
                        placeholder="true"
                        class="commonSelect"
                        style="min-width: 240px"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select> -->
                      <!-- checkbox type -->
                    </el-form-item>
                  </div>
                  <div class="el-col-item">
                    <div class="el-col-button">
                      <button
                        type="text"
                        class="commonButton el-button--text delete"
                      >
                        <span class="svg-container">
                          <svg-icon icon-class="trash" />
                        </span>
                        삭제
                      </button>
                    </div>
                  </div>
                </el-col>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-form-item>
        <el-form-item label="">
          <el-collapse v-model="projectActive">
            <el-collapse-item title="프로젝트 회원" name="1">
              <div>
                <el-button
                  type="secondary"
                  @click="dialogMemberAdd = true"
                  class="commonButton"
                  >회원 추가</el-button
                >
              </div>
              <div>
                <div class="tableWrap">
                  <el-table
                    class="tableList"
                    :data="memberListData"
                    style="width: 100%"
                  >
                    <el-table-column
                      v-for="column in columnTitles"
                      :key="column.prop"
                      :prop="column.prop"
                      :label="column.label"
                      :min-width="column.minWidth"
                    >
                    </el-table-column>
                    <el-table-column prop="delete" label="" width="64">
                      <el-button
                        type="text"
                        class="commonButton"
                        icon="el-icon-circle-close"
                      >
                      </el-button>
                    </el-table-column>
                  </el-table>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-form-item>

        <el-form-item>
          <el-row type="flex" justify="end">
            <el-button type="primary" class="commonButton solid">
              취소
            </el-button>
            <el-button type="primary" class="commonButton" disabled>
              등록
            </el-button>
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
    ColorPicker,
  },
  data() {
    return {
      // el-form horizon
      horizontalItems: "top",

      formProperty: {
        userId: "123123",
        title: "",
        contents: "",
      },

      // collapse active
      labelActive: ["1"],
      projectActive: ["1"],

      // 마감 기간 DatePicker
      startDate: "",

      // dataTable
      memberListData: [
        {
          number: "01",
          userName: "김철수",
          userID: "qwer1234",
          authority: "Annotator",
          group: "Annotation-AI",
          delete: "",
        },
        {
          number: "02",
          userName: "김영희",
          userID: "kimasd1234",
          authority: "Annotator",
          group: "Annotation-AI",
          delete: "",
        },
      ],

      // dataTable titles
      columnTitles: [
        {
          prop: "number",
          label: "번호",
          minWidth: "70",
        },
        {
          prop: "userName",
          label: "이름",
          minWidth: "180",
        },
        {
          prop: "userID",
          label: "사용자ID",
          minWidth: "220",
        },
        {
          prop: "authority",
          label: "권한",
          minWidth: "220",
        },
        {
          prop: "group",
          label: "조직",
          minWidth: "220",
        },
      ],

      // 속성값 select
      options: [
        {
          value: "True",
          label: "True",
        },
        {
          value: "False",
          label: "False",
        },
      ],
      value1: [],
      value2: "",
    };
  },

  methods: {
    // 이전 페이지 이동
    goBack() {
      this.$router.go(-1);
    },
    updateColors(colorsValue) {
      this.colorPicker = colorsValue;
      console.log("colors", this.colorPicker);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/project.scss";
</style>
