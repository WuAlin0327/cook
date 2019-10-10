<template>
  <div>
      <!-- v-for="(image, index) in images" :key="index" -->
      <div v-for="(menu,index) in memuList" :key="index" class="classes">
          <h2>{{ menu.title }}</h2>
            <van-grid>
                <van-grid-item :to="'/cookielist/'+item.id" v-for="(item,index1) in menu.children" :key="index1">
                    <van-image :src="item.pic_url" />
                    {{item.title}}
                </van-grid-item>
       
            </van-grid>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            memuList:[]
        }
    },
    beforeCreate(){
        this.$http.GetCookBook().then((response)=>{
            this.memuList = response.data.data
        })
        // console.log(this.memuList);
    }
}
</script>

<style>
    h2{
        font-size: 18px;
        border-bottom: 1px solid #d2f0f4;
        padding: 10px;
    }
    .classes{
        padding: 5px;
    }
</style>