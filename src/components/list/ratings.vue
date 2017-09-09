<template>
   <div id="ratings" ref="ratings">
	   	<div class="wrapper">
	   		<div class="title">
	   			<div class="title-l">
	   				<h2>{{(score.food_score).toFixed(1)}}</h2>
	   				<p class="assessment">综合评价</p>
	   				<p class="exceed">高于周边商家{{((score.compare_rating)*100).toFixed(1)}}</p>
	   			</div>
	   			<div class="title-r">
	   				<div class="server item">
	   					<p class="title-r-l">服务态度</p>
	   					<div class="star-wrapper">
		   					<my-star :size='36' :myClass="myRatingServerClass"></my-star>
		   				</div>
		   				<strong>{{(score.overall_score).toFixed(1)}}</strong>
	   				</div>
	   				<div class="food item">
	   					<p class="title-r-l">菜品评价</p>
	   					<div class="star-wrapper">
		   					<my-star :size='36' :myClass="myRatingFoodClass"></my-star>
		   				</div>
		   				<strong>{{(score.service_score).toFixed(1)}}</strong>
	   				</div>
	   				<div class="time item">
	   					<p class="t_text title-r-l">送达时间</p>
	   					<p class="t_time">{{score.deliver_time}}分钟</p>
	   				</div>
	   			</div>
	   		</div>
	   		<div class='contain'>
	   			<ul class="tags">
	   				<li v-for="(item,index) in tags" @click="toggle(index)" :class="{'on':index==selected}">
	   					{{item.name}}({{item.count}})
	   				</li>
	   			</ul>
	   			<div class="rating-wrapper">
	   				<my-rating ></my-rating>
	   			</div>
	   		</div>
   		</div>
   </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex';
import star from '../star/star.vue';
import rating from '../rating/rating.vue';
	export default {
		name:"ratings",
		data(){
			return{
				selected:0
			}
		},
		components:{
			myStar:star,
			myRating:rating
		},
		created(){
			
		},
		mounted(){
			this.set_initRatingScroll(this.$refs.ratings)
		},
		computed:{
			...mapState(['ratings','tags','score']),
			
		},
		methods:{
			...mapActions(['set_initRatingScroll']),
			toggle(i){
				this.selected=i;
			}
		}
	}
</script>


<style scoped lang='less'>
@import '../../common/less/z.less';
@import '../../common/css/self-icon.css';
	#ratings{
		position:fixed;
		.t(348);
		.b(100);
		width:100%;
		overflow:hidden;
		background:rgba(77,85,93,.3);
		.wrapper{
			.title{
			.pt(36);
			.pb(36);
			.h(168);
			background:#fff;
			display:flex;
			.title-l{
				.flex_basis(275);
				text-align:center;
				border-right:1px solid rgba(143,153,159,.4);
				h2{
					.mt(12);
					.fs(48);
					color:#f40;
					font-weight:700;
				}
				.assessment{
					.fs(24);
					color:rgb(7,17,27);
					.lh(24);
					.mt(16);
				}
				.exceed{
					.fs(20);
					color:rgb(143,153,159);
					.mt(16);
				}
			}
			.title-r{
				flex:1 1 auto;
				.pl(48);
				.pr(48);
				.fs(24);
				color:rgb(7,17,27);
				.lh(36);
				.item{
					display:flex;
					.mb(12);
					.t_time{
						color:rgb(147,153,159);
					}
					strong{
						color:#f40;
					}
					.title-r-l,.star-wrapper{
						.mr(20);
					}
				}
			}
		
		   }
		   .contain{
		   		.pl(36);
		   		.pr(36);
		   		.mt(20);

		   		background:#fff;

		   		.tags{
		   			.pb(36);
		   			li{
		   				.fs(28);
		   				.lh(32);
		   				.p(16,16,16,16);
		   				display:inline-block;
		   				color:rgb(77,85,93);
		   				background-color:rgba(77,85,93,.3);
		   				border-radius:4px;
		   				.mr(16);
		   				&.on{
		   					background:rgb(0,160,220);
		   				}

		   			}
		   		}
		   }
		}
	}

</style>