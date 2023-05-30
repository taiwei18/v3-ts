<template>
  <div class="login">
    <div class="login-card">
      <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
          autocomplete="off"
          labelAlign="left"
          name="basic"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item label="账号" name="username">
          <a-input v-model:value="formState.username"/>
        </a-form-item>

        <a-form-item label="密码" name="password">
          <a-input-password v-model:value="formState.password"/>
        </a-form-item>

        <a-form-item name="remember">
          <div style="display:flex;justify-content: space-between;">
            <a-checkbox v-model:checked="formState.remember">7天内免登录</a-checkbox>
            <a class="login-form-forgot">忘记密码</a>
          </div>
        </a-form-item>
        <a-form-item>
          <a-button block="true" html-type="submit" type="primary">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import type {FormInstance} from 'ant-design-vue';
import type {Rule} from 'ant-design-vue/es/form';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true
});
const rulesUsername = async (_rule: Rule, value: string) => {
  if ((value === "")) {
    return Promise.reject('账号不能为空');
  } else {
    const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
    if (!reg.test(value)) {
      return Promise.reject('字母开头，6~18字节，仅允许字母、数字和下划线');
    }
    return Promise.resolve();
  }
};
const rulesPassword = async (_rule: Rule, value: string) => {
  if ((value === "")) {
    return Promise.reject('密码不能为空');
  } else {
    const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
    if (!reg.test(value)) {
      return Promise.reject('字母开头，6~18字节，仅允许字母、数字和下划线');
    }
    return Promise.resolve();
  }
};
const rules: Record<string, Rule[]> = {
  username: [{validator: rulesUsername, trigger: "blur"}],
  password: [{validator: rulesPassword, trigger: "blur"}]
};

const onFinish = (values: any) => {
  console.log("Success:", values);

  //
  interface User {
    mytime: Number,
    password: String,
    pasttime: Number,
    remember: Boolean,
    username: String
  }

  const my_user: User = {
    username: values.password,
    password: values.password,
    remember: values.remember,
    mytime: new Date().getTime(),
    pasttime: 604800000
  }
  localStorage.setItem("my_user", JSON.stringify(my_user))

};
// 写一个for循环
// for(let i=0;i<localStorage.length;i++){
//   console.log(localStorage.key(i))
// }
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
  // let { proxy } = getCurrentInstance();
  //   proxy?.$loading.show();
  //   setTimeout(() => {
  //     proxy?.$loading.hide();
  //   }, 5000);
};
</script>
<style scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(@/assets/image/Loginbg.png);
}

.login-card {
  width: 500px;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  position: absolute;
  left: 60%;
  top: 30%;
}
</style>