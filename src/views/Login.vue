<template>
  <div id="login">
      <img src="../assets/logo.png" width="50%" alt="">
    <van-cell-group>
        <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
    rows="3"
    left-icon="contact"
    autosize
  />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            left-icon="closed-eye"
            required
        />
        </van-cell-group>
        <div class="btn_box">
            <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="Login">登陆</van-button>
            <van-button color="#ff8c31" style="margin-left:10px;">注册</van-button>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods:{
        Login(){
            if(this.username == '' || this.password == ''){
                this.$notify({
                        type:'warning',
                        message:'请填写账号或者密码!',
                    });
                return false;
            }else{
                this.$notify({
                        type:'success',
                        message:'登陆成功!',
                    });
            }
        }
    }
}
</script>

<style>
    #login{
        margin-top: 35%;
        text-align: center;
        padding: 40px;
    }
    #login img{
        margin-bottom: 10px;
    }
    .van-cell {
            line-height: 44px;
    }
    .btn_box{
        margin-top: 10px;
    }
</style>