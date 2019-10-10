<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text="下拉刷新推荐列表.." loosing-text="换一批..">
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
	</van-pull-refresh>
  </div>
</template>

<script>

export default {
   data() {
    return {
      isLoading: false,
      itemList:[]
    }
  },
  beforeCreate() {
	this.$http.GetPromote()
	.then((response)=>{
		console.log(response)
		this.itemList = response.data.itemList
	})
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
		this.$http.GetPromote()
		.then((response)=>{
			console.log(response)
			this.itemList = response.data.itemList
		})
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