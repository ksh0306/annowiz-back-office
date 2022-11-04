<template>
  <div class="template">
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <h3>연관 검색어 관리</h3>
      <el-row>
        <el-col :span="4">검색</el-col>
        <el-col :span="10">
          <el-input
            placeholder="키워드를 입력하세요"
            v-model="input1"
            class="width50"
            clearable
          ></el-input>
          <el-button size="large" @click="searchVisible">검색</el-button>
          <el-button size="large">초기화</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <div class="heading-option">
        <div class="option">
          <el-input
            placeholder="검색어를 입력하세요"
            v-model="input1"
            clearable
          ></el-input>
          <el-button size="large">신규등록</el-button>
        </div>
      </div>
      <el-table :data="tableData">
        <p class="tit-sub">
          선택항목
          <el-button size="small" class="mgl4" @click="onDelete"
            >삭제</el-button
          >
        </p>
        <el-table-column
          prop="ranking"
          label="순위"
          width="60"
        ></el-table-column>
        <el-table-column label="연관 검색어" align="left">
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
          <el-button class="delete" plain @click="centerDialogVisible = true"
            >대출</el-button
          >
        </el-table-column>
        <el-table-column prop="date" label="검색어 추가" width="400">
          <el-input
            placeholder="검색어를 입력하세요"
            v-model="input1"
            clearable
          ></el-input>
          <el-button size="large">등록</el-button>
        </el-table-column>
      </el-table>
    </div>
    <!-- temp-cont : End -->
    <!-- temp-cont : Start -->
    <div class="temp-cont">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <!-- temp-cont : End -->
    <!-------------------- Dialog : Start -------------------->
    <!-- 선택하기 리스트 삭제 : Start -->
    <el-dialog :visible.sync="centerDialogVisible" width="30%" center>
      <span>정말 삭제하시겠습니까?</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="main" @click="centerDialogVisible = false"
          >확인</el-button
        >
        <el-button @click="centerDialogVisible = false">취소</el-button>
      </span>
    </el-dialog>
    <!-- 선택하기 리스트 삭제 : End -->
    <!-------------------- Dialog : End -------------------->
  </div>
</template>
<!-- 아래 스크립트는 html 에서만 사용 -->
<script type="text/javascript">
export default {
  data: () => ({
    tableData: [{ ranking: "1", searchNum: "4", date: "2019.00.00" }],
    centerDialogVisible: false,
    value: "",
    radio: "1",
    input1: "",
    input2: "",
  }),
  methods: {
    searchVisible() {
      alert(1);
    },
  },
};
</script>
<style scoped>
.el-table_1_column_2 button {
  margin: 5px 3px;
}
</style>
