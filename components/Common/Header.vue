<template>
  <header>
    <div class="innerSection">
      <h1>
        <router-link to="/">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 32 32"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#fff"
                  d="M31.135 12.673l-5.01 16.57H6.58l1.613-5.335h14.643l3.396-11.235h4.903zm-9.806 0l-1.783 5.899h-9.74l1.784-5.9h9.74zM24.555 2l-1.613 5.336H8.3L4.903 18.57H0L5.01 2h19.545z"
                ></path>
                <path d="M0 0h32v32H0z"></path>
              </g>
            </svg>
          </i>
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
