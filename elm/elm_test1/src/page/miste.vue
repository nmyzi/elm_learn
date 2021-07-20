<template>
<div>
    <div class="index01">
        <div>
        <icon class="pos" slot="icon" name="posi"></icon>
        <div class="address01">浙江工商大学浙江工商大学</div>
        </div>
        <div class="search01">
            <icon class='sea' slot="icon" name="search"></icon>
            <span class="in">搜索饿了么商家、商品名称</span>
        </div>    
    </div>
    <div class="food">
    <mt-swipe class="mtswipe" :auto="0">
        <mt-swipe-item  v-for="items in foodtype" :key="items.id" class="mtitem" >
            <div v-for="item in items">
                <div class="imgitem"><img :src="imgBaseurl+item.image_url"></div>
                <div class="titleitem">{{item.title}}</div>
            </div>
        </mt-swipe-item>
    </mt-swipe>
    </div>
    <div class="shop_">
        <span class="shop"> &nbsp;&nbsp;&nbsp;推荐商家&nbsp;&nbsp;&nbsp; </span>
    </div>
        
    <mt-tabbar class="sortstyle" v-model="$store.state.shopsort">
            <mt-tab-item class='myitem' id='compre'>
                <div class="content">综合排序</div>
            </mt-tab-item>
            <mt-tab-item class='myitem' id='nearest'>
                <div class="content">距离最近</div>
            </mt-tab-item>
            <mt-tab-item class='myitem' id='sale'>
                <div class="content">销量最高</div>
            </mt-tab-item>
            <mt-tab-item class='myitem' id='fast'>
                <div class="content">配送最快</div>
            </mt-tab-item>
    </mt-tabbar>
    <div v-if="this.$store.state.shopsort=='compre'">
        <compre/>
    </div>
    <div v-if="this.$store.state.shopsort=='fast'">
        <fast/>
    </div>
    <div v-if="this.$store.state.shopsort=='sale'">
        <sale/>
    </div>
    <div v-if="this.$store.state.shopsort=='nearest'">
        <nearest/>
    </div>
    <bottom/>
</div>
</template>
<script>
import bottom from "../components/bottom.vue"
import compre from "../components/compre.vue"
import fast from "../components/fast.vue"
import sale from "../components/sale.vue"
import nearest from "../components/nearest.vue"
export default {
    name:'miste',
    data(){
        return{
            foodtype:[],
            imgBaseurl:'https://fuss10.elemecdn.com',
            myshopstyle:''
        }
    },
    components:{
        bottom,
        compre,
        fast,
        sale,
        nearest
    },
    mounted:function(){
        this.$http.get('http://cangdu.org:8001/v2/index_entry').then(response=>{
            console.log(response);
            var foodbody=response.body;
            var num=parseInt(foodbody.length/8);
            var foodtype=[];
            var arr=[];
            for(var i=0;i<num;i++){
                arr=[];
                for(var h=0;h<8;h++){
                    arr.push(foodbody[i*8+h]);
                }
                foodtype.push(arr);
            }
            arr=[];
            if(num*8<foodbody.length){
            for(var k=num*8;k<foodbody.length;k++){
              arr.push(foodbody[num*8+k]) 
            }
            category.push(arr);
            }
            this.foodtype=foodtype;
            console.log(this.foodtype[0]);
            
        })
    },
    computed:{
        gostyle:function(){
            return this.$store.state.shopsort
        }
    },
    
}
</script>
<style scoped>
.index01{
    position: fixed;
    left: 0;
    top: 0;
    width:100%;
    height: 3.6rem;
    padding: .266667rem .373333rem 0;
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    color: #fff;
    z-index: 1000;
}
.pos{
    margin-top: .1rem;
    width: .8rem;
    height:.8rem;
    fill: #fff;
    position: fixed;
}
.address01{
    font-size: .7rem;
    font-weight: 700;
    margin-top: .1rem;
    margin-left:1rem;
    width: 6rem;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
}
.search01{
    position:fixed;
    left: .7rem;
    right: .7rem;
    height: 1.5rem;
    display: -webkit-box;
    background-color: #fff;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -webkit-box-align: center;
    font-size: .373333rem;
    align-items: center;
    margin-top: .5rem;
    
}
.sea{
    width: .64rem;
    height: .64rem;
    fill:#999;
    display: flex;
}
.in{
    display: -webkit-box;
      display: flex;
    width: 8rem;
    height: 1.4rem;
    font-size: .6rem;
    color: #999;
    -webkit-box-align: center;
     -webkit-justify-content: center;
    -webkit-box-align: center;
     align-items: center;

}

.mtswipe{
    margin-top: 3.8rem;
    height:6rem;
    box-sizing:border-box;
    display:flex;
    padding-top:10px;
    background-color:#ffffff;
    border-bottom:1px solid #E4E4E4;
    overflow: hidden;
}

.mtitem>div{
  width:25%;
  height:50%;
  font-size: .32rem;
  box-sizing:border-box;
  float:left;
  text-align:center;
  color: #666;
}
.mtitem{
    display: inline-block;
}


.imgitem{
    width: 2rem;
    height: 2rem;
    margin-left: .8rem;
    
}
.imgitem img{
  height:100%;
}
.shop_{
    margin-top: .5rem;
}
.shop{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: .96rem;
    font-size: .6rem;
    color: #000;
}
.shop:before,.shop:after{
    display: block;
    content: " ";
    width: 1rem;
    height: .026667rem;
    background-color: #999;
    
}
.sortstyle{
    display: flex;
    margin-top: .5rem;
    color: #666;
}
.myitem{
    font-size: .6rem;
     display: block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
}
</style>