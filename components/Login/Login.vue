<template>
  <div class="login-container">
    <div class="loginWrap">
      <div class="imageWrap">
        <img src="http://dev.annowiz.com:18080/intro.10802bc0.svg" alt="" />
      </div>
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
              <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="Username"
                name="username"
                type="text"
                tabindex="1"
                autocomplete="on"
              >
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>
          </li>
          <li>
            <label>Password</label>
            <el-tooltip
              v-model="isCapsLock"
              content="Caps lock is on"
              placement="right"
              manual
            >
              <el-form-item prop="password">
                <el-input
                  ref="password"
                  v-model="loginForm.password"
                  :type="isPasswordHidden ? 'password' : 'text'"
                  placeholder="Password"
                  name="password"
                  tabindex="2"
                  autocomplete="on"
                  @keyup.native="checkCapsLock"
                  @blur="isCapsLock = false"
                  @keyup.enter.native="handleLogin"
                >
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                  <svg-icon
                    class="show-pwd"
                    slot="suffix"
                    :icon-class="isPasswordHidden ? 'eye' : 'eye-open'"
                    @click="showPassword"
                  />
                </el-input>
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
</template>

<script>
export default {
  data() {
    const validateInput = (rule, value, callback) => {
      const { field } = rule;

      value.length
        ? callback()
        : callback(`${field} ????????? ????????? ?????????.`);
    };

    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [{ required: true, trigger: "blur", validator: validateInput }],
        password: [
          { required: true, trigger: "blur", validator: validateInput },
        ],
      },
      isPasswordHidden: true,
      isCapsLock: false,
      loading: false,
    };
  },
  mounted() {
    this.$refs.username.focus();
  },
  methods: {
    checkCapsLock(e) {
      this.isCapsLock = e.getModifierState('CapsLock');
    },
    showPassword() {
      this.isPasswordHidden = !this.isPasswordHidden;

      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    // ????????? ?????? ?????? ??????
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) {
          console.log('login fields are invalid.');
          return false;
        }

        this.loading = true;
        this.$store.dispatch('login/login', this.loginForm);
        this.loading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/login.scss";
</style>
