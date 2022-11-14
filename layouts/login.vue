<template>
  <section class="app-wrapper">
    <Header />
    <div class="login-wrapper">
      <Login />
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Common/Header';
import Login from '@/components/Login/Login';
import Footer from '@/components/Common/Footer';

export default {
  components: {
    Header,
    Footer,
    Login,
  },
};
</script>

<style lang="scss" scoped>
/*
** Login Form
*/

.login-wrapper {
  background-color: #f3f4f6;
  position: relative;
  width: 100%;
  height: calc(100% - 138px);

  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .loginWrap {
      display: flex;
      min-height: 467px;

      .imageWrap {
        padding: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 432px;
        width: 100%;
        background-color: #f4f9ff;
        border-radius: 8px 0 0 8px;

        img {
          max-width: 100%;
          object-fit: cover;
        }
      }

      .loginForm {
        padding: 40px;
        min-width: 486px;
        background-color: $Global-White;
        border-radius: 0 8px 8px 0;

        .title-container {
          position: relative;

          .title {
            margin: 0 0 50px;
            color: $Dark-Gray800;
            font-size: 20px;
            font-weight: 700;
            line-height: 150%;
          }
        }

        ul.loginFormList {
          display: flex;
          flex-direction: column;
          gap: 34px 0;
        }

        ul.loginFormList li {
          display: flex;
          flex-direction: column;
          gap: 8px 0;
        }

        ul.loginFormList li label {
          color: $Dark-Gray600;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
        }

        ul.loginFormList li .el-form-item {
          margin-bottom: 0;

          .el-form-item__content {
            display: flex;
            align-items: center;
            background-color: $Global-White;
            width: 100%;
            height: 48px;
            border-radius: 8px;
            border: 1px solid $Light-Gray300;

            .el-input {
              height: 100%;

              input {
                padding: 8px 24px 8px 12px;
                height: 48px;
                color: $Dark-Gray600;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                background-color: transparent;
                border: none;
                appearance: none;
                -webkit-appearance: none;
                border-radius: 8px;

                &::placeholder {
                  color: $Light-Gray400;
                }

                &:-webkit-autofill,
                &:-webkit-autofill:hover,
                &:-webkit-autofill:focus,
                &:-webkit-autofill:active {
                  box-shadow: 0 0 0 30px $Global-White inset !important;
                  -webkit-box-shadow: 0 0 0 30px $Global-White inset !important;
                  -webkit-text-fill-color: $Dark-Gray600;
                  height: calc(100% - 2px);
                }

                &[type="text"] {
                  width: calc(100% - 48px);
                }

                &[type="password"] {
                  width: calc(100% - 60px);
                }
              }
            }
          }

          .svg-container {
            padding: 0 0 0 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $Light-Gray600;
            width: 60px;
            height: 48px;

            .svg-icon {
              width: 24px;
              height: 24px;
              fill: $Light-Gray600;
            }
          }

          .show-pwd {
            position: absolute;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            cursor: pointer;
            user-select: none;

            .svg-icon {
              width: 24px;
              height: 24px;
              fill: $Light-Gray600;
            }
          }

          .el-form-item__error {
            padding-top: 8px;
            position: absolute;
            top: 100%;
            left: 0;
            color: #f56c6c;
            font-size: 12px;
          }
        }
      }

      .el-button {
        margin: 65px 0 0;
        width: 100%;
        height: 48px;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        background-color: $Light-Primary500;
        border-radius: 8px;
        border: none;
      }
    }
  }
}

</style>
