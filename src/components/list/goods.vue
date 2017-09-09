<template>
   <div id="goods">
   		<div class="siderbar" ref="siderbar">
   			<ul>
   				<li v-for="(item,index) in goods" :class="{'on':currentIndex===index}" @click="moveHeight(index,$event)">
   					<div class="border-1px">
	   					<span>
	   						{{item.name}}
	   					</span>
   					</div>
   				</li>
   			</ul>
   		</div>
   		<div class="main" ref="main">
   			<ul class="goodsList" ref="goodsList">
   				<li v-for="(item,index1) in goods" class="main-height-hook" >
   					<h3><strong>{{item.name}}</strong><span>{{item.description}}</span></h3>
   					<ul class="itemList">
   						<li v-for="(food,index2) in item.foods" class="border-1px" @click="selectFood(food,$event)">
   							<img :src="myImg[index2]">
   							<div class="info"> 
	   							<h4>{{food.name}}</h4>
	   							<p class="description">{{food.description}}</p>
	   							<p class="sales">月售{{food.month_sales}}份  好评{{food.satisfy_rate}}%</p>
	   							<p class="money"><span>￥</span>{{food.specfoods[0].price}}</p>
	   							<div class="controll-wrapper">
   									<controll :food="food"></controll>
   								</div>
   							</div>
   							
   						</li>
   					</ul>
   				</li>
   			</ul>
   		</div>
   		<my-food :food="selectedFood" ref="food" ></my-food>
   		
   		
   </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
import controll from '@/components/list/controll.vue';
import myFood from '@/components/food/food.vue';
	export default {
		name:"goods",
		data(){
			return{
				listHeight:[],
				selectedFood:{}
			}
		},
		components:{
			controll,
			myFood
		},
		mounted(){
			
				this.set_initSidebarScroll(this.$refs.siderbar);
				this.set_initmainScroll(this.$refs.main)

				let lis=this.$refs.main.querySelectorAll('.main-height-hook');
				let self=this;

				//异步的调用这个函数的目的是为了等待数据请求完毕后，才能获得lis些个元素
				setTimeout(()=>{
					self.myHeight();
				},300)
				
				
		},
		
		computed:{
			...mapState(['goods','scrollY','mainSc','sidebarSc']),
			...mapGetters(['myImg']),
			
			currentIndex(){
				
				for(var i=0;i<this.listHeight.length;i++){
					if(!this.listHeight[i+1] || this.scrollY>=this.listHeight[i] && this.scrollY<this.listHeight[i+1]){
						return i;
					}
				};
				return 0;
				
			}

		},
		
		methods:{
			...mapActions(['set_initSidebarScroll','set_initmainScroll']),
			myHeight(){
				let lis=this.$refs.main.querySelectorAll('.main-height-hook');
			
				let height=0;
				this.listHeight.push(height);
				for(var i=0;i<lis.length;i++){
					height+=lis[i].offsetHeight;
					this.listHeight.push(height);
				}
				},
			moveHeight(index,event){
				if(!event._constructed){
					return;
				}
				this.currentIndex=index;

				let lis=this.$refs.main.querySelectorAll('.main-height-hook');
				this.mainSc.scrollToElement(lis[index])
				console.log(index)
				},
			selectFood(food,event){
				if(!event._constructed){
					return;
				}
				this.selectedFood=food
				this.$refs.food.show();
				console.log(food.name)
				}
			}
		
	}
</script>


<style scoped lang="less">
@import "../../common/less/z.less";
	#goods{
		position:fixed;
		.t(348);
		.b(100);
		width:100%;
		overflow:hidden;
		display:flex;
		
		.siderbar{
			.flex_basis(160);
			flex-grow:0;
			flex-shrink:0;
			
			border-right:1px solid #000;
			ul{
				
				.fs(20);
				color:rgb(77,85,93);
				background-color:#f3f5f7;
				
				li{
					.h(108);
					.pl(20);
					.pr(20);
					div{
						.h(108);
						display:flex;
						
						span{
							margin:auto;

						}
					}
					&.on{
					background-color:#fff;
					border-left:3px solid blue;
				}
				}
				
			}
		}
		.goodsList{
			h3{
				.fs(30);
				color:rgb(147,153,159);
				.pl(20);
				.lh(40);
				.h(40);
				background-color:rgba(7,17,27,.1);
				border-left:4px solid rgb(147,153,159);
				span{
					.fs(18);
					color:rgb(77,85,93);
					.ml(10);
				}
			}
			.itemList{
				li{
					display:flex;
					.pt(30);
					.pb(30);
					.pl(36);
					.h(180);
					position:relative;
					img{
						.w(150);
						.h(150);
						flex:0 0 auto;
						
						
					}
					.info{
						.ml(20);
						flex:1 1 auto;
						h4{
							.fs(28);
							.lh(28);
							color:rgb(7,17,27);
						}
						
					
					.description,.sales{
						.fs(20);
						.lh(28);
						color:rgb(147,153,159);
						.mt(16);
					
					}
					.money{
						.fs(28);
						color:red;
						.mt(15);
					}
					.controll-wrapper{
						position:absolute;
						.r(36);
						.b(30);
					}
					}
				}
			}
		}

	}
	
</style>