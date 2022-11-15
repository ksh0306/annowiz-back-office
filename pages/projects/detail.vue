<template>
  <div class="app-container">
    <el-row>
      <el-card class="box-card" :body-style="{ padding: '28px 20px' }">
        <el-page-header @back="goBack" title="프로젝트"></el-page-header>
      </el-card>
    </el-row>

    <el-card class="box-card">
      <div slot="header">
        <span>프로젝트 테스트123</span>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="태스크" name="task">
          <el-form
            :label-position="labelPosition"
            label-width="100px"
            :model="formLabelAlign"
          >
            <el-form-item label="프로젝트 ID:">
              <el-input v-model="formLabelAlign.id" readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="제목">
              <el-input
                v-model="formLabelAlign.title"
                readonly="true"
              ></el-input>
            </el-form-item>
            <el-form-item label="내용">
              <el-input
                v-model="formLabelAlign.contents"
                readonly="true"
              ></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="12">
                <el-form-item label="할당 프레임 개수">
                  <el-input
                    v-model="formLabelAlign.frame"
                    readonly="true"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="마감시간">
                  <el-input
                    v-model="formLabelAlign.date"
                    readonly="true"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="라벨" name="label">Config</el-tab-pane>
        <el-tab-pane label="멤버" name="member">Role</el-tab-pane>
      </el-tabs>
    </el-card>

    <strong>태스크 리스트</strong>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div class="tableWrap">
        <el-table
          class="tableList"
          :data="projectListData"
          style="width: 100%"
          @sort-change="sortChange"
        >
          <el-table-column
            v-for="column in columnTitles"
            :key="column.id"
            :prop="column.prop"
            :label="column.label"
            :formatter="column.value"
            :min-width="column.minWidth"
            :fixed="column.fixed"
            :sortable="column.sortable"
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="CommonPagination">
        <el-pagination
          layout="total, sizes, prev, pager, next"
          @size-change="onChangePageSize"
          @current-change="onChangePageCurrent"
          :current-page.sync="criteria.page"
          :page-size="criteria.perPageNum"
          :total="criteria.totalCount"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  components: {},
  data() {
    return {
      activeName: "task",

      labelPosition: "top",
      formLabelAlign: {
        id: "123123",
        title: "태스크 테스트123",
        contents: "내용이 들어갑니다.",
        frame: "20",
        date: "22-02-12",
      },

      page: 1,
      perPageNum: 10,
      totalCount: 0,
      sortValue: null,
      criteria: {
        page: 1,
        perPageNum: 10,
        totalCount: 0,
        order: null,
      },

      // dataTable
      columnTitles: [
        {
          prop: "id",
          label: "번호",
          minWidth: "80",
          sortable: "custom",
        },
        {
          prop: "userId",
          label: "ID",
          minWidth: "126",
          sortable: "custom",
        },
        {
          prop: "tasks",
          label: "태스크",
          minWidth: "126",
          sortable: "custom",
        },
        {
          prop: "subject",
          label: "제목",
          minWidth: "200",
          value: (row, column, cellValue, index) => cellValue,
          detailLink: true,
          sortable: "custom",
        },
        {
          prop: "contents",
          label: "내용",
          minWidth: "155",
          sortable: "custom",
        },
        {
          prop: "frame",
          label: "할당된 프레임",
          minWidth: "155",
          align: "center",
          sortable: "custom",
        },
        {
          prop: "dueDate",
          label: "마감 날짜",
          minWidth: "126",
          sortable: "custom",
        },
        {
          prop: "date",
          label: "등록 날짜",
          minWidth: "127",
          sortable: "custom",
        },
      ],

      projectListData: [
        {
          id: "01",
          userId: "ID-23412",
          tasks: "126",
          subject: "태스크 테스트123",
          contents: "내용이 들어갑니다.",
          frame: "20",
          dueDate: "22-09-18",
          date: "22-10-18",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/project.scss";
</style>
