<template>
    <div>
        <van-sticky>
            <van-tabs :swipeable="swipeable" animated sticky v-model="active" @change="changeTab" >
                <van-tab title="首页" name="index" to="/index">
				</van-tab>
                <van-tab title="菜谱大全" name="cookbook" to="/cookbook">
				</van-tab>
                <van-tab title="每日推荐" name="promote" to="/promote">
				</van-tab>
            </van-tabs>
    </van-sticky>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:'',
            tab_name:[
                'index',
                'cookbook',
				'promote'
            ],
			swipeable:true,
        }
    },
    watch:{
        '$route.path':function(){
            let name = this.$route.name
            for(var i=0;i<this.tab_name.length;i++){
                if(name==this.tab_name[i]){
                    this.active = name
                }
            }
            if(this.$route.name == 'cookdetail'){
                this.active='cookbook'
            }
        }
    },
	methods:{
		changeTab(){
			this.$router.push(this.active)
		}
	}

}
</script>

<style>

</style>