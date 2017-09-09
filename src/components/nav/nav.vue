<template>
   <div id="nav">
	   <ul class="border-1px">
	   		<li class="tab-item"><router-link to="/">商品</router-link></li>
	   		<li class="tab-item"><router-link to="/ratings">评价</router-link></li>
	   		<li class="tab-item"><router-link to="/sellers">商家</router-link></li>
	   </ul>
	   <router-view></router-view>
   </div>
</template>

<script>

	export default {
		name:"nav",
		props:{
			
		},
		compontents:{

		}
	}
</script>


<style scoped lang="less">
@import "../../common/less/z.less";
#nav{
	position:absolute;
	.t(268);
	.l(0);
	width:100%;
	ul{
		display:flex;
		width:100%;
		
		.tab-item{
			flex:1;
			text-align:center;
			.h(80);
			.lh(80);
			.fs(28);
			&>a{
				display:block;
				.fs(28);
				&.router-link-exact-active{
					color:red;
				}
			}
		}
	}
}
	
</style>