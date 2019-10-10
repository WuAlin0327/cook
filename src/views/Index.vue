<template>
  <div style="margin-top:5px">
    <van-swipe style="height: 200px;" :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="(item,index) in carousel" :key="index">
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
        carousel:[
          {
            url:'',
            title:'黑眼豆豆（汤种法）',
            img:'https://pic.ecook.cn/web/263298602.jpg!wh882',
          },
          {
            url:'',
            title:'藜麦鸡胸沙拉',
            img:'https://pic.ecook.cn/web/263299748.jpg!wh882',
          },
          {
            url:'',
            title:'花菇炖鸡',
            img:'https://pic.ecook.cn/web/263299688.jpg!wh882',
          },
          {
            url:'',
            title:'花开富贵',
            img:'https://pic.ecook.cn/web/263299862.jpg!wh882',
          },
        ],
       QuoteCook:[
         {
           id:'2876',
           title:'菠菜排包',
           img:'http://pic.ecook.cn/web/262643251.jpg!s4'
         },
         {
           id:'2877',
           title:'全麦香葱花卷',
           img:'http://pic.ecook.cn/web/263452206.jpg!s4'
         },
         {
           id:'2892',
           title:'虾仁蒸蛋',
           img:'http://pic.ecook.cn/web/245400269.jpg!s4'
         },
         {
           id:'2884',
           title:'照烧鸡腿培根蛋炒饭',
           img:'http://pic.ecook.cn/web/262596434.jpg!s4'
         },
         {
           id:'2932',
           title:'红豆沙汤圆',
           img:'http://pic.ecook.cn/web/262860293.jpg!s4'
         },
         {
           id:'2940',
           title:'猪肉甜玉米馅抄手',
           img:'http://pic.ecook.cn/web/263019096.jpg!s4'
         },
         {
           id:'2945',
           title:'彩椒炒牛肚头',
           img:'http://pic.ecook.cn/web/263283649.jpg!s4'
         },
         {
           id:'2949',
           title:'红薯红枣粥',
           img:'http://pic.ecook.cn/web/262482421.jpg!s4'
         },

       ] 
      }
      
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