<template>
    <div class="bg">
        <mt-header title="ฅ՞•ﻌ•՞ฅ">
            <router-link to="/" slot="left">
            <mt-button icon="back" class="back" ></mt-button>
            </router-link>
        </mt-header>
        <div class="im"> 
        <div class="girl"><img slot="icon" src='@/svg/fourth1.svg' style="width:20vw;height:10vh;"></div>
        <p class="little-font">小祖宗</p>
        <div class="heart"><img slot="icon" src="@/svg/fourth2.svg" style="width:4vw;height:2vh;" ></div>
        <p class="heart-font">大笨蛋为你服务(☄⊙ω⊙)☄</p>
        </div>
        <div class="sel">
            <div class="left">
                <a @click="handleSubmit">
                <img slot="icon" src='@/svg/fourth3.svg' style="width:13vw;height:13vw;">
                </a>
            </div>
            <div class="right">
                <a @click="handleSubmit1">
                <img slot="icon" src='@/svg/fourth4.svg' style="width:14vw;height:14vw;">
                </a>
            </div>
        </div>
        <div class="blank1"></div>
        <mt-cell title="关于大笨蛋"
        to="/fourth1"
        is-link>
        <img slot="icon" src='@/svg/fourth5.svg' style="width:5vw;height:5vw;"></mt-cell>
        <div class="blank1"></div>
        <mt-cell title="联系大笨蛋"
        to="/fourth2"
        is-link>
        <img slot="icon" src='@/svg/fourth6.svg' style="width:5vw;height:5vw;"></mt-cell>
        <mt-cell title="版本号"
        is-link
        @click.native="handleSubmit2">
        <img slot="icon" src='@/svg/fourth7.svg' style="width:5vw;height:5vw;"></mt-cell>
        <mt-cell title="打赏作者"
        is-link
        @click.native="handleSubmit3">
        <img slot="icon" src='@/svg/fourth8.svg' style="width:5vw;height:5vw;"></mt-cell>
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
                message:'功能暂未开放QWQ',
                duration:2000
            })
    },
         handleSubmit1() {
            this.$toast({
                message:'维护中QAQ',
                duration:2000
            })
    },
        handleSubmit2(){
            this.$messagebox({

          title: '版本号',
          message: '此款为原始版本1.0，功能较为简陋，仍是作者熬夜几日的呕心沥血之作，希望能够喜欢',
          confirmButtonText:"确定"

        })
    },
        handleSubmit3(){
            this.$messagebox({

          title: '打赏作者',
          message: '把你打赏给作者吧( ´･ᴗ･` ) ',
          confirmButtonText:"确定"

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
.back h1{
    height: 30px;
}
.mint-header{
    height: 4.9vh;
    background:linear-gradient(90deg,#0af,#fff4c0);
    font-size: 20px;
    border-bottom: 1px solid #ddd;
}
.im{
    display: flex;
    background:linear-gradient(90deg,#0af,#fff4c0);
    height: 15vh;
    width: 100vw;
}
.girl{
    position: absolute;
    top: 7vh;
    left:5vw;
}
.little-font{
    font-size: 1.3rem;
    color: #fff4c0;
    position: absolute;
    top: 4.5vh;
    left:30vw;
    margin-bottom: 5vh;
}
.heart{
    position: absolute;
    top:12.6vh;
    left:30vw;
}
.heart-font{
    color: aliceblue;
    font-size: 0.7rem;
    position: absolute;
    top:11.2vh;
    left:35vw;
}
.sel{
    display: flex;
    background:#fff;
    height: 15vh;
    width: 100vw;
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
.blank1{
    width: 100%;
    height: 6vh;
}
</style>

