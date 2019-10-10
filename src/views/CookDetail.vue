<template>
  <div>
      <div class="recipe_banner">
			<img class="recipe_banner_img" v-show="title_img" :src="title_img" alt="加载中..." >
		</div>
      <div class="main" v-html="content">
          {{content}}
		</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            detail_id:null,
            content:'',
            title_img:'',
        }
    },
    created(){
        this.detail_id = this.$route.params.id;
        this.$http.GetDetail(this.detail_id).then((response)=>{
          this.title_img = response.data.data.img
          this.content = response.data.data.content
        })
        
    }
}
</script>

<style>
.title_h1,.recipe_desc,.recipe_author_content,.recipe_species,.material,.title_h3,.step,.tips{
    padding: 0 3px;
}
.main {
    /* max-width: 750px; */
    margin: auto;
    overflow: hidden;
    background: #ffffff;
}
.main {
    width: 100%;
    background: none;
    position: relative;
    top: -10px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
}
* {
    font-family: "苹方-简 常规体";
}
.recipe_detail_content {
    padding: 0 16px;
    width: calc(100% - 32px);
    width: -webkit-calc(100% - 32px);
    width: -moz-calc(100% - 32px);
    height: auto;
    padding-top: 32px;
    border-radius: 8px 8px 0 0;
    background: #ffffff;
    position: relative;
    top: -5px;
}
.mtop0 {
    margin-top: 0;
}
.title_h1 {
    font-family: "苹方-简 中黑体";
    color: rgb(51, 51, 51);
    margin-top: 32px;
    margin-bottom: 16px;
    text-align: left;
}
.font22 {
    font-size: 22px;
    line-height: 22px;
}
.recipe_author_content {
    width: 100%;
    height: 48px;
    line-height: 48px;
    margin-top: 32px;
}
.recipe_species {
    width: 100%;
    height: auto;
    margin-top: 24px;
    overflow: hidden;
}
.species {
    width: 32%;
    height: 100%;
    display: inline-block;
    text-align: center;
}
.font18 {
    font-size: 18px;
    line-height: 25px;
}
.species_num {
    margin-bottom: 8px;
    width: 100%;
    overflow: hidden;
    display: block;
}
.font14 {
    font-size: 14px;
    line-height: 19px;
}
.title_h3 {
    color: #666666;
    margin-top: 40px;
    margin-bottom: 8px;
    text-align: left;
}
.font16 {
    font-size: 16px;
    line-height: 22px;
}
.material {
    width: calc(100% - 48px);
    width: -webkit-calc(100% - 48px);
    width: -moz-calc(100% - 48px);
    height: auto;
    margin: auto;
}
.material_ul {
    width: 100%;
    height: auto;
    overflow: hidden;
}
.material_li {
    height: 48px;
    line-height: 48px;
    width: 100%;
    border-bottom: 1px dashed #A8A8A8;
}
li {
    list-style: none;
}
.material_left {
    width: 78%;
    height: 48px;
    line-height: 48px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    text-align: left;
}
.material_right {
    display: inline-block;
    width: 20%;
    height: 48px;
    line-height: 48px;
    font-weight: 'è‹¹æ–¹-ç®€ ç»†ä½“';
    color: #333;
    text-align: right;
    float: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.font16 {
    font-size: 16px;
    line-height: 22px;
}
.step {
    width: 100%;
    height: auto;
}
.step_detail {
    width: 100%;
    height: auto;
    margin-bottom: 32px;
}
.step_img {
    width: 100%;
    height: auto;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
}
img {
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
    border: 0;
    max-width: 100%;
    vertical-align: top;
}
.step_text {
    color: #666666;
    margin-top: 16px;
}
a {
    color: #000;
    text-decoration: none;
    display: block;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.recipe_author_img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
}
.disinline {
    display: inline-block;
    vertical-align: top;
}
.recipe_author_name_content {
    display: inline-block;
    width: calc(100% - 130px);
    width: -webkit-calc(100% - 130px);
    width: -moz-calc(100% - 130px);
    height: 48px;
    overflow: hidden;
    margin-left: 5px;
}
.font16 {
    font-size: 16px;
    line-height: 22px;
}
.recipe_author_name {
    color: rgb(102, 102, 102);
    font-family: "苹方-简 中黑体";
    text-align: left;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.recipe_author_sex_img {
    width: 9px;
    height: auto;
}
.recipe_author_care {
    width: 62px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    text-align: center;
    background: #f7f7f7;
    border-radius: 4px;
    color: #ffc000;
    display: inline-block;
    position: relative;
    top: -20px;
}
.recipe_banner {
    width: 100%;
    height: auto;
    text-align: center;
}
.recipe_banner_img {
    width: 100%;
     border-radius: 4px;
    height: 100%;
}

</style>

