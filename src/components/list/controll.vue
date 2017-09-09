<template>
   <div id="controll">
   	    <transition name="rotate">
	   		<div class="decrease icon icon-remove_circle_outline" v-show="food.count" @click.prevent.stop="decr()">
	   		</div>
	   	</transition>	
	   	<transition name="fade">
   			<div class="count" v-show="food.count">{{food.count}}</div>
   		</transition>
   		<div class="add icon-add_circle icon" @click.prevent.stop="addCount()"></div>
   </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
	export default {
		name:"controll",
		props:{
			food:{
				type:Object,
				required:true,

			}
		},
		components:{

		},
		methods:{
			addCount(){
				
				if(!this.food.count){
					this.$set(this.food,'count',1)
				}else{
					this.food.count++;
				}
			},
			decr(){
				if(this.food.count){
					this.food.count--;
				}
				
			}
		}
	}
</script>


<style scoped lang="less">
@import '../../common/less/z.less';
@import '../../common/css/self-icon.css';
#controll{
	
	.w(150);
	.h(40);
	.fs(50);
	
	color:rgb(0,160,220);
	display:flex;
	justify-content:flex-end ;
	.decrease{
		.w(50);
		.h(50);
		.flex_basis(40);
	}
	.count{
		.fs(28);
		.lh(50);
		.w(50);
		text-align:center;
		.flex_basis(40);
		color:#000;
	}
	.add{
		.w(50);
		.h(50);
		.flex_basis(40);
		
	}
	.rotate-enter,.rotate-leave-active{
		transform:translateX(200%) rotateZ(360deg); opacity:0;

	}
	.rotate-enter-active,.rotate-leave-active{
		transition:all 0.5s;
	}
	.fade-enter,.fade-leave-active{
		opacity:0;

	}
	.fade-enter-active,.fade-leave-active{
		transition:all 0.5s;
	}
}

</style>