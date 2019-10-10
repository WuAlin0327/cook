<template>
  <div style="margin-top:5px">
    <van-swipe style="height: 200px;" :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="(item,index) in Carousel" :key="index">
        <div class="swipe_box">
          <span>{{item.title}}</span>
        </div>
        <img :src="item.img"/>
      </van-swipe-item>
    </van-swipe>
    <div class="navbar">
      <van-grid :border="false" :column-num="4">
        <van-grid-item to="/cookbook">
          <img src="../assets/美食.png" />
           <span>美食大全</span>
        </van-grid-item>
        <van-grid-item to="/cookielist/24">
          <img src="../assets/蛋糕.png" />
          <span>蛋糕</span>
        </van-grid-item>
        <van-grid-item to="/cookielist/23">
          <img src="../assets/汉堡.png" />
          <span>汉堡</span>
        </van-grid-item>
        <van-grid-item to="/cookielist/60">
          <img src="../assets/火锅.png" />
          <span>火锅</span>
        </van-grid-item>
    </van-grid>
    </div>
    <div class="quote">
      <h3>今天适合吃这些～</h3>
       <van-grid :border="false" :column-num="2">
        <van-grid-item :to="'/CookDetail/'+item.id" v-for="(item,index) in QuoteCook" :key="index">
          <img :src="item.img" />
           <span>{{item.title}}</span>
        </van-grid-item>
    </van-grid>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        Carousel:[],
		QuoteCook:[],
      }
      
    },
	beforeCreate() {
		this.$axios.get('/api/index/carousel').then((response)=>{
			this.Carousel = response.data.Carousel
			this.QuoteCook = response.data.QuoteCook
		})
	}
}
</script>

<style>
  .swipe_box{
    position: absolute;
    bottom: 25px;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: red;
    color: aliceblue;
    opacity:0.7;
    height: 30px;
    line-height: 30px;
  } 
  .navbar ul li img{
    height: 100%;
    width: 100%;
  }
  .navbar ul li{
    float: left;
    padding: 5px;
    width: 20%;
  }
  .navbar{
    margin-top: 20px;
  }
  .navbar span{
    font-size: 14px;
  }
  .quote{
    margin-top: 10px;
    text-align: center;
  }
  .quote img{
    border-radius: 5px;
  }

  /* response = requests.get(url,headers=headers,proxies=proxy,timeout=5) */
</style>