<template>
<div class="loginContainer">
    <div class="login">
        <div class="loginTtile">
            <p>vt</p>
        </div>
        <el-input placeholder="账号" v-model="username">
      <template #prepend>
          <el-icon :size="15">
      <user />
    </el-icon>
      </template>
    </el-input>
     <el-input placeholder="密码" type="password" v-model="password"  show-password >
      <template #prepend>
          <el-icon :size="15">
      <lock />
    </el-icon>
      </template>
    </el-input>

    <el-button type="primary" size="large" style="width:100%;margin:15px 0;" @click="Login">登录</el-button>
    
    </div>
</div>


</template>

<script setup lang='ts'>
import { User,Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import {login} from '@/config/api'
import { mainStore } from '@/store/store'
const store = mainStore()
const router=useRouter()
    let a=ref('12')
    let account=reactive({
        username:'admin',
        password:'123456',
    })
    const {username,password}=toRefs(account)
    
  const Login = () => {
     return   login({username:username.value,password:password.value}).then((res:any) => {
           console.log(res);
          if(res.code==0){
            //将角色存入store
            store.role=res.role
            localStorage.setItem('TOKEN',res.data.token)
            router.push({
              path:'/dashboard'
            })
              //登录成功
            ElMessage.success('登录成功')
          }else if(res.code==1){
              //登录失败
              ElMessage.error(res.msg)
          }
      })
  }
   
</script>
    
<style lang="scss" scoped>
.loginContainer{
      position: relative;
    width: 100%;
    height: 100vh;
     background-color: $theme-color;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login{
     position: relative;
    width: 360px;
    max-width: 100%;
    padding:15px;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid #eee;
    box-shadow: 0px 0px  50px rgba(255,255,255,0.3);
    border-radius: 5px;
    background-color: #ffffff;
    .loginTtile{
        text-align: center;
        font-size: 50px;
        font-weight:bold;
    }
    .el-input{
        margin:6px 0;
    }
}
</style>