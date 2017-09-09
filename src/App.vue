<template>
  <div id="app" class="app">
      <my-header ></my-header>
      <my-nav ></my-nav>
      <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/header/header.vue'
import myNav from './components/nav/nav.vue'
import {mapActions,mapState,mapMutations,mapGetters} from 'vuex'
import myFooter from './components/footer/footer'
export default {
  name: 'app',
  data(){
    return {
       
    }
   
  },
  components:{
    myHeader,
    myNav,
    myFooter
  },
  created(){
    //屏幕适配
  let pingkuan=document.documentElement.offsetWidth;
  //1080是设计稿给定的宽度
  let fs=pingkuan/750*100;
  document.documentElement.style.fontSize=fs+'px'
  //console.log(document.documentElement.style.fontSize)
  //this.$store.dispatch('getGoods');

  //调用异步函数，获取数据
  this.getGoods();
  this.getSellers();
  this.getRatings();
  this.getTags();
  this.getScore();

  },
 
  methods:{
      ...mapActions(['getGoods','getSellers','getRatings','getTags','getScore'])
  }
}
</script>

<style scoped lang="less">
@import "./common/less/z.less";
    .app{
        width:100%;
        height:100%;
        overflow:hidden;

    }
</style>
