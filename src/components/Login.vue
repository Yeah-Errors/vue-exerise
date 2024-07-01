<template>
  <div class="loginEle">
    <h1>{{ title }}</h1>
    <div class="loginBody">
      <div class="loginMode">
        <span
          class="bTitle loginBar"
          :class="{ currentBar: mode == 'login' }"
          @click="
            () => {
              mode = 'login';
            }
          ">
          Login
        </span>
        <el-icon v-if="mode == 'login'"><CaretLeft /></el-icon>
        <el-icon v-else><CaretRight /></el-icon>
        <span
          class="bTitle"
          :class="{ currentBar: mode == 'register' }"
          @click="
            () => {
              mode = 'register';
            }
          ">
          register
        </span>
      </div>
      <!-- 表单体 -->
      <el-form :model="loginForm" :rules="confirmRule" ref="loginFormRef" status-icon>
        <el-form-item prop="nickname" v-if="mode == 'register'" class="loginFormItem">
          <el-input v-model="loginForm.nickname" placeholder="昵称" :prefix-icon="User"></el-input>
        </el-form-item>

        <el-form-item prop="username" class="loginFormItem">
          <el-input v-model="loginForm.username" autocomplete="off" placeholder="邮箱" :prefix-icon="Message"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="loginFormItem">
          <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码" show-password :prefix-icon="Key"></el-input>
        </el-form-item>

        <el-form-item prop="confirmPwd" v-if="mode == 'register'" class="loginFormItem">
          <el-input type="password" v-model="loginForm.confirmPwd" autocomplete="off" placeholder="确认密码" show-password :prefix-icon="QuestionFilled"></el-input>
        </el-form-item>
        <el-form-item prop="confirmCode" v-if="mode == 'register'" class="loginFormItem">
          <el-input type="password" style="width: 60%" v-model="loginForm.confirmCode" autocomplete="off" placeholder="验证码" show-password :prefix-icon="Comment"></el-input>
          <span id="confirmPic">验证码</span>
        </el-form-item>
        <el-form-item prop="inviteCode" v-if="mode == 'register'" class="loginFormItem">
          <el-input v-model="loginForm.inviteCode" autocomplete="off" placeholder="邀请码" :prefix-icon="Share"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="submitButton"
            :disabled="
              !(
                loginForm.usernamePass &&
                loginForm.passwordPass &&
                (mode == 'login' || (mode == 'register' && loginForm.nicknamePass && loginForm.confirmCodePass && loginForm.confirmPwdPass && loginForm.inviteCodePass))
              )
            ">
            {{ mode == "login" ? "登录" : "注册" }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { CaretLeft, CaretRight, User, Message, Key, QuestionFilled, Comment, Share } from "@element-plus/icons-vue";
const title = ref("Welcome to Yeah,Please Login!");
const mode = ref("login");
const loginForm = reactive({
  username: "",
  usernamePass: false,
  password: "",
  passwordPass: false,
  nickname: "",
  nicknamePass: false,
  confirmPwd: "",
  confirmPwdPass: false,
  confirmCode: "",
  confirmCodePass: false,
  inviteCode: "",
  inviteCodePass: false,
});
const confirmRule = reactive({
  username: [
    {
      required: true,
      validator: (rule, value, callback) => {
        loginForm.usernamePass = false;
        if (!value) {
          callback(new Error("请输入邮箱地址"));
        } else {
          loginForm.usernamePass = true;
          callback();
        }
      },
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      validator: (rule, value, callback) => {
        loginForm.passwordPass = false;
        if (!value) callback(new Error("请输入密码"));
        else if (value.length < 8) callback(new Error("密码长度应大于8位"));
        else {
          loginForm.passwordPass = true;
          callback();
        }
      },
      trigger: "change",
    },
  ],
  confirmPwd: [
    {
      required: true,
      validator: (rule, value, callback) => {
        loginForm.confirmPwdPass = false;
        if (mode.value == "register" && value != loginForm.password) callback(new Error("两次密码不一致"));
        else {
          loginForm.confirmPwdPass = true;
          callback();
        }
      },
      trigger: "change",
    },
  ],
  nickname: [
    {
      required: true,
      validator: (rule, value, callback) => {
        loginForm.nicknamePass = false;
        if (!value) callback(new Error("请输入昵称"));
        else {
          loginForm.nicknamePass = true;
          callback();
        }
      },
      trigger: "change",
    },
  ],
  confirmCode: [
    {
      required: true,
      validator: (rule, value, callback) => {
        loginForm.confirmCodePass = false;
        if (!value) callback(new Error("请输入验证码"));
        else {
          loginForm.confirmCodePass = true;
          callback();
        }
      },
      trigger: "change",
    },
  ],
  inviteCode: [
    {
      required: true,
      validator: (rule, value, callback) => {
        loginForm.inviteCodePass = false;
        if (!value) callback(new Error("请输入邀请码"));
        else {
          loginForm.inviteCodePass = true;
          callback();
        }
      },
      trigger: "change",
    },
  ],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginBody {
  margin: 50px auto;
  width: auto;
  max-width: 400px;
  height: auto;
  max-height: 600px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px white;
}
.loginMode {
  margin-bottom: 10px;
}
.bTitle {
  display: inline-block;
  margin: 20px;
  padding: 5px 0px;
}

.currentBar {
  color: #1677ff;
  font-size: 25px;
  border-bottom: 2px solid #1677ff;
}
.loginFormItem {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.submitButton {
  display: block;
  margin: 20px auto;
  width: 60%;
}
#confirmPic {
  display: inline-block;
  margin-left: 8%;
  width: 30%;
  height: 100%;
  border: 1px solid blue;
  border-radius: 4px;
}
</style>
