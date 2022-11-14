<template>
  <div class="app-container">
    <!-- 프로젝트 조회 -->
    <el-row>
      <el-col :span="24">
        <h2 class="subjectTitle">프로젝트 조회</h2>
      </el-col>
    </el-row>

    <!-- 프로젝트 검색 영역 -->
    <el-row>
      <el-card class="box-card" :body-style="{ padding: '0px' }">
        <el-col :span="24">
          <el-form
            ref="form"
            :model="form"
            label-width="50px"
            style="padding: 32px 20px"
          >
            <el-form-item label="제목">
              <el-col>
                <el-input
                  v-model="form.subject"
                  placeholder="프로젝트 명"
                  class="commonInput"
                  style="max-width: 300px"
                ></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="날짜">
              <el-col>
                <el-select
                  v-model="dateSelect"
                  placeholder="등록 날짜"
                  class="commonSelect"
                >
                  <el-option
                    v-for="item in dateOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <div class="CommonDatePicker">
                  <el-date-picker
                    v-model="startDate"
                    type="date"
                    placeholder="날짜 선택"
                    format="yy-MM-dd"
                    :clearable="false"
                  >
                  </el-date-picker>
                  ~
                  <el-date-picker
                    v-model="endDate"
                    type="date"
                    placeholder="날짜 선택"
                    format="yy-MM-dd"
                    :clearable="false"
                  >
                  </el-date-picker>
                </div>
                <el-button
                  native-type="submit"
                  type="primary"
                  class="commonButton"
                  >검색</el-button
                >
                <el-button type="text" class="commonButton">
                  <span class="svg-container">
                    <svg-icon icon-class="refresh" />
                  </span>
                </el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
      </el-card>
    </el-row>

    <!-- 프로젝트 버튼 이벤트  -->
    <el-row type="flex" justify="space-between">
      <el-col>
        <el-select
          v-model="tableListSelect"
          placeholder="10개"
          class="commonSelect"
          size="mini"
        >
          <el-option
            v-for="item in listCountOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col>
        <el-row type="flex" justify="end">
          <el-button
            native-type="button"
            type="primary"
            @click="moveRegister()"
            icon="el-icon-circle-plus"
            class="commonButton"
            >등록</el-button
          >
        </el-row>
      </el-col>
    </el-row>

    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div class="tableWrap">
        <el-table class="tableList" :data="tableData" style="width: 100%">
          <el-table-column
            v-for="column in columnTitles"
            :key="column.prop"
            :prop="column.prop"
            :label="column.label"
            :formatter="column.formatter"
            :min-width="column.minWidth"
          >
          </el-table-column>
          <el-table-column prop="edit" label="" width="106">
            <template slot-scope="scope">
              <el-button
                size="mini"
                native-type="button"
                @click="moveEdit()"
                type="secondary"
                class="commonButton"
              >
                {{ scope.row.edit }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="CommonPagination">
        <el-pagination
          layout="prev, pager, next"
          @size-change="onChangePageSize"
          @current-change="onChangePageCurrent"
          :current-page.sync="page"
          :page-size="perPageNum"
          :total="totalCount"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      form: {
        subject: "",
      },
      page: 1,
      perPageNum: 50,
      totalCount: 0,
      sortValue: null,

      startDate: "",
      endDate: "",

      // tableList Date Select
      dateOptions: [
        {
          value: "22-11-08",
          label: "22-11-08",
        },
        {
          value: "22-11-09",
          label: "22-11-09",
        },
      ],
      dateSelect: "",

      // tableList Select
      listCountOptions: [
        {
          value: "10",
          label: "10개",
        },
        {
          value: "50",
          label: "50개",
        },
        {
          value: "100",
          label: "100개",
        },
      ],
      tableListSelect: "",

      // dataTable
      columnTitles: [
        {
          prop: "number",
          label: "번호",
          minWidth: "70",
        },
        {
          prop: "userId",
          label: "ID",
          minWidth: "126",
        },
        {
          prop: "subject",
          label: "제목",
          minWidth: "200",
        },
        {
          prop: "contents",
          label: "내용",
          minWidth: "155",
        },
        {
          prop: "taskCount",
          label: "테스크 생성 개수",
          minWidth: "155",
          align: "center",
        },
        {
          prop: "date",
          label: "등록 날짜",
          minWidth: "127",
        },
        {
          prop: "dueDate",
          label: "마감 날짜",
          minWidth: "126",
        },
        {
          prop: "registerId",
          label: "등록 ID",
          minWidth: "126",
        },
      ],
      tableData: [
        {
          number: "01",
          userId: "ABC-123",
          subject: "TestProject001TestProject002",
          contents: "TestProject001",
          taskCount: "1234",
          date: "07-18-22",
          dueDate: "12-18-22",
          registerId: "abcd1234",
          edit: "수정",
        },
        {
          number: "02",
          userId: "ABC-456",
          subject: "TestProject002",
          contents: "TestProject002",
          taskCount: "1234",
          date: "07-18-22",
          dueDate: "12-18-22",
          registerId: "abcd1234",
          edit: "수정",
        },
      ],
    };
  },
  methods: {
    // 등록 페이지 이동
    moveRegister() {
      this.$router.push({ path: "/Project/ProjectCreate" });
    },
    // 수정 페이지 이동
    moveEdit() {
      this.$router.push({ path: "/Project/ProjectModify" });
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
