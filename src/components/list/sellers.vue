<template>
   <div id="sellers" ref="sellers">
   		<div>
	   		<div class="server">
	   			<h3>活动与服务</h3>
	   			<ul v-if="sellers.activities" class="activities">
					<li v-for="(item,index) in sellers.activities">	
						<span :style='{backgroundColor:myColor[index]}' class="first">{{item.icon_name}}</span>
						<span class="text">{{item.name}}</span>
					</li>
				</ul>
				<ol v-if="sellers.supports" class="supports">
					<li v-for="item1 in sellers.supports">
						<span class="first">{{item1.icon_name}}</span>
						<span class="text">{{item1.description}}</span>
					</li>
				</ol>
	   		</div>
	   		<div class="info">
	   			<h3>商家信息</h3>
	   			<p>{{sellers.description}}</p>
	   			<div class="tel detail">
	   				<h4>商家电话</h4>
	   				<p class="num">{{sellers.phone}}</p>
	   				<span class="icon icon-keyboard_arrow_right"></span>
	   			</div>
	   			<div class="address detail">
	   				<h4>地址</h4>
	   				<p>{{sellers.address}}</p>
	   			</div>
	   			<div class="time detail">
	   				<h4>营业时间</h4>
	   				<ul>
	   					<li v-for="item in sellers.opening_hours">
	   						{{item}},
	   					</li>
	   				</ul>
	   			</div>
	   		</div>
	   		<div class="qualification">
	   			<h3>营业资质</h3>
	   			<span class="icon icon-keyboard_arrow_right"></span>
	   		</div>
	   	</div>
   </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
	export default {
		name:"sellers",
		mounted(){
		
			this.set_initsellerSc(this.$refs.sellers)
			
			
		},
		components:{

		},
		computed:{
			...mapState(['sellers']),
			...mapGetters(['myColor'])
		},
		methods:{
			...mapActions(['set_initsellerSc'])
		}
	}
</script>


<style scoped lang="less">
@import '../../common/less/z.less';
@import '../../common/css/self-icon.css';
#sellers{
	position:fixed;
	.t(348);
	.b(100);
	width:100%;
	overflow:hidden;
	background-color:rgba(7,17,27,.2);
	.server{
		background-color:#fff;
		border-bottom:1px solid #fff;
		.pl(20);
		.pb(10);
		.pt(20);
		.pr(20);
		h3{
			.fs(30);
			font-weight:700;
			.mb(20);
		}
		.activities,.supports{
			li{
				.fs(24);
				.h(32);
				.mb(24);
				.lh(32);
				color:#fff;
				.ml(20);
				display:flex;
				.first{
					display:inline-block;
					.w(32);
					.h(32);
					text-align:center;
					.mr(12);
					border-radius:3px;
					flex:0,0,auto;
				}
				.text{
					color:rgba(7,17,27,.6);
					flex:1,1,auto;
				}
			}
		}
		.supports{
			.first{
				color:rgba(7,17,27,.6);
				border:1px solid rgba(7,17,27,.2);
			}
		}
	}
	.info{
		.mt(30);
		background-color:#fff;
		
		.pl(20);
		.pb(10);
		.pt(20);
		.pr(20);
		h3{
			.fs(30);
			font-weight:700;
			.mb(20);
		}
		p{
			.fs(24);
			.lh(32);
			.pb(30);
			color:rgba(7,17,27,.6);
			
		}

		.detail{
			display:flex;
			justify-content:space-between;
			border-top:1px solid rgba(7,17,27,.2);
			.h(120);
			align-items:center;
			
			h4{
				.fs(28);
				font-weight:700;
			}
			p{
				.fs(24);
				.lh(32);
				max-width:70%;
				text-align:right;
				.mt(30);
				&.num{
					.mr(40);
				}
			}
			.icon{
				position:absolute;
				.r(0);
				.fs(40);
				color:rgba(7,17,27,.6);
			}
			ul{
				.fs(24);
				.lh(32);
				max-width:70%;
				display:flex;
				text-align:right;
				color:rgba(7,17,27,.6);
			}
		}
	}
	.qualification{
		background-color:#fff;
		border-bottom:1px solid #fff;
		.pl(20);
		.pb(10);
		.pt(20);
		.pr(20);
		.mt(20);
		display:flex;
		h3{
			.fs(30);
			font-weight:700;
			.mb(20);
		}
		.icon{
			position:absolute;
			.r(0);
			.fs(40);
			color:rgba(7,17,27,.6);
		}
	}
}
</style>