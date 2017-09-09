<template>
	<transition name="fade">
		<div id="myfood" v-show="foodShow">
		  	<div class="wrapper"  v-show="foodShow">
		   		<div class="img-wrapper">
		   			<img src="">
		   			<p class="desc">{{food.description}}</p>
		   		</div>
		   		<div class="title">
		   			<h4>{{food.name}}</h4>
					<p class="sales">月售{{food.month_sales}}份  好评{{food.satisfy_rate}}%</p>
					<p class="money"><span>￥</span>{{food.specfoods[0].price}}</p>
		   		</div>
		   		<div class="controll-wrapper">
					<controll :food="food" class="controll"></controll>
				</div>
		   </div>
		    <div class="meng" v-show="foodShow" @click.stop="foodShow=false"></div>
		</div>
   </transition>
</template>

<script>
import controll from '@/components/list/controll.vue';
	export default {
		name:"myfood",
		data(){
			return{
				foodShow:false
			}
		},
		props:{
			food:{
				type:Object,
				
			}
		},
		components:{
			controll
		},
		methods:{
			show(){
				this.foodShow=true;
				
			}
		}
	}
</script>


<style scoped lang="less">
@import '../../common/less/z.less';
	#myfood{
		position:fixed;
		.l(0);
		.r(0);
		.b(0);
		.t(0);
		z-index:1000;
		.wrapper{
		border-radius:10px;
		position:absolute;
		background-color:#f3f5f7;
		width:82%;
		height:62%;
		top:18%;
		left:9%;
		z-index:910;
		background:#fff;
		&.move-enter,.move-leave-active{
			opacity:0;
		}
		&.move-enter-active,.move-leave-active{
			transition:all .5s;
		}
		.img-wrapper{
			position:relative;
			z-index:200;
			width:100%;
			.h(0);
			padding-top:100%;
			img{
				position:absolute;
				border-radius:10px;
				.t(0);
				.l(0);
				width:100%;
				height:100%;
				border:1px solid red;
			}
			.desc{
				.fs(20);
				position:absolute;
				.l(36);
				.r(36);
				.b(20);
				.lh(40);
			}
		}
		.title{
				.pl(36);
				.pt(36);
				border-bottom:1px solid rgba(7,17,27,.1);
				.pb(36);
				position:relative;
				h4{
					.fs(28);
					.lh(28);
					color:rgb(7,17,27);
					font-weight:700;
				}
		
			.sales{
				.fs(24);
				.lh(24);
				color:rgb(147,153,159);
				.mt(16);
			
				}
			.money{
				.fs(28);
				color:red;
				.mt(36);
				font-weight:700;
				}
			}
			.controll-wrapper{
				.controll{
					position:absolute;
					.r(20);
					.b(36);
				}
			}
		
		}
		.meng{
			position:fixed;
			.l(0);
			.r(0);
			.t(0);
			.b(0);
			background-color:rgba(0,0,0,.4);
			z-index:900;
		}
		
	}
</style>