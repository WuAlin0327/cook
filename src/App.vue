<template>
  <div id="app">
    <Header v-if="!isLogin"></Header>
    <Tab v-if="!isLogin"></Tab>
    <Home></Home>
  </div>
</template>
<script>
import Header from './components/Header'
import Tab from './components/Tab'
import Home from './views/Home'
export default {
    data(){
      return {
        isLogin:false
      }
    },
    components:{
      Header,
      Tab,
      Home
    },
    watch:{
        '$route.path':function(){
            let name = this.$route.name
            if (name == 'login'){
              this.isLogin=true;
            }else{
              this.isLogin = false;
            }
        }
    },
    created(){	
      let name = this.$route.name
      if (name == 'login'){
              this.isLogin=true;
        }else{
          this.isLogin = false;
        }
    }
}
</script>
<style lang="stylus">
 *{
   margin 0;
   padding 0;
 }
</style>
