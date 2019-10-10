<template>
  <div>
       <div class="page">
        <van-pagination 
        v-model="currentPage" 
        :total-items="100" 
        :show-page-size="3" 
        force-ellipses
        @change="PageChange"
        />
    </div>
      <van-card
        :desc="item.synopsis"  
        :title="item.title"
        :thumb="item.img"
        v-for="(item,index) in ItemList"
        :key="index"    
        @click="GoDetail(item.id)"
    >
  
      <div slot="footer" class="footer">
          <span>作者:{{item.writer}}</span>
          <span><van-icon name="like-o" /> &nbsp;{{item.collect}}</span>
          <span><van-icon name="chat-o" />&nbsp;{{item.praise}}</span>
        </div>
    </van-card>
   
    
  </div>
</template>

<script>
import { Toast } from 'vant';
import { timeout } from 'q';
export default {
    data(){
        return{
            classes_id:null,
            ItemList:[],
            currentPage:1,
        }
    },
    created(){
        this.classes_id = this.$route.params.id;
        this.$http.GetCookList(this.classes_id,this.currentPage).then((response)=>{
            this.ItemList = response.data.data;
        })
    },
    methods:{
        GoDetail(id){
            this.$router.push({ name: 'cookdetail', params: { id: id }})
        },
        PageChange(){
            this.$toast.loading({
                mask: true,
                message: '加载中...'
            });

            this.$http.GetCookList(this.classes_id,this.currentPage).then((response)=>{
                this.ItemList = response.data.data;
                this.$toast.clear()
            })
        }
    }
}
</script>

<style>
    .footer span{
        margin-left:10px;
        
    }
    .footer{
        height:20px;
        line-height:20px;
    }
    .page{
        padding: 10px;
    }
</style>