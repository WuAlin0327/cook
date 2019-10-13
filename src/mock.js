// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

const Index = function(){
	
	let Carousel = [
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
			 ];
	let QuoteCook = [
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
	
	];
	return {
		Carousel,
		QuoteCook,
		sucess:true,
		}
}

const CookBook = function(){
	let menuList = [
		{
			title:"一日三餐",
			children:[
				{
					id:'1',
					title:'早餐',
					pic_url:'http://pic.ecook.cn/web/257352113.jpg!s4',
				},
				{
					id:'2',
					title:'中餐',
					pic_url:'http://pic.ecook.cn/web/257352185.jpg!s4',
				},
				{
					id:'3',
					title:'晚餐',
					pic_url:'http://pic.ecook.cn/web/260673621.jpg!s4',
				},
				{
					id:'4',
					title:'夜宵',
					pic_url:'http://pic.ecook.cn/web/260673623.jpg!s4',
				}
			]
		},
		{
			title:"家常菜谱",
			children:[
				{
					id:'5',
					title:'快手菜',
					pic_url:'http://pic.ecook.cn/web/257352844.jpg!s4',
				},
				{
					id:'6',
					title:'素食',
					pic_url:'http://pic.ecook.cn/web/260673637.jpg!s4',
				},
				{
					id:'7',
					title:'川菜',
					pic_url:'http://pic.ecook.cn/web/260673639.jpg!s4',
				},
				{
					id:'8',
					title:'汤羹',
					pic_url:'http://pic.ecook.cn/web/260673629.jpg!s4',
				},
				{
					id:'9',
					title:'粤菜',
					pic_url:'http://pic.ecook.cn/web/260673641.jpg!s4',
				},
				{
					id:'10',
					title:'下酒菜',
					pic_url:'http://pic.ecook.cn/web/260673651.jpg!s4',
				},
				{
					id:'11',
					title:'下饭菜',
					pic_url:'http://pic.ecook.cn/web/260673656.jpg!s4',
				},
				{
					id:'12',
					title:'家常菜',
					pic_url:'http://pic.ecook.cn/web/260673662.jpg!s4',
				},
				{
					id:'13',
					title:'凉菜沙拉',
					pic_url:'http://pic.ecook.cn/web/260673678.jpg!s4',
				},
			]
		}
	]
	return {
		data:menuList,
		sucess:true,
	}
}

