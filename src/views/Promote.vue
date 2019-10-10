<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    </van-pull-refresh>
  
    <div class="promote_item inner" v-for="(item,index) in itemList" :key="index">
          <router-link :to="'/cookdetail/'+item.id">
                <div class="chunk" style="margin-bottom:0px !important">
                    <div class="name one_line">{{item.title}}</div>
                    <div class="info">
                        <div class="author" style="font-size: 14px;color: #999999;">作者：{{item.writer}}</div>
                        <!--<div class="comnum" th:text="@{'评论：' + ${item.commentNum}}" style="margin-left: 8px"></div>-->
                        <!--<div class="colnum" th:text="@{'收藏：' + ${item.collectionNum}}"></div>-->
                        <div class="fr widthAuto disinline">
                            <span class="font14 color999 ">
                                <img src="https://m.ecook.cn/resources/m/images/view.png" style="width: 17px;height: 12px;position:relative;margin-top: 5px;">
                            </span>
                            <span class="font14 color999 mright20">&nbsp;&nbsp;{{item.praise}}</span>
                            <span class="font14 color999 " style="margin-left: 15px">
                                <img src="https://m.ecook.cn/resources/m/images/like.png" style="width: 15px;height: 14px;position:relative;margin-top: 5px;">
                            </span>
                            <span class="font14 color999 mright20">&nbsp;&nbsp;{{item.praise}}</span>
                        </div>
                    </div>
                    <div class="img">
                        <img :src="item.img" alt="红烧冬瓜">
                    </div>
                    <div class="content">
                        {{item.synopsis}}
                    </div>
                </div>
        </router-link>
        <van-divider :style="{ color: '#666', borderColor: '#666', padding: '0 16px' }">
    分割线
    </van-divider>
    </div>
  </div>
</template>

<script>

export default {
   data() {
    return {
      isLoading: false,
      itemList:[
          {
            "synopsis": "香芋营养丰富，含有粗蛋白，多种维生素和无机盐等成份。代替部分奶油来做蛋糕，健康不长肉。",
            "title": "香芋戚风蛋糕",
            "img": "http://pic.ecook.cn/web/262414210.jpg!wd780",
            "id": "3846",
            "collect": "304",
            "praise": "16",
            "writer": "食空小狸"
            },
            {
            "synopsis": "宝贝想吃披萨了，来不及发面，就用手抓饼做饼底给她做了个薄底披萨，没想到太好吃了，一个根本就不够！",
            "title": "手抓饼披萨",
            "img": "http://pic.ecook.cn/web/262992770.jpg!wd780",
            "id": "3847",
            "collect": "119",
            "praise": "12",
            "writer": "妞妞妈美食"
            },
            {
            "synopsis": "香蕉、牛奶、燕麦这样吃，无糖低卡又美味！大大的一口太满足了！\n只需简单的3步，丢进烤箱就OK啦。\n健康不怕胖，低卡营养早餐就是它！",
            "title": "香蕉烤燕麦",
            "img": "http://pic.ecook.cn/web/263022747.jpg!wd780",
            "id": "3848",
            "collect": "256",
            "praise": "17",
            "writer": "-薄荷糖的味道-"
            },
            {
            "synopsis": "这个口感是比较酥松的，一抿即化，味道层次很丰富，经过烘焙的沙拉酱是点睛之笔。",
            "title": "咸香芝士曲奇饼干",
            "img": "http://pic.ecook.cn/web/259514755.jpg!wd780",
            "id": "3849",
            "collect": "528",
            "praise": "26",
            "writer": "尖尖_实验室"
            },
            {
            "synopsis": "披萨做起来简单又好吃，是闺女的最爱。",
            "title": "火腿彩蔬披萨",
            "img": "http://pic.ecook.cn/web/263580437.jpg!wd780",
            "id": "3850",
            "collect": "60",
            "praise": "6",
            "writer": "妞妞妈美食"
            },
            {
            "synopsis": "蛋糕中最简单的也是最难的，那就是戚风蛋糕，有时候真的把你气疯！不断的摸索，积累经验，试过很多方子，终于确定这款戚风蛋糕的方子，每次做都很成功。\n喜欢戚风蛋糕松软的口感。",
            "title": "8寸戚风蛋糕",
            "img": "http://pic.ecook.cn/web/256456705.jpg!wd780",
            "id": "3851",
            "collect": "4240",
            "praise": "363",
            "writer": "枭笑私房菜"
            },
            {
            "synopsis": "火龙果就爱这么吃才够味！这才是最好吃的做法！",
            "title": "火龙果盒子蛋糕",
            "img": "http://pic.ecook.cn/web/262771618.jpg!wd780",
            "id": "3852",
            "collect": "124",
            "praise": "14",
            "writer": "敏茹意"
            },
            {
            "synopsis": "甜蜜蜜的牛轧糖，带着抹茶的清香～自己做的牛轧糖?真材实料，好吃不粘牙。如果你也是抹茶控，一定要试试！",
            "title": "抹茶蔓越莓牛轧糖",
            "img": "http://pic.ecook.cn/web/263143639.jpg!wd780",
            "id": "3853",
            "collect": "47",
            "praise": "7",
            "writer": "茹妈美食记"
            },
            {
            "synopsis": "前段时间抖音上火爆了一款早餐小面包，其实自己在家也能做，Lincf_v林学了这种用中种的方法制作，吃起来外表有嚼劲，而里面的面包却松软无比，再搭配上美味的芝士与培根，还个整个烘烤后的鸡蛋，既有面包的口感，又有蛋糕的绵软，吃起来让人十分满足，能量100%。今天将这美味的做法分享给小伙伴们，喜欢吃面包或蛋糕的可不要错过了~",
            "title": "鸡蛋面包",
            "img": "http://pic.ecook.cn/web/262834169.jpg!wd780",
            "id": "3854",
            "collect": "64",
            "praise": "13",
            "writer": "Lincf_v"
            },
            {
            "synopsis": "过年餐餐大鱼大肉，最大的感触就是：我实在吃不下了……\n为了对冲由此带来的后果，我做了这款无油低糖，又富含食物纤维的贝果。当然为了顾及被年菜宠坏的口味，还添加了肉桂和葡萄干“滋味交管好！”",
            "title": "葡萄干肉桂胚芽贝果",
            "img": "http://pic.ecook.cn/web/262818731.jpg!wd780",
            "id": "3855",
            "collect": "35",
            "praise": "11",
            "writer": "小筑饭"
            }
      ]
    }
  },
 

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
}
</script>

<style>
.inner {
    padding: 0 20px;
    width: auto;
    height: auto;
}
.inner .chunk {
    width: 100%;
    overflow: hidden;
    margin-bottom: 40px;
}
li {
    list-style: none;
}

.name {
    width: 100%;
    font-size: 16px;
    color: #333333;
    font-weight: bold;
    margin-bottom: 10px;
}

.one_line {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.info {
    overflow: hidden;
    margin-bottom: 22px;
}
.chunk .img {
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 16px;
}
.chunk .content {
    font-size: 14px;
    color: #666666;
    line-height: 22px;
    max-height: 88px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}   
.chunk .info .author {
    float: left;
}
.info .author {
    max-width: 150px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.chunk .info div {
    float: right;
}
.widthAuto {
    width: auto;
    display: inline-block;
}
.disinline {
    display: inline-block;
    vertical-align: top;
}
.color999 {
    color: #999999;
}
.font14 {
    font-size: 14px;
    line-height: 19px;
}
img {
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
    border: 0;
    max-width: 100%;
    vertical-align: top;
}
.promote_item{
    margin-top: 5px;
}
</style>