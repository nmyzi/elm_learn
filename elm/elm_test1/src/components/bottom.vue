<template>
 
        <mt-tabbar class="tabbar" v-model="$store.state.selected">
            <mt-tab-item class='item' id='miste'>
                <icon class="pic" slot="icon" name="miste" v-bind:id="[ ($store.state.selected=='miste')||('/miste'==$route.path)? 'on' : '']"></icon>
                <div v-bind:class="[ ($store.state.selected=='miste')||('/miste'==$route.path)? 'on' : '']">首页</div>
            </mt-tab-item>
            <mt-tab-item class='item' id='find'>
                <icon class="pic" slot="icon" name="find" v-bind:id="[ ($store.state.selected=='find')||('/find'==$route.path)? 'on' : '']"></icon>
                <div v-bind:class="[ ($store.state.selected=='find')||('/find'==$route.path)? 'on' : '']">发现</div>
            </mt-tab-item>
            <mt-tab-item class='item' id='order'>
                <icon class="pic" slot="icon" name="order" v-bind:id="[ ($store.state.selected=='order')||('/order'==$route.path)? 'on' : '']"></icon>
                <div v-bind:class="[ ($store.state.selected=='order')||('/order'==$route.path)? 'on' : '']">订单</div>
            </mt-tab-item>
            <mt-tab-item class='item' id='profile'>
                <icon class="pic" slot="icon" name="profile" v-bind:id="[ ($store.state.selected=='profile')||('/profile'==$route.path)? 'on' : '']"></icon>
                <div v-bind:class="[ ($store.state.selected=='profile')||('/profile'==$route.path)? 'on' : '']">我的</div>
            </mt-tab-item>
        </mt-tabbar>
</template>

<script>
export default {
    name:'bottom',
    data(){
        return{

        }
    },

    computed:{
    gopage:function(){
        return this.$store.state.selected
        }
    },
    methods:{ 
    },
    watch:{
      gopage(newval,oldval){
          this.$store.state.selected=""
          this.$router.push(newval);
        }
    }
}
</script>

<style>
.tabbar{
    font-size: .5rem;
    color: #8e8e93;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: .12rem;
    background-color: #fff;
    min-height: 1.333333rem;
    min-height: 13.333333vw;
    -webkit-box-shadow: 0 -0.026667rem 0.053333rem rgb(0 0 0 / 10%);
    box-shadow: 0 -0.026667rem 0.053333rem rgb(0 0 0 / 10%);
    -webkit-box-shadow: 0 -0.266667vw 0.533333vw rgb(0 0 0 / 10%);
    box-shadow: 0 -0.266667vw 0.533333vw rgb(0 0 0 / 10%);
}
.pic{
    width: .533333rem;
    width: 5.333333vw;
    height: .533333rem;
    height: 5.333333vw;
    
}
.item{
    display: block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
}
#on{
    fill:#26a2ff;
}
.on{
    color:#26a2ff;
}
</style>