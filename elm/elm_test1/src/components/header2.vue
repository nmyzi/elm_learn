<template>
<div class="address">
    <div id='head_top'>
        <span class='select_address' >选择收货地址</span>
        <section class="head_goback"  @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                 <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255, 255, 255);stroke-width:2"/>
            </svg>
        </section>
    </div>
    <div class="address_0">
        <div class="address_1" @click="toSelectCity">
            <span class="address_2">{{$store.state.nowcity.name}}</span>
            <svg class="address_3" xmkns="http://www.w3.org/2000/svg" viewBox="0 0 14 8">
                <path fill="#333" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z" data-spm-anchor-id="a2ogi.13147251.0.i1.2e0e30d71yCbSH">
                </path>
            </svg>
        </div>
        <div class="address_4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="address_5">
                <path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z">
                </path>
            </svg>
            <input type="search" placeholder="请输入地址" class="address_6" v-model.trim="input_str">
        </div>
    </div>

    <div class="search_address">
        <div @click='getaddress({name:item.name,latitude:item.latitude,longitude:item.longitude,address:item.address,geohash:item.geohash})' class="searchbox0" v-for="item in search_list">
            <div class="searchbox">{{item.name}}</div>
            <div class="searchbox2">{{item.address}}</div>
        </div>
         
    </div>
</div>
</template>
<script>
import home1 from '../page/home1.vue'
const delay = (function() {
    let timer = 0;
    return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
 };
})();
export default {
    components: { home1 },
    name:'header_style2',
    data(){
        return{
            input_str:'',
            search_list:''
        }
    },
    watch:{
        input_str() {
        delay(() => {
        this.fetchData();
        }, 300);
        }
    },
    methods:{
        toSelectCity:function(){
            this.$router.replace('/city')
        },
        async fetchData(val){
            await this.$http.get('http://cangdu.org:8001/v1/pois?city_id='+this.$store.state.nowcity.id+'&keyword='+this.input_str+'&type=search').then(response => {
                console.log(response);
                this.search_list=response.body;
            }, response => {
            console.log(response);
        
            });
        },
        getaddress:function(e){
            this.$store.state.now_address=e
            this.$router.replace('/miste')
         
     }
    }
}
</script>
<style type="text/css">
.address{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    overflow: auto;
    background-color: #f4f4f4;
}
#head_top{
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width:100%;
    height:1.95rem;
    background-color:#3190e8;
}
.select_address{
    right:6rem;
    font-size:.75rem;
    color:#fff;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
}
.head_goback{
    position: absolute;
    left: .3rem;
    width:1rem;
    
    height: 1rem;
    line-height: 2.4rem;
    margin-left: .3rem;

}
.address_0{
    margin-top: 2.2rem;
    width:100%;
    height: 2.6rem;
    display: flex;
    background-color: #fff;
}
.address_1{
    background-color:  #fff;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .4rem;
    padding-left: 4vw;
    display: flex;
}
.address_2{
    font-size: .5rem;
    background: #fff;
    width: 1.066667rem;
    width: 10.666667vw;
    color: #333;
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
}
.address_3{
    width: .16rem;
    width: 1.6vw;
    height: .16rem;
    height: 1.6vw;
}
.address_4{
    position: relative;
    padding: .266667rem .4rem;
    padding: 2.666667vw 4vw;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
     flex: 1;
}
.address_5{
    position: absolute;
    width: .373333rem;
    width: 3.733333vw;
    height: .373333rem;
    height: 3.733333vw;
    left: .586667rem;
    left: 5.866667vw;
    top: .56rem;
    top: 5.6vw;
}
.address_6{
    width: 100%;
    height: .96rem;
    height: 9.6vw;
    border-radius: .026667rem;
    border-radius: .266667vw;
    padding: .24rem .48rem .24rem .666667rem;
    padding: 2.4vw 4.8vw 2.4vw 6.666667vw;
    background: #f2f2f2;
    -webkit-appearance: none;
}
input{
     border: none;
}
.searchbox{
     height: 0.6rem;
    font-size: .6rem;
    background-color: #fff;
    padding: .293333rem .4rem;
    line-height: 1.5rem;
}
.searchbox2{
    height: 0.6rem;
    font-size: .4rem;
    background-color: #fff;
    padding: .293333rem .4rem;
    border-bottom: 1px solid #ddd;
    
}
</style>