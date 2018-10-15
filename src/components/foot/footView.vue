<template>
<div>
<mt-tabbar v-model="selected">
    <mt-tab-item id="first">
        <img slot="icon" src="../../svg/first.svg">
        首页
    </mt-tab-item>
    <mt-tab-item id="second">
        <img slot="icon" src="../../svg/second.svg">
        点滴
    </mt-tab-item>
    <mt-tab-item id="third">
        <img slot="icon" src="../../svg/third.svg">
        兴趣广场
    </mt-tab-item>
    <mt-tab-item id="fourth">
        <img slot="icon" src="../../svg/fourth.svg">
        我的
    </mt-tab-item>
</mt-tabbar>
</div>
</template>
<script>
export default {
    name: 'footView',
    data(){
    return { selected: 'first'}
    },
    watch: {
        selected: function (val, oldVal) {
            switch(val){
                case 'first':
                    this.$router.push('/first');
                break;
                case 'second':
                    this.$router.push('/second');
                break;
                case 'third':
                    this.$router.push('/third');
                break;
                case 'fourth':
                    this.$router.push('/fourth');
                break;
            }
        }
    }   
}
</script>


