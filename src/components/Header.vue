<!-- wap顶部在这里写 -->
<template>
<div class="header">
  <div class="nav">
   <div class="logo">
        <img src="../assets/logo.png" height="60" alt="">
   </div>
   <div class="btn">
       <van-button type="info" to="/login" size="small">登陆</van-button>
   </div>
  </div>
  <div>
      <van-search
        v-model="search"
        placeholder="搜菜谱"
        show-action
        shape="round"
        @search="onSearch"
        class="search"
        >
        <div slot="action" @click="onSearch"><van-button icon="search" type="default" round size="small"/></div>
        </van-search>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            search:''
        }
    },
    methods:{
        onSearch(){
            console.log(this)
        }
    }
}
</script>

<style>
    .nav {
        height: 60px;
        clear:both;
    }
    .nav .logo{
        float: left;
    }
    .nav .btn{
        text-align: right;
        float: right;
        line-height: 60px;
        padding: 0 10px;
    }
    .search{
        width: 100%;
    }
</style>