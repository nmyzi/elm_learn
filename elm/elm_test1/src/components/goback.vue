<template>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(26, 21, 21);stroke-width:2"/>
      </svg>
    </section>
</template>
<script>
export default {
    name:'go_back',
    data(){
        
    }
}
</script>