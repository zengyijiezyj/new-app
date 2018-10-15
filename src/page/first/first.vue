<template>
    <div class="bg">
        <mt-swipe :auto="0">
            <mt-swipe-item class="swipe1"></mt-swipe-item>
            <mt-swipe-item class="swipe2"></mt-swipe-item>
            <mt-swipe-item class="swipe3"></mt-swipe-item>
            <mt-swipe-item class="swipe4"></mt-swipe-item>
        </mt-swipe>
        <aplayer 
            :music="{
            title: 'Nothing is Gonna Change My Love For You',
            artist: 'Westlife',
            src: './static/first2.mp3',
            pic: './static/first1.jpg'
            }"
        />
        <div class="blank1"></div>
        <mt-cell title="天气君"
        is-link
        @click.native="handleSubmit">
        <img slot="icon" src='@/svg/first3.svg' style="width:5vw;height:5vw;"></mt-cell>
        <mt-cell title="倒计时"
        is-link
        @click.native="handleSubmit">
        <img slot="icon" src='@/svg/first2.svg' style="width:5vw;height:5vw;"></mt-cell>
        <mt-cell title="时千金"
        is-link
        >
        <img slot="icon" src='@/svg/first1.svg' style="width:5vw;height:5vw;">
        <Clock></Clock></mt-cell>
        <div class="blank1"></div>
        <mt-cell title="更多功能望卿等等"
        is-link>
        <img slot="icon" src='@/svg/first4.svg' style="width:5vw;height:5vw;"></mt-cell>
        

    </div>
</template>
<script>
import footView from '@/components/foot/footView'
import Clock from 'vue-clock2'
import Aplayer from 'vue-aplayer'
export default {
    components:{
        footView,
        Clock,
        Aplayer
    },
    methods:{
        handleSubmit() {
            this.$toast({
                message:'开发中QWQ',
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
    background-color:#ebf8ff;
}
.swipe1{
    background-image: url('../../svg/first.svg');
    background-size: 30% 30%;
    background-repeat: no-repeat;
    background-position: center;
}
.swipe2{
    background-image: url('../../svg/second.svg');
    background-size: 30% 30%;
    background-repeat: no-repeat;
    background-position: center;
}
.swipe3{
    background-image: url('../../svg/third.svg');
    background-size: 30% 30%;
    background-repeat: no-repeat;
    background-position: center;
}
.swipe4{
    background-image: url('../../svg/fourth.svg');
    background-size: 30% 30%;
    background-repeat: no-repeat;
    background-position: center;
}
.blank1{
    width: 100%;
    height: 6vh;
}
</style>