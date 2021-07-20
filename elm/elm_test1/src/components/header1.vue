<template>
    <header id='head_top'>
        <span class='head_logo'>ele.me</span>
        <span class='head_login'>登录|注册</span>
        <section class="head_goback" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                 <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255, 255, 255);stroke-width:2"/>
            </svg>
        </section>
    </header>
</template>
<script>
export default {
    name:'header_style',
}
</script>
<style scoped>
#head_top{
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width:100%;
    height:1.95rem;
    background-color:#3190e8;
}
.head_logo{
    left:0.4rem;
    font-weight:400;
    font-size:.7rem;
    color:#fff;
    width:2.3rem;
    height:.7rem;
    position:absolute;
    top:50%;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%)
}
.head_login{
    right:0.55rem;
    font-size:.65rem;
    color:#fff;
    position:absolute;
    top:50%;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%)
}
.head_goback{
    left: .4rem;
    width: 1rem;
    height: 1rem;
    line-height: 2.2rem;
    margin-left: .4rem;
}
</style>