<template>
    <div style="display: flex; justify-content: center ;align-items: center;width: 100%;height: 100vh   ;">
         <div style="border: 1px solid black; padding: 30px;">
            <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="Finish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: 'Please input your email!' }]"
    >
      <a-input v-model:value="formState.email">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>
      <a class="login-form-forgot" href=""></a>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button"  style="width: 100%;">
        Log in
      </a-button>
    </a-form-item>
  </a-form> 
         </div> 
      </div>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import axios from 'axios';
import {message} from 'ant-design-vue';
import {router} from '../../../router';
interface FormState {
  email: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  email: '',
  password: '',
  remember: true,
});
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.email && formState.password);
});
const api = "https://khaoniewback-production.up.railway.app"
const Finish = async () => {    try{
        const response=await axios.post(api+'/auth/login',{
      email:formState.email,
      password: formState.password
        });
        localStorage.setItem('token',
        response.data.access_token); 
        message.success('Login successful');
        router.push('/dashboard');
    }
    catch (error:any){
        message.error(error.response?.data?.message || 'Login failed');
    }
};
</script>
<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
