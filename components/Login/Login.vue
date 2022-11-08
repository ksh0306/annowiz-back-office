<template>
  <div class="login-container">
    <div class="loginWrap">
      <div class="imageWrap">
        <img src="http://dev.annowiz.com:18080/intro.10802bc0.svg" alt="" />
        <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="loginForm"
        autocomplete="on"
        label-position="left"
      >
        <div class="title-container">
          <h3 class="title">BackOffice Login</h3>
        </div>
        <ul class="loginFormList">
          <li>
            <label>Username</label>
            <el-form-item prop="username">
              <span class="svg-container">
                <svg-icon icon-class="user" />
              </span>
              <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="Username"
                name="username"
                type="text"
                tabindex="1"
                autocomplete="on"
              />
            </el-form-item>
          </li>
          <li>
            <label>Password</label>
            <el-tooltip
              v-model="capsTooltip"
              content="Caps lock is On"
              placement="right"
              manual
            >
              <el-form-item prop="password">
                <span class="svg-container">
                  <svg-icon icon-class="password" />
                </span>
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="loginForm.password"
                  :type="passwordType"
                  placeholder="Password"
                  name="password"
                  tabindex="2"
                  autocomplete="on"
                  @keyup.native="checkCapslock"
                  @blur="capsTooltip = false"
                  @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwd">
                  <svg-icon
                    :icon-class="
                      passwordType === 'password' ? 'eye' : 'eye-open'
                    "
                  />
                </span>
              </el-form-item>
            </el-tooltip>
          </li>
        </ul>
        <el-button
          :loading="loading"
          type="primary"
          @click.native.prevent="handleLogin"
          >Login</el-button
        >
      </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { postLogin } from '@/middleware/api';

export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("패스워드6자리이상"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [{ required: true, trigger: "blur" }],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
    };
  },
  mounted() { },
  methods: {
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= 'A' && key <= 'Z';
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    // 로그인 로직 처리 예정
    handleLogin() {
      const { username, password } = this;
      postLogin({ username, password });

      this.router.push({
        name: 'project',
        params: { path: '/project' },
      });
      // this.$refs.loginForm.validate((valid) => {
      //   if (valid) {
      //     // this.loading = true
      //     // this.$store.dispatch('login/doLogin', this.loginForm)
      //     // this.loading = false
      //   } else {
      //     // this.router.push({
      //     //   name: "dashboard",
      //     //   params: { path: "/dashboard" },
      //     // });
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/login.scss";
</style>