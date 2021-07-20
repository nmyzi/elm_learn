<template>
  <div>
    
    <router-view class="index"/>
  </div>
</template>

<script>

import header_style2 from './components/header2.vue'
import home1 from './page/home1.vue'
export default {
  name: 'App',
  components:{
    header_style2,
    home1
  },
  data(){
    return{

    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
