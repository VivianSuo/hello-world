<template>
   <div id="star" :class="startype">
   		<span v-for='item in myClass' :class="item" class="mystar"></span>
   </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
	export default {
		name:"star",
		props:{
			size:{
				type:Number
			},
			myClass:{
				type:Array
			}
		},
		components:{

		},
		computed:{
			...mapState(['sellers']),
			
			startype(){
				console.log('star_'+this.size)
				return 'star_'+this.size
			}
		}
	}
</script>

<style scoped lang="less">
@import '../../common/less/z.less';
	#star{
		.fs(0);
		.mystar{
			display:inline-block;
			background-repeat:no-repeat;
		}
		&.star_24{
			.mystar{
				.mr(3);
				.w(20);
				.h(20);
				.bs(20,20);
				&.half{
					.brand('star24_half');
				}
				&.off{
					.brand('star24_off');
				}
				&.on{
					.brand('star24_on');
				}
			}
		}
		&.star_36{
			.mystar{
				.mr(6);
				.w(30);
				.h(30);
				.bs(30,30);
				&.half{
					.brand('star36_half');
				}
				&.off{
					.brand('star36_off');
				}
				&.on{
					.brand('star36_on');
				}
			}
		}
		&.star_48{
			&:last-child{
						.mr(0);
					}
			.mystar{
				.mr(15);
				.w(40);
				.h(40);
				.bs(40,40);
				&.half{
					.brand('star48_half');
				}
				&.off{
					.brand('star48_off');
				}
				&.on{
					.brand('star48_on');
				}
			}
		}
	}

</style>