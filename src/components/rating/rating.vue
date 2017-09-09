<template>
   <div id="rating">
		<ul class="rating">
			<li v-for="(item1,index) in ratings" class="list">
				<span class="icon"></span>
				<div class="main">
					<h4>{{item1.username}}</h4>
					<div class="star-wrapper">
						<my-star :size='24' :myClass="myRatingContentClass[index]"></my-star>
					</div>
					<p class="text" v-if="item1.rating_text">{{item1.rating_text}}</p>
					<p class="reply" v-if="item1.reply_text">{{item1.reply_text}}</p>
					<ul class="imgs">
						<li v-for="img in item1.item_ratings"  v-if="img.image_hash" >
							<img :src="img.image_hash">
						</li>
					</ul>
					<ol class="info">
						<li v-for="food in item1.item_ratings">
							{{food.food_name}}
						</li>
					</ol>
				</div>
				<div class="time">{{item1.rated_at}}</div>
			</li>
		</ul>
   </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex';
import star from '../star/star.vue';
	export default {
		name:"rating",
		
		components:{
			myStar:star
		},
		created(){
			
		},
		mounted(){
			
		},
		computed:{
			...mapState(['ratings']),
			...mapGetters(['myRatingServerClass','myRatingFoodClass','myRatingContentClass'])
		},
		methods:{
			
		}
	}
</script>


<style scoped lang='less'>
@import '../../common/less/z.less';
@import '../../common/css/self-icon.css';
#rating{
	

	.rating{
		.list{
			border-top:1px solid rgba(77,85,93,.2);
			.pt(20);
			.pb(20);
			position:relative;
			display:flex;
			.icon{
				display:inline-block;
				.w(50);
				.h(50);
			}
			.main{
				h4{
					.fs(24);
				}
				.star-wrapper{
					.mt(10);
					.mb(10);
				}
				.text,.reply{
					.fs(32);
					.lh(32);

				}
				.reply{
					color:#f40;
					.mt(20);
				}
				.imgs{
					display:flex;

					li{
						.w(100);
						.h(100);
						.mr(20);
						img{
							width:100%;
							height:100%;
						}
					}
				}
				.info{
					.fs(24);
					color:rgb(147,153,159);
					display:flex;
					.mt(20);
					li{
						.w(150);
						.h(32);
						.lh(32);
						.mr(20);
						border:1px solid rgb(150,190,159);
						white-space:nowrap;
						overflow:hidden;
						text-overflow:ellipsis;
					}
				}
			}
			.time{
				.fs(24);
				position:absolute;
				.r(0);
				.t(20);
				color:#ccc;
			}
		}
	}
}
	

</style>