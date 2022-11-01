<template>
  <div class="app-container">
    <el-row>
      <el-card class="box-card">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="제목">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="날짜">
            <el-select v-model="form.region" placeholder="등록 날짜">
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="~"
              start-placeholder="Start date"
              end-placeholder="End date"
            >
            </el-date-picker>
            <el-button type="primary" @click="onSubmit">검색</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>

    <el-row>
      <el-col :span="4">
        <el-dropdown>
          <span class="el-dropdown-link">
            show : 10<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>10</el-dropdown-item>
            <el-dropdown-item>20</el-dropdown-item>
            <el-dropdown-item>50</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="20">
        <el-select v-model="ProjectListTable.state" placeholder="상태값">
          <el-option label="Todo" value="Todo"></el-option>
          <el-option label="In Progress" value="In Progress"></el-option>
          <el-option label="Confirmed" value="Confirmed"></el-option>
        </el-select>
        <el-button type="primary">수정</el-button>
        <el-button type="primary">삭제</el-button>
        <el-button type="primary" icon="el-icon-circle-plus">등록</el-button>
      </el-col>
      <el-card class="box-card">
        <el-table
          :model="ProjectListTable"
          :data="tableData"
          style="width: 100%"
          height="250"
        >
          <el-table-column fixed prop="check" label="" width="64">
            <el-checkbox></el-checkbox>
          </el-table-column>
          <el-table-column prop="number" label="번호" width="40">
          </el-table-column>
          <el-table-column prop="userId" label="ID" width="100">
          </el-table-column>
          <el-table-column prop="title" label="제목" width="100">
          </el-table-column>
          <el-table-column prop="contents" label="내용" width="160">
          </el-table-column>
          <el-table-column prop="state" label="상태" width="100">
          </el-table-column>
          <el-table-column
            prop="taskCount"
            label="태스크 생성 개수"
            width="136"
          >
          </el-table-column>
          <el-table-column prop="date" label="등록날짜" width="120">
          </el-table-column>
          <el-table-column prop="dueDate" label="마감날짜" width="120">
          </el-table-column>
          <el-table-column prop="id" label="등록 ID" width="100">
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      form: {
        name: "",
        region: "",
      },
      ProjectListTable: {
        state: "",
      },
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
      value1: "",
      tableData: [
        {
          type: "",
          number: "01",
          userId: "ABC-123",
          title: "TestProject001",
          contents: "TestProject001",
          state: "Todo",
          taskCount: "1234",
          date: "07-18-22",
          dueDate: "12-18-22",
          id: "abcd1234",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      alert("제출");
    },
  },
};
</script>

<style lang="scss" scoped>
/* @import "@/assets/styles/project.scss"; */
.el-row {
  margin-bottom: 40px;

  & :last-child {
    margin-bottom: 0;
  }
}
</style>
