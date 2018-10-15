<template>
    <div class="bg">
        <mt-swipe :auto="4000">
            <mt-swipe-item class="swipe1"></mt-swipe-item>
            <mt-swipe-item class="swipe2"></mt-swipe-item>
            <mt-swipe-item class="swipe3"></mt-swipe-item>
        </mt-swipe>
        <div class="sel" >
            <div class="left">
                <a href="//baidu.com">
                <img slot="icon" src='@/svg/third1.svg' style="width:13vw;height:13vw;">
                </a>
            </div>
            <div class="right">
                <a href="//music.163.com/m/">
                <img slot="icon" src='@/svg/third2.svg' style="width:13vw;height:13vw;">
                </a>
            </div>
        </div>
        <div class="sel" >
            <div class="left">
                <a href="//meiriyiwen.com">
                <img slot="icon" src='@/svg/third3.svg' style="width:13vw;height:13vw;">
                </a>
            </div>
            <div class="right">
                <a href="//jianshu.com">
                <img slot="icon" src='@/svg/third4.svg' style="width:13vw;height:13vw;">
                </a>
            </div>
        </div>
        <div class="sel" >
            <div class="left">
                <a href="//www.dushu369.com">
                <img slot="icon" src='@/svg/third5.svg' style="width:13vw;height:13vw;">
                </a>
            </div>
            <div class="right">
                <a href="//m.huxiu.com">
                <img slot="icon" src='@/svg/third6.svg' style="width:13vw;height:13vw;">
                </a>
            </div>
        </div>
        <div class="sel" >
            <div class="left">
                <a @click="handleSubmit">
                <img slot="icon" src='@/svg/third7.svg' style="width:13vw;height:13vw;">
                </a>
            </div>
            <div class="right">
                <a @click="handleSubmit">
                <img slot="icon" src='@/svg/third7.svg' style="width:13vw;height:13vw;">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import footView from '@/components/foot/footView'
export default {
    components:{
        footView
    },
    methods:{
        handleSubmit() {
            this.$toast({
                message:'敬请期待（oﾟωﾟo）',
                duration:2000
            })
        }
    }
}
</script>
<style scoped>
.bg{
    background:#ebebeb78;
    width: 100%;
    height: 100vh;
}
.mint-swipe{
    height: 30vh;
}
.mint-swipe-item{
    background-color: aqua;
}
.swipe1{
    background-image: url('../../img/third1.jpg');
    background-size: 100% 100%;
}
.swipe2{
    background-image: url('../../img/third2.jpg');
    background-size: 100% 100%;
}
.swipe3{
    background-image: url('../../img/third3.jpg');
    background-size: 100% 100%;
}
.sel{
    display: flex;
    background:#fff;
    height: 15vh;
    width: 100vw;
    border-bottom: 1px solid #ddd;
}
.left{
    width: 50%;
    border-right: 1px solid #ddd;
    text-align: center;
    padding-top: 6vw;
}
.right{
    width: 50%;
    text-align: center;
    padding-top: 6vw;
}
</style>