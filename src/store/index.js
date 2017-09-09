import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
import Bscroll from 'better-scroll';
export default new Vuex.Store({
	state :{
		goods:[],
		sellers:{},
		ratings:[],
		tags:[],
		score:{},
		sidebarSc:{},
		mainSc:{},
		scrollY:0,
		sellectFoods:[
			{
				count:0,
				price:0
			}
		],
		listCart:{},
		sellerSc:{},
		ratingSc:{},
	},

	getters:{
		myHeaderClass(state){
			let itemClass=[];
				let LENGTH=5;
				let CL_ON='on';
				let CL_HALF='half';
				let CL_OFF='off';
				let myScore=Math.floor(state.sellers.rating *2)/2;
				for(var i=1;i<myScore;i++){
					itemClass.push(CL_ON);
				}
				if(myScore%1){
					itemClass.push(CL_HALF);
				}
				while(itemClass.length<LENGTH){
					itemClass.push(CL_OFF);
				}
				// console.log(itemClass)
				return itemClass
		},
		myRatingServerClass(state){
				let itemClass=[];
				let LENGTH=5;
				let CL_ON='on';
				let CL_HALF='half';
				let CL_OFF='off';
				let myScore=Math.floor(state.score.overall_score *2)/2;
				for(var i=1;i<myScore;i++){
					itemClass.push(CL_ON);
				}
				if(myScore%1){
					itemClass.push(CL_HALF);
				}
				while(itemClass.length<LENGTH){
					itemClass.push(CL_OFF);
				}
				// console.log(itemClass)
				return itemClass
		},
		myRatingFoodClass(state){
				let itemClass=[];
				let LENGTH=5;
				let CL_ON='on';
				let CL_HALF='half';
				let CL_OFF='off';
				let myScore=Math.floor(state.score.service_score *2)/2;
				for(var i=1;i<myScore;i++){
					itemClass.push(CL_ON);
				}
				if(myScore%1){
					itemClass.push(CL_HALF);
				}
				while(itemClass.length<LENGTH){
					itemClass.push(CL_OFF);
				}
				// console.log(itemClass)
				return itemClass
		},
		myRatingContentClass(state){
				let myClass=[];
				state.ratings.forEach(rating=>{
					let itemClass=[];
					let LENGTH=5;
					let CL_ON='on';
					let CL_HALF='half';
					let CL_OFF='off';
					let myScore=Math.floor(rating.rating_star *2)/2;
					for(var i=1;i<myScore;i++){
						itemClass.push(CL_ON);
					}
					if(myScore%1){
						itemClass.push(CL_HALF);
					}
					while(itemClass.length<LENGTH){
						itemClass.push(CL_OFF);
					}
					myClass.push(itemClass);
				})
				return myClass;
		},
		myColor(state){
			let colors=[];
			if(state.sellers.activities){
				for(var i=0;i<state.sellers.activities.length;i++){
					let color="#"+state.sellers.activities[i].icon_color;
					colors.push(color);
					// console.log(colors)
				}
			}
			
			return colors;
		},
		myImg(state){
			let imgs=[];
			state.goods.forEach(item1=>{
				
				let myimg=[];
				item1.foods.forEach(item2=>{

					let img='https://fuss10.elemecdn.com/f/3c/'+item2.image_path+'?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/';
					myimg.push(img);
				})
				imgs.push({item1:myimg})
				
			})
			console.log(imgs);
			return imgs;
		},
		totalCount(state,getters){
			let count=0;
			getters.sellectFoods.forEach(item=>{
				count+=item.count;
			});
			return count;
		},
		totalPrice(state,getters){
			let price=0;
			getters.sellectFoods.forEach(item=>{
				price+=item.specfoods[0].price*item.count;
			});
			return price;
		},
		payDesc(state,getters){
			if(getters.totalPrice===0){
				return `${state.sellers.float_minimum_order_amount}起送`;
			}else if(getters.totalPrice>0 && getters.totalPrice<state.sellers.float_minimum_order_amount){
				
				return `还差${state.sellers.float_minimum_order_amount-getters.totalPrice}元起送`
			}else{
				return `去结算`;
			}
		},
		sellectFoods(state){
			let myFoods=[];
			state.goods.forEach(item=>{
				item.foods.forEach(food=>{
					if(food.count){
						myFoods.push(food)
						//let myprice=food.specfoods[0].price;
					}
					
				})
			});
			//console.log(myFoods)
			return myFoods;
		}
	},
	mutations:{
		setGoods(state,res){
			state.goods=res.data;
			 console.log(state.goods);
		},
		setSeller(state,res){
			state.sellers=res.data;
			// console.log(state.sellers)
		},
		setRatings(state,res){
			state.ratings=res.data;
			console.log(state.ratings)
		},

		setTags(state,res){
			state.tags=res.data;
		},
		setScore(state,res){
			state.score=res.data;
		},
		_initSidebarScroll(state,dom){
			state.sidebarSc=new Bscroll(dom,{click:true});
			state.sidebarSc.refresh();
		},
		_initmainScroll(state,dom){
			state.mainSc=new Bscroll(dom,{click:true,probeType:3});
			state.mainSc.refresh();
			//console.log(dom)
			state.mainSc.on('scroll',(pos)=>{
				state.scrollY=Math.abs(Math.round(pos.y));
			})
		},
		_initsellerSc(state,dom){
			state.sellerSc=new Bscroll(dom,{click:true});	
		},
		_initlistShow(state,dom){
			
			state.listCart=new Bscroll(dom,{click:true});	
		},
		_initratingScroll(state,dom){
			state.ratingSc=new Bscroll(dom,{click:true});
		},
		
	},
	actions:{
		getGoods({commit}){
			//let url="https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id=1020107";
			// axios.get('/goods',{params:{url}})
			// 	.then(response=>{
			// 		commit('setGoods',JSON.parse(response.data))

			// 	}).catch(err=>console.log(err))
			 axios.get('/goods')
				.then(response=>{
					commit('setGoods',response)

				}).catch(err=>console.log(err))
		},
		getSellers({commit}){
			//let url="https://mainsite-restapi.ele.me/shopping/restaurant/1020107?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&latitude=39.90469&longitude=116.407173";
			axios.get('/sellers')
				.then(response=>{
					//console.log(typeof response.data);
					commit('setSeller',response);
					
				}).catch(err=>console.log(err))
		},
		getRatings({commit}){
			//let url="https://mainsite-restapi.ele.me/ugc/v2/restaurants/1020107/ratings?has_content=true&offset=0&limit=10";
			axios.get('/ratings')
				.then(response=>{
					commit('setRatings',response);
					
				}).catch(err=>console.log(err))
		},
		getTags({commit}){
			//let url="https://mainsite-restapi.ele.me/ugc/v2/restaurants/1020107/ratings/tags";
			axios.get('/tags')
				.then(response=>{
					commit('setTags',response);
					
				}).catch(err=>console.log(err))
		},
		getScore({commit}){
			//let url="https://mainsite-restapi.ele.me/ugc/v2/restaurants/1020107/ratings/scores";
			axios.get('/score')
				.then(response=>{
					commit('setScore',response);
					
				}).catch(err=>console.log(err))
		},
		set_initSidebarScroll({commit},dom){
			setTimeout(function(){
				commit('_initSidebarScroll',dom)
			},100)
		},
		set_initmainScroll({commit},dom){
			setTimeout(function(){
				commit('_initmainScroll',dom)
			},100)
		},
		set_initlistShow({commit},dom){
			setTimeout(function(){
				commit('_initlistShow',dom)
			},100)
		},
		set_initsellerSc({commit},dom){
			setTimeout(function(){
				commit('_initsellerSc',dom)
			},100)
		},
		set_initRatingScroll({commit},dom){
			setTimeout(function(){
				commit('_initratingScroll',dom)
			},100)
		}
		
	}
})