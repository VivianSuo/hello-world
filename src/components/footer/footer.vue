<template>
   <footer id="myfooter">
   		<div class="footer" @click="toggleListShow">
	   		<div class="footer-l">
	   			<div class="circle">
	   				<div class="circle-w" :class="{'on':totalCount}" >
	   					<span class="icon-shopping_cart icon"></span>
	   				</div>
	   				<span class="total" v-show="totalCount">
	   					{{totalCount}}
	   				</span>
	   			</div>
	   			<div class="money" :class="{'on':totalPrice}">
	   				￥{{totalPrice}}
	   			</div>
	   			<div class="delivery">
	   				另需配送费￥{{sellers.float_delivery_fee}}元
	   			</div>
	   		</div>
	   		<div class="footer-r">
	   			<span :class="{'account':totalPrice>=sellers.float_minimum_order_amount}">{{payDesc}}</span>
	   		</div>
	   	</div>
	   	<transition name="show">
	   		<div class="listGood" v-show="listShow && totalCount" >
	   			
	   			<p class="title"><span class="cart">购物车</span><span class="clear" @click="clearAll(sellectFoods)">清空</span></p>
	   			<div ref="listShow" class="contain">
		   			<ul>
		   				<li v-for="item in sellectFoods" class="food border-1px">
		   					<h5>{{item.name}}</h5>
		   					<i>￥{{item.count*item.specfoods[0].price}}</i>
		   					<div class="controll-wrapper">
		   						<controll :food="item" class="controll"></controll>
		   					</div>
		   				</li>
		   			</ul>
	   			</div>
	   		</div>
   		</transition>
   		<transition name="meng">
   			<div class="fade" v-show="listShow && totalCount" @click.stop="listShow=false"></div>
   		</transition>
   </footer>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
import controll from '../list/controll'
	export default {
		name:"myfooter",
		data(){
			return{
				listShow:false
			}
		},
		components:{
			controll
		},
		mounted(){
			
		},
		computed:{
			...mapState(['goods','sellers']),
			...mapGetters(['payDesc','totalPrice','totalCount','sellectFoods'])
		},
		methods:{
			...mapMutations(['clearAll']),
			...mapActions(['set_initlistShow']),
			
			toggleListShow(){
				if(this.totalCount && this.listShow==false){
					this.listShow=true;

				}else{
					this.listShow=false;
				}
				if(this.listShow){
					if(!event._constructed){
					return;
					}else{
						this.$nextTick(()=>{
							this.set_initlistShow(this.$refs.listShow)
						})
					}
					
				}
				console.log(this.totalCount)
				console.log(this.listShow)
			},
			clearAll(){
				this.sellectFoods.forEach((food)=>{
					food.count=0;
					
				})
				this.listShow=false;
			},
			
		}
	}
</script>


<style scoped lang="less">
@import "../../common/less/z.less";
@import "../../common/css/self-icon.css";
	#myfooter{
		position:fixed;
		
		.l(0);
		.b(0);
		width:100%;
		.footer{
		position:absolute;
		.l(0);
		.b(0);
		z-index:800;
		
		background-color:#141d27;
		.h(100);
		width:100%;
		display:flex;
		.footer-l{
			display:flex;
			flex:1 1 auto;
			.circle{
				.w(112);
				.h(112);
				border-radius:50%;
				background-color:#141d27;
				position:relative;
				.t(-12);
				.l(-12);
				.ml(36);
				.total{
					.w(48);
					.h(30);
					border-radius:15px;
					background-color:red;
					color:#fff;
					.fs(24);
					.lh(30);
					position:absolute;
					.l(50);
					.t(-5);
					text-align:center;

				}
				.circle-w{
					.w(88);
					.h(88);
					border-radius:50%;
					background-color:rgba(200,200,200,.2);
					position:relative;
					.l(12);
					.t(12);
					display:flex;
					.icon{
						.fs(48);
						.lh(48);
						color:rgba(255,255,255,.4);
						margin:auto;
					}
					&.on{
						background:rgb(0,160,220);
						.icon{
							color:#fff;
						}
					}

				}
			}
			.money{
				.fs(32);
				color:rgba(255,255,255,.4);
				.lh(100);
				.ml(24);
				font-weight:700;
				.mr(24);
				&.on{
					color:#fff;
				}
			}
			.delivery{
				.fs(24);
				color:rgba(255,255,255,.4);
				.h(52);
				.mt(24);
				.lh(52);
				border-left:1px solid rgba(255,255,255,.4);
				.pl(24);
			}
		}
		.footer-r{
			.flex_basis(210);
			background-color:rgba(200,200,200,.2);
			.fs(24);
			color:rgba(255,255,255,.4);
			font-weight:700;
			.lh(100);
			text-align:center;
			.account{
				display:inline-block;
				width:100%;
				height:100%;
				background:rgb(0,160,220);
				.fs(32);
				font-weight:700;
				color:#fff;
			}
		}
	}
		.listGood{
			position:fixed;
			z-index:100;
			.mh(611);
			.l(0);
			.b(100);
			width:100%;
			.title{
				.h(80);
				.pl(36);
				.pr(36);
				background:#f3f5f7;
				.flex_b;
				.cart{
					.fs(28);
					.lh(80);
					color:rgb(7,17,27);
					font-weight:200;
				}
				.clear{
					.fs(24);
					.lh(80);
					color:rgb(0,160,220);
				}
			}
			.contain{
				position:relative;
				z-index:98;
				.mh(531);
				ul{
					.pl(36);
					background-color:#fff;
					.food{
						.h(96);
						.fs(28);
						.lh(96);
						color:rgb(7,17,27);
						position:relative;
						display:flex;
						i{
							font-style:normal;
							color:red;
							font-weight:700;
							position:absolute;
							.r(170);
						 }
						 .controll-wrapper{
						 	.controll{
						 		position:absolute;
						 		.r(20);
						 		.w(128);
						 		.h(40);
						 		.mt(28);
						 	}
						 }
					}
				}
			}
			
	}
		.show-enter,.show-leave-active{
			transform:translateY(100%);
		}
		.show-enter-active,.show-leave-active{
			transition:all .5s;
		}
		.fade{
			background-color:rgba(7,17,27,0.6);
			position:fixed;
			width:100%;
			height:100%;
			.l(0);
			.t(0);
			z-index:80;
		}
		.meng-enter,.meng-leave-active{
			opacity:0;
		}
		.meng-leave-active,.meng-enter-active{
			transition:all 0.5s;
		}
	}

</style>