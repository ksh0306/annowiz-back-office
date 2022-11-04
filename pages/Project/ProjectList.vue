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
              <el-col :span="6" :xs="24" :sm="24" :md="8" :lg:="8">
                <el-input
                  v-model="form.subject"
                  placeholder="프로젝트 명"
                  class="commonInput"
                ></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="날짜">
              <el-col :xs="24" :sm="24" :md="4" :lg="4">
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
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="8">
                <el-date-picker
                  v-model="datePicker"
                  type="daterange"
                  range-separator="~"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                >
                </el-date-picker>
              </el-col>
              <el-col :xs="24" :sm="24" :md="4" :lg="3">
                <el-button
                  native-type="submit"
                  type="primary"
                  class="commonButton"
                  >검색</el-button
                >
                <el-button
                  native-type="button"
                  type="text"
                  icon="el-icon-edit"
                ></el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
      </el-card>
    </el-row>
    <!-- 프로젝트 버튼 이벤트  -->
    <el-row type="flex" justify="space-between">
      <el-col :span="12">
        <el-select
          v-model="tableListSelect"
          placeholder="10개"
          class="commonSelect"
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
      <el-col :span="12">
        <el-row type="flex" justify="end">
          <el-button
            native-type="button"
            type="primary"
            @click="deleteAlertOpen()"
            >삭제</el-button
          >
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
          <el-table-column prop="edit" label="" width="97">
            <template slot-scope="scope">
              <el-button size="mini" native-type="button" @click="moveEdit()">
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

      // tableList Date Select
      dateOptions: [
        {
          value: "2022-01-01",
          label: "2022-01-01",
        },
        {
          value: "2022-02-02",
          label: "2022-02-02",
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

      pickerOptions: {
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last month",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last 3 months",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      datePicker: "",

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
      this.$router.push({ path: "/form" });
    },
    // 삭제 알럿
    deleteAlertOpen() {
      this.$confirm("This will permanently delete the file. Continue?", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
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