// 在实现这个推荐接口的时候在后端需要随机返回数据，返回数据不能固定，因为这个是可以下拉刷新的
const Promote = function(){
		let itemList = [
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
	  return {
		  itemList,
		  sucess:true,
	  }
	}


// 模拟点击菜谱大全分类后的数据，在后端中处理时需要根据分类去取分类对应的数据返回
const CookList = function(){
	let itemList = [
		{
			"synopsis": "减肥健身吃什么？首先考虑的当然是蔬菜沙拉！沙拉酱油份多，我们直接划掉，其实酸奶不错的，沾蔬菜和水果都好吃。但我最喜欢的还是意大利香醋拌沙拉，酸酸的香香的特好吃。",
			"title": "蔬菜沙拉",
			"img": "http://pic.ecook.cn/web/263100068.jpg!s4",
			"id": "3846",
			"collect": "304",
			"praise": "16",
			"writer": "食空小狸"
		},
		{
			"synopsis": "腊八节，俗称“腊八” ，即农历十二月初八，汉族传统节日，民间流传着吃“腊八粥”，泡腊八蒜（有的地方是“腊八饭”）的风俗。“小孩小孩你别馋，过了腊八就是年。”腊八节是春节前的第一个节令，此后“年味”日渐浓起来。",
			"title": "腊八节+腊八粥",
			"img": "http://pic.ecook.cn/web/262722759.jpg!s4",
			"id": "3836",
			"collect": "200",
			"praise": "30",
			"writer": "妙江南"
		},
		{
			"synopsis": "腊八节，俗称“腊八” ，即农历十二月初八，汉族传统节日，民间流传着吃“腊八粥”，泡腊八蒜（有的地方是“腊八饭”）的风俗。“小孩小孩你别馋，过了腊八就是年。”腊八节是春节前的第一个节令，此后“年味”日渐浓起来。",
			"title": "腊八节+腊八粥",
			"img": "http://pic.ecook.cn/web/262722759.jpg!s4",
			"id": "3836",
			"collect": "200",
			"praise": "30",
			"writer": "妙江南"
		},
		{
			"synopsis": "腊八节，俗称“腊八” ，即农历十二月初八，汉族传统节日，民间流传着吃“腊八粥”，泡腊八蒜（有的地方是“腊八饭”）的风俗。“小孩小孩你别馋，过了腊八就是年。”腊八节是春节前的第一个节令，此后“年味”日渐浓起来。",
			"title": "腊八节+腊八粥",
			"img": "http://pic.ecook.cn/web/262722759.jpg!s4",
			"id": "3836",
			"collect": "200",
			"praise": "30",
			"writer": "妙江南"
		},
		{
			"synopsis": "腊八节，俗称“腊八” ，即农历十二月初八，汉族传统节日，民间流传着吃“腊八粥”，泡腊八蒜（有的地方是“腊八饭”）的风俗。“小孩小孩你别馋，过了腊八就是年。”腊八节是春节前的第一个节令，此后“年味”日渐浓起来。",
			"title": "腊八节+腊八粥",
			"img": "http://pic.ecook.cn/web/262722759.jpg!s4",
			"id": "3836",
			"collect": "200",
			"praise": "30",
			"writer": "妙江南"
		},
	]
	return{
		itemList,
		sucess:true,
		totalPgae:100,
		currentPage:1,
	}
}

const CookDetail = function(){
	let data = {
		img:'http://pic.ecook.cn/web/263084247.jpg',
		content:`,
		<h1 class="title_h1 font22 mtop0">糯米豆沙饼</h1><p class="recipe_desc font14">香甜软糯，营养又解馋</p><div class="recipe_author_content">
		<a class="disinline">
		<img alt="茹絮" class="recipe_author_img" onerror="handleErrorImage(259074901)" src="https://pic.ecook.cn/web/259074901.jpg!s1"/></a>
		<ul class="recipe_author_name_content">
		<li class="font16 recipe_author_name"><a>茹絮</a></li>
		<li class="recipe_author_sex">
		<img alt="girl" class="recipe_author_sex_img" src="https://m.ecook.cn/resources/m/images/girl.png"/>
		</li>
		</ul>
		<p class="recipe_author_care" onclick="handleOpenApp()">+关注</p>
		</div><div class="recipe_species">
		<p class="species">
		<span class="font18 species_num">612</span>
		<span class="font14 species_text">菜谱</span>
		</p>
		<p class="species">
		<span class="font18 species_num">2606</span>
		<span class="font14">粉丝</span>
		</p>
		<p class="species">
		<span class="font18 species_num">78</span>
		<span class="font14">关注</span>
		</p>
		</div><h3 class="title_h3 font16">食材</h3><div class="material">
		<ul class="material_ul">
		<li class="material_li"><span class="material_left" title="糯米粉">糯米粉</span> <span class="material_right">200克</span></li>
		<li class="material_li"><span class="material_left" title="温水">温水</span> <span class="material_right">150克</span></li>
		<li class="material_li"><span class="material_left" title="豆沙馅">豆沙馅</span> <span class="material_right">180克</span></li>
		<li class="material_li"><span class="material_left" title="白芝麻">白芝麻</span> <span class="material_right">适量</span></li>
		<li class="material_li"><span class="material_left" title="食用油">食用油</span> <span class="material_right">适量</span></li>
		</ul>
		</div><h3 class="title_h3 font16">步骤</h3><div class="step">
		<div class="step_detail" title="糯米豆沙饼,准备好材料">
		<img alt="糯米豆沙饼,准备好材料" class="step_img" onerror="handleErrorImage(263084248)" src="https://pic.ecook.cn/web/263084248.jpg!wd780"/>
		<p class="step_text font16">1. 准备好材料</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,&lt;a style='color:red;display:inline-block;' href='/shicai/ 520'&gt;糯米粉&lt;/a&gt;中加入温水搅拌均匀，水量不要一次性全部加入，边加入边搅拌至絮状">
		<img alt="糯米豆沙饼,&lt;a style='color:red;display:inline-block;' href='/shicai/ 520'&gt;糯米粉&lt;/a&gt;中加入温水搅拌均匀，水量不要一次性全部加入，边加入边搅拌至絮状" class="step_img" onerror="handleErrorImage(263084244)" src="https://pic.ecook.cn/web/263084244.jpg!wd780"/>
		<p class="step_text font16">2. <a href="/shicai/ 520" style="color:red;display:inline-block;">糯米粉</a>中加入温水搅拌均匀，水量不要一次性全部加入，边加入边搅拌至絮状</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,再用手揉成不粘手的软面团状态，放置一旁盖上保鲜膜备用">
		<img alt="糯米豆沙饼,再用手揉成不粘手的软面团状态，放置一旁盖上保鲜膜备用" class="step_img" onerror="handleErrorImage(263084237)" src="https://pic.ecook.cn/web/263084237.jpg!wd780"/>
		<p class="step_text font16">3. 再用手揉成不粘手的软面团状态，放置一旁盖上保鲜膜备用</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,把&lt;a style='color:red;display:inline-block;' href='/shicai/ 4729'&gt;豆沙馅&lt;/a&gt;分成30克为一份，揉圆备用">
		<img alt="糯米豆沙饼,把&lt;a style='color:red;display:inline-block;' href='/shicai/ 4729'&gt;豆沙馅&lt;/a&gt;分成30克为一份，揉圆备用" class="step_img" onerror="handleErrorImage(263084239)" src="https://pic.ecook.cn/web/263084239.jpg!wd780"/>
		<p class="step_text font16">4. 把<a href="/shicai/ 4729" style="color:red;display:inline-block;">豆沙馅</a>分成30克为一份，揉圆备用</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,糯米面团平均分成6份">
		<img alt="糯米豆沙饼,糯米面团平均分成6份" class="step_img" onerror="handleErrorImage(263084240)" src="https://pic.ecook.cn/web/263084240.jpg!wd780"/>
		<p class="step_text font16">5. 糯米面团平均分成6份</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,取一份面团揉圆压扁">
		<img alt="糯米豆沙饼,取一份面团揉圆压扁" class="step_img" onerror="handleErrorImage(263084234)" src="https://pic.ecook.cn/web/263084234.jpg!wd780"/>
		<p class="step_text font16">6. 取一份面团揉圆压扁</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,放入豆沙馅">
		<img alt="糯米豆沙饼,放入豆沙馅" class="step_img" onerror="handleErrorImage(263084235)" src="https://pic.ecook.cn/web/263084235.jpg!wd780"/>
		<p class="step_text font16">7. 放入豆沙馅</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,再利用虎口慢慢收口，然后收口捏紧">
		<img alt="糯米豆沙饼,再利用虎口慢慢收口，然后收口捏紧" class="step_img" onerror="handleErrorImage(263084238)" src="https://pic.ecook.cn/web/263084238.jpg!wd780"/>
		<p class="step_text font16">8. 再利用虎口慢慢收口，然后收口捏紧</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,然后用双手揉圆放在案板上，轻轻按压成饼状">
		<img alt="糯米豆沙饼,然后用双手揉圆放在案板上，轻轻按压成饼状" class="step_img" onerror="handleErrorImage(263084249)" src="https://pic.ecook.cn/web/263084249.jpg!wd780"/>
		<p class="step_text font16">9. 然后用双手揉圆放在案板上，轻轻按压成饼状</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,表面再撒上&lt;a style='color:red;display:inline-block;' href='/shicai/ 678'&gt;白芝麻&lt;/a&gt;，再轻轻按压使之服贴">
		<img alt="糯米豆沙饼,表面再撒上&lt;a style='color:red;display:inline-block;' href='/shicai/ 678'&gt;白芝麻&lt;/a&gt;，再轻轻按压使之服贴" class="step_img" onerror="handleErrorImage(263084246)" src="https://pic.ecook.cn/web/263084246.jpg!wd780"/>
		<p class="step_text font16">10. 表面再撒上<a href="/shicai/ 678" style="color:red;display:inline-block;">白芝麻</a>，再轻轻按压使之服贴</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,锅中刷油烧热">
		<img alt="糯米豆沙饼,锅中刷油烧热" class="step_img" onerror="handleErrorImage(263084245)" src="https://pic.ecook.cn/web/263084245.jpg!wd780"/>
		<p class="step_text font16">11. 锅中刷油烧热</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,放入饼胚，小火慢煎至表面金黄色">
		<img alt="糯米豆沙饼,放入饼胚，小火慢煎至表面金黄色" class="step_img" onerror="handleErrorImage(263084242)" src="https://pic.ecook.cn/web/263084242.jpg!wd780"/>
		<p class="step_text font16">12. 放入饼胚，小火慢煎至表面金黄色</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,再翻另一面煎至金黄色即可">
		<img alt="糯米豆沙饼,再翻另一面煎至金黄色即可" class="step_img" onerror="handleErrorImage(263084250)" src="https://pic.ecook.cn/web/263084250.jpg!wd780"/>
		<p class="step_text font16">13. 再翻另一面煎至金黄色即可</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,成品图">
		<img alt="糯米豆沙饼,成品图" class="step_img" onerror="handleErrorImage(263084241)" src="https://pic.ecook.cn/web/263084241.jpg!wd780"/>
		<p class="step_text font16">14. 成品图</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,图二">
		<img alt="糯米豆沙饼,图二" class="step_img" onerror="handleErrorImage(263084243)" src="https://pic.ecook.cn/web/263084243.jpg!wd780"/>
		<p class="step_text font16">15. 图二</p>
		</div>
		<div class="step_detail" title="糯米豆沙饼,图二">
		<img alt="糯米豆沙饼,图二" class="step_img" onerror="handleErrorImage(263084236)" src="https://pic.ecook.cn/web/263084236.jpg!wd780"/>
		<p class="step_text font16">16. 图二</p>
		</div>
		</div>`
	}
	
	return {
		data
	}
}
// Mock.mock( url, post/get , 返回的数据)；

Mock.mock('/api/index/carousel','get',Index)
Mock.mock('/cookbook','get',CookBook)
Mock.mock('/promote','get',Promote)
Mock.mock(/\/cooklist\/(.*?)/,'get',CookList)
Mock.mock(/\/cookdetail\/(.*?)/,'get',CookDetail)