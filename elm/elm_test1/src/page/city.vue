<template>
<div class="select_city">
    <div id='head_top'>
        <span class='select_address' >城市选择</span>
        <section class="head_goback" @click="$router.back()">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                 <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255, 255, 255);stroke-width:2"/>
            </svg>
        </section>
    </div>
    <div class="dingwei_city">
        <span class="dingwei">当前定位城市</span>
    </div>
    <div class="city_name">{{$store.state.nowcity.name}}</div>

   <div class="hot_city">
        <div class="hot">热门城市</div>
        <div v-for="(items,index) in hotcity" class="hotlist">
            <mt-cell style="display:none" class="after" :title="index"></mt-cell>
            <div @click='getcity({name:items.name,id:items.id})' class="hotbox" >
                <div>{{items.name}}</div>
            </div>
        </div>
    </div>

    <div class="all">
        <div v-for="(items,index) in getlist">
            <div class="allcity">{{index}}</div>
            <div @click='getcity({name:item.name,id:item.id})' class="allbox" v-for="item in items">{{item.name}}</div>
        </div>
    </div>
</div>
</template>
<script>

export default{
    name:"city",
    data(){
        return{
            hotcity:"",
            allcity:'',
            guesscity:""
        }
    },
    mounted:function(){
        this.$http.get('https://elm.cangdu.org/v1/cities?type=hot').then(response =>{
            console.log(response);
            this.hotcity=response.body;
        },response =>{
            console.log(response);
        });

       this.$http.get('https://elm.cangdu.org/v1/cities?type=group').then(response =>{
            console.log(response);
            this.allcity=response.body;
        },response =>{
            console.log(response);
        });

        this.$http.get('https://elm.cangdu.org/v1/cities?type=guess').then(response =>{
            console.log(response);
            this.$store.state.nowcity={'name':response.body.name,'id':response.body.id};
        },response =>{
            console.log(response);
        });
    },
    computed:{
  //计算属性
      getlist:function(){
        var mycitylist={};
          for(var i=65;i<=90;i++){
            var num= String.fromCharCode(i);
            mycitylist[num]=this.allcity[num];
          }
          return mycitylist
      }
     },
     methods:{
         getcity:function(e){
             this.$store.state.nowcity=e
             this.$router.push('/header2')
         }
     }
}
</script>
<style type="text/css">
.select_city{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    overflow: auto;
    background-color: #f4f4f4;
}

.dingwei_city{
    margin-top: 2.1rem;
    width:100%;
    height: 1.6rem;
    border-bottom: 1px solid #ddd;
}
.dingwei{
    padding-left: .4rem;
    font-size: .65rem;
    color: #666;
    background: #f5f5f5;
    
}
.city_name,.hotbox,.allbox{
    width:100%;
    height: 2rem;
    padding-left: .4rem;
    font-size: .65rem;
    color: #666;
    background: #fff;
    line-height: 1.9rem;
    border-bottom: 1px solid #ddd;
}
.hot,.allcity{
     width:100%;
    height: 2rem;
    padding-left: .4rem;
    font-size: .6rem;
    color: #666;
    background: #f5f5f5;
    border-bottom: 1px solid #ddd;
    line-height: 3rem;
}
</style>
