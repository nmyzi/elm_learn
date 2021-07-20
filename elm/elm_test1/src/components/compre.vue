<template>
<div>
    <div class='shoplist' v-for='shop in shoplist'>
        <div class='shop1'>
            <div class="shop2">
                <img class="imgshop" :src="'http://cangdu.org:8001/img/'+shop.image_path"></img>
                <div>
                <div style="display:flex">
                  <div class='shop3'>{{shop.name}}</div>
                <div class="zbp">
                  <div :class="s.icon_name" v-for="s in shop.supports" style="display:flex">{{s.icon_name}}</div>
                </div>
                </div>
                <div class='shop4'>
                    <div v-if='shop.rating>=1' style='display:flex'>
                    <div v-for='i in parseInt(shop.rating)'>
                        <icon name="xx1" class="xx"></icon>
                    </div>
                    </div>
                    <div v-if='shop.rating-parseInt(shop.rating)>0'>
                    <span class="xxspan1" >
                        <icon name="xx2" class="xx"></icon>
                        <span :class="xxclass+(shop.rating*10-parseInt(shop.rating)*10)">
                            <icon name="xx1" class="xx"></icon>
                        </span>
                    </span>
                    </div>
                     <div v-if='shop.rating<4' style='display:flex'>
                    <div v-for='i in (4-parseInt(shop.rating))'>
                        <icon name="xx2" class="xx"></icon>
                    </div>
                    </div>

                    <div class="pfen">{{shop.rating}}</div>
                    <div class="pfen">&nbsp;月售{{shop.recent_order_num}}单</div>
                    <div class="peisong">
                      <span class="fnzs" v-if="shop.delivery_mode">{{shop.delivery_mode.text}}</span>
                      <span class="zsd">准时达</span>
                    </div>
                </div>
                <div class="shop5">
                  <span class="pfen">¥{{shop.float_minimum_order_amount}}起送</span>
                  <span class="pfen">|&nbsp;{{shop.piecewise_agent_fee.tips}}</span>
                  <div class="dis">
                    <span class="distant">{{shop.distance}}&nbsp;|&nbsp;{{shop.order_lead_time}}</span>
                  </div>
                </div>

                <div class="shop6">
                  <span class="flei">{{shop.category}}</span>
                </div>
                <div class="boderbox"></div>
                <div class="activities">
                  <div class="act" v-for="item in shop.activities">
                    <div :class="item.icon_name">{{item.icon_name}}</div>
                    <div class="a2">{{item.description}}</div>
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'compre',
    data(){
        return{
            shoplist:[],
            xxclass:"xxspan2 w"
        }
    },
    mounted:function(){
        this.$http.get('https://elm.cangdu.org/shopping/restaurants?'+'latitude='+this.$store.state.now_address.latitude+'&'+'longitude='+this.$store.state.now_address.longitude).then(response =>{
            console.log(response);
            this.shoplist=response.body;
        },response =>{
            console.log(response);
        });
    }
}
</script>
<style>
.shoplist{
  margin-top: .6rem;
}
.shop2{
    display:flex;
    height: 6.5rem;
    border-bottom: 1px solid #ddd;
}
.imgshop{
    width: 3rem;
    height: 3rem;
    border: .133333vw solid rgba(0,0,0,.08);
    
}
.zbp{
  display: flex;
  position: absolute;
    right: .5rem;
}
.shop3{
    margin-left:.5rem;
    display: flex;
    font-size:.7rem;
    font-weight: 700;
    height:.7rem;
}
.shop4{
    display: flex;
    margin-left:.4rem;
    line-height: 1.3rem;
    width: 100%;
}
.shop5{
    display: flex;
    margin-left:.3rem;
    line-height: .14rem;
}
.flei{
  margin-left: .4rem;
  font-size: .1rem;
  color: #999;
  border:1px solid rgb(221, 221, 221);

}
.distant{
  margin-top: .2rem;
  font-size: .1rem;
  color: #999;
  margin-left: 3.5rem;
}
.peisong,.dis{
  position:absolute;
  right: .5rem;
}
.fnzs{
  background-color:  #57A9FF;
  color: #fff;
  font-size: .1rem;
  
}
.zsd{
  color:  #57A9FF;
  background-color: #fff;
  font-size: .1rem;
  border:1px solid #57A9FF;
}
.activities{
  margin-top: .5rem;

}
.borderbox{
  width: 100%;
}
.act{
  display: flex;
  font-size: .1rem;
  margin-left: .4rem;
  margin-top: .1rem;
}
.a2{
  margin-left: .2rem;
}
.减{
  height: .6rem;
  width: .6rem;
  color: #fff;
  border-radius: .106667rem;
  background-color: #f07373;
}
.新{
  height: .6rem;
  width: .6rem;
  color: #fff;
  border-radius: .106667rem;
  background-color: #70bc46;
}
.领{
  height: .6rem;
  width: .6rem;
  color: #fff;
  border-radius: .106667rem;
  background-color: #E3EE0D;
}
.特{
  height: .6rem;
  width: .6rem;
  color: #fff;
  border-radius: .106667rem;
  background-color: #EDC123;
}
.保{
  height: .6rem;
  width: .6rem;
  color: #fff;
  border-radius: .106667rem;
  background-color: #999999;
  font-size: .1rem;
  margin-left: .1rem;
}
.准{
  height: .6rem;
  width: .6rem;
  color: #fff;
  border-radius: .106667rem;
  background-color: #57A9FF;
    font-size: .1rem;
    margin-left: .1rem;

}
.票{
  height: .6rem;
  width: .6rem;
  color: #fff;
  border-radius: .106667rem;
  background-color: #999999;
    font-size: .1rem;
    margin-left: .1rem;

}
.xxspan1{
  position:relative;
  display:inline-block;
}
.xxspan2{
  display:inline-block;
  position:absolute;
  left:0px;
  overflow: hidden;
}
.xx{
  width:11px;
  height:11px;
  margin-left:.04rem;
}
.w1{
  width:10%;
}
.w2{
  width:20%;
}
.w3{
  width:30%;
}
.w4{
  width:40%;
}
.w5{
  width:50%;
}
.w6{
  width:60%;
}
.w7{
  width:70%;
}
.w8{
  width:80%;
}
.w9{
  width:90%;
}
.pfen{
  margin-top: .2rem;
  font-size: .1rem;
   margin-left:.2rem;
  color: #666;
}
</style>