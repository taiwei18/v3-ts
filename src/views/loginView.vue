<template>
  <div class="login">
    <img class="login-img  hidden md:block" src="@/assets/image/Loginbg.png" alt="">
    <div class="login-card">
      <div class="login-card-form">
        <h2 class="text-center mb-15">Register or login Watermelon</h2>
        <a-form ref="formRef" :model="formState" :rules="rules" autocomplete="off" labelAlign="left" name="basic"
          @finish="onFinish" @finishFailed="onFinishFailed">
          <a-form-item label="账号" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="密码" name="password">
            <a-input-password v-model:value="formState.password" />
          </a-form-item>
          <a-form-item name="remember">
            <div class="flex justify-between">
              <a-checkbox v-model:checked="formState.remember">7天内免登录</a-checkbox>
              <a class="login-form-forgot">忘记密码</a>
            </div>
          </a-form-item>
          <a-form-item>
            <a-button :block="true" html-type="submit" type="primary">Register or login</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { rulesUsername, rulesPassword } from "@/utils/rules";
import type { FormInstance } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
interface User {
  mytime: Number,
  password: String,
  pasttime: Number,
  remember: Boolean,
  username: String
}

const router = useRouter()
const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true
});
const rules: Record<string, Rule[]> = {
  username: [{ validator: rulesUsername, trigger: "blur" }],
  password: [{ validator: rulesPassword, trigger: "blur" }]
};
const onFinish = (values: User) => {
  const my_user: User = {
    username: values.password,
    password: values.password,
    remember: values.remember,
    mytime: new Date().getTime(),
    pasttime: 10080000 * 60
  }
  localStorage.setItem("my_user", JSON.stringify(my_user))
  router.push({ path: '/home' })
};
const onFinishFailed = (errorInfo: string) => {
  console.log("Failed:", errorInfo);
};
history.pushState(null, null as any, document.URL);
window.addEventListener('popstate', function () {
  history.pushState(null, null as any, document.URL);
});

</script>
<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.login-img {
  width: 50vw;
  height: 100vh;
}

.login-card {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-form {
    width: 500px;
    border: 1px solid #d6ecf0;
    padding: 20px;
    box-shadow:
      0 3px 2px 0px rgba(0, 0, 0, 0.1), 0 0px 4px 0 rgba(0, 0, 0, 0.1), 0 0px 16px 3px rgba(0, 0, 0, 0.0)
  }
}
</style>