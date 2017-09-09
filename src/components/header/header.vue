<template>
	<header  id="header">
		<div class="backg" style="background-image:url('/static/image/284720c92e16efe11ad8eca539de5jpeg.jpeg')">
		</div>
	   <div class="box" >
	   		<div class="h_content">
	   			<div class="h_content_l">
	   				<img :src="imgSrc">
	   			</div>
	   			<div class="h_content_r">
	   				<h1 class="logo">{{sellers.name}}</h1>
	   				<p class="delivery" v-if="sellers.delivery_mode">{{sellers.delivery_mode.text}}/{{sellers.order_lead_time}}分钟到达/{{sellers.piecewise_agent_fee.description}}</p>
	   				<p class="promotion"><span class="decrease"></span><span class="info">{{sellers.promotion_info}}</span></p>
	   			</div>
	   		</div>
	   		<div class="h_footer" v-if="sellers.activities" @click="toggleShow()">
	   			<i class="icon"></i>
	   			<span class="text">{{sellers.activities[0].description}}</span>
	   			<span class="num">{{sellers.activities.length}}个活动</span>
	   		</div>
	   		
	   </div>
	   <div class="detail" v-show="show" >
	   		<div class="wrapper clearfix">
	   			<div class="main">
	   				<h2>{{sellers.name}}</h2>
	   				<div class="star-wrapper">
	   					<my-star :size='48' :myClass="myHeaderClass"></my-star>
	   				</div>
	   				<div class="title">
	   					<div class="line">
	   					</div>
	   					<div class="text">
	   						优惠信息
	   					</div>
	   					<div class="line">
	   					</div>
	   				</div>
	   				<ul v-if="sellers.activities" class="activities">
	   					<li v-for="(item,index) in sellers.activities"><span :style='{backgroundColor:myColor[index]}' class="first">{{item.icon_name}}</span><span class="text">{{item.name}}</span></li>
	   				</ul>
	   				<div class="notice">
	   					<h2>商家公告</h2>
	   					<p>{{sellers.promotion_info}}</p>
	   				</div>
	   			</div>
	   		</div>
	   		<div class="close" @click="close()">
	   			<i class="icon-close"></i>
	   		</div>
	   </div>
	</header>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import star from "../star/star.vue"
export default {
		name:"header",
		data(){
			return{
				imgSrc:'/static/image/284720c92e16efe11ad8eca539de5jpeg.jpeg',
				show:false
				
			}
		},
		components:{
			myStar:star
		},
		computed:{
      		...mapState(['goods','sellers']),
      		...mapGetters(['myColor','myHeaderClass'])
  		},
  		methods:{
  			toggleShow(){
  				this.show=true;
  			},
  			close(){
  				this.show=false;
  			}
  		}
	}
</script>


<style scoped lang="less">
@import "../../common/less/z.less";
@import "../../common/css/self-icon.css";
	#header{
		width:100%;
		.h(268);
		overflow:hidden;
		position:absolute;
		left:0;
		top:0;
	
		.backg{	
			
			filter:blur(25px);
			background-size:350px 350px;
			width:100%;
			.h(268);
			&:after{
				background-color:#3190e8;
				position:absolute;
				left:0;
				top:0;

			}
		}
		
		.box{
			position:absolute;
			left:0;
			top:0;
			background-color:rgba(119,103,137,.43);
			.h(268);
			width:100%;
			.h_content{
				.h(128);
				.pt(48);
				.pb(36);
				display:flex;
				.h_content_l{
					flex:1;
					img{
						.w(128);
						.h(128);
						.ml(48);
						.mr(32);
						border:1px solid #fff;
						box-shadow:5px 5px 10 5;
					}
				}
				.h_content_r{
					flex:auto;
					.logo{
						.fs(32);
						.lh(36);
						font-weight:bold;
						color:#fff;
					}
					.delivery{
						.fs(18);
						.lh(24);
						color:#fff;
						font-weight:200;
						.mt(16);
					}
					.promotion{
						.fs(18);
						.lh(24);
						color:#fff;
						font-weight:200;
						.mt(20);
						white-space:nowrap;
						overflow:hidden;
						text-overflow:ellipsis;
						.decrease{
							display:inline-block;
							.w(24);
							.h(24);
							.mr(8);
							.brand('decrease_1');
							.bs(24,24);
						}
					}
				}
			}
			.h_footer{
				.h(56);
				.fs(20);
				.lh(56);
				color:#fff;
				.icon{
					display:inline-block;
					.w(44);
					.h(24);
					.brand('bulletin');
					.bs(44,24);
					.ml(24);
					.mr(8);
				}
				.num{
					float:right;
					.mr(4);
				}
			}
		
		}
		.detail{
			position:fixed;
			left:0;
			right:0;
			top:0;
			background-color:rgba(7,17,27,.8);			
			z-index:900;
			height:100%;
			overflow:auto;
			.wrapper{
				width:100%;
				min-height:100%;
				overflow:hidden;
				.main{
					.mt(128);
					.pb(128);
					h2{
						.fs(32);
						font-weight:700;
						.lh(32);
						color:#fff;
						text-align:center;
					}
					.star-wrapper{
						.mt(36);
						.pt(4);
						.pb(4);
						text-align:center;
					}
					.title{
						display:flex;
						width:80%;
						.mt(56);
						.mb(48);
						margin-left:auto;
						margin-right:auto;
						.line{
							flex:1;
							border-bottom:1px solid rgba(255,255,255,.2);
							.mt(12);
							.h(0);
						}
						.text{
							.fs(24);
							.pl(24);
							.pr(24);
							color:#fff;
							font-weight:700;
						}
					}
					.activities{
						li{
							.fs(24);
							.h(32);
							.mb(24);
							.lh(32);
							color:#fff;
							.ml(80);
							span.first{
								display:inline-block;
								.w(32);
								.h(32);
								text-align:center;
								.mr(12);
								border-radius:3px;	
							}
						}
					}
					.notice{
						.ml(80);
						.mr(80);
						h2{
							border:1px solid rgba(255,255,255,0.2);
							.w(180);
							.h(60);
							border-radius:15px;
							margin-left:auto;
							margin-right:auto;
							.lh(60);
						}
						p{
							.mt(48);
							.fs(24);
							.lh(48);
							color:#fff;
							font-weight:200;
						}
					}
				}
			}
			.close{
				.mt(-128);
				margin-left:auto;
				margin-right:auto;
				.mb(0);
				clear:both;
				position:relative;
				.w(64);
				.h(64);
				.fs(64);
				color:#fff;
				
			}
		}
	}
	

</style>