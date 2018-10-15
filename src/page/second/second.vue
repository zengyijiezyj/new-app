<template>
  <div>
  <div class="hello">
<!--touchstart,touchmove,touchend,touchcancel 这-->
    <canvas id="canvas"  style="border:1px solid #ddd"></canvas>
  </div>
  </div>
 
</template>

<script>
var draw;
var preHandler = function(e){e.preventDefault();}
class Draw {
    constructor(el) {
        this.el = el
        this.canvas = document.getElementById(this.el)
        canvas.width = document.documentElement.clientWidth
        canvas.height = document.documentElement.clientHeight
        this.cxt = this.canvas.getContext('2d')
        this.stage_info = canvas.getBoundingClientRect()
        this.path = {
            beginX: 0,
            beginY: 0,
            endX: 0,
            endY: 0
        }
    }
    init(btn) {
        var that = this; 
        
        this.canvas.addEventListener('touchstart', function(event) {
            document.addEventListener('touchstart', preHandler, false); 
            that.drawBegin(event)
        })
        this.canvas.addEventListener('touchend', function(event) { 
            document.addEventListener('touchend', preHandler, false); 
            that.drawEnd()
            
        })
        this.clear(btn)
    }
    drawBegin(e) {
        var that = this;
        window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty()
        this.cxt.strokeStyle = "#000"
        this.cxt.beginPath()
        this.cxt.moveTo(
            e.changedTouches[0].clientX - this.stage_info.left,
            e.changedTouches[0].clientY - this.stage_info.top
        )
        this.path.beginX = e.changedTouches[0].clientX - this.stage_info.left
        this.path.beginY = e.changedTouches[0].clientY - this.stage_info.top
        canvas.addEventListener("touchmove",function(){
            that.drawing(event)
        })
    }
    drawing(e) {
        this.cxt.lineTo(
            e.changedTouches[0].clientX - this.stage_info.left,
            e.changedTouches[0].clientY - this.stage_info.top
        )
        this.path.endX = e.changedTouches[0].clientX - this.stage_info.left
        this.path.endY = e.changedTouches[0].clientY - this.stage_info.top
        this.cxt.stroke()
    }
    drawEnd() {
        document.removeEventListener('touchstart', preHandler, false); 
        document.removeEventListener('touchend', preHandler, false);
        document.removeEventListener('touchmove', preHandler, false);
        //canvas.ontouchmove = canvas.ontouchend = null
    }
    clear(btn) {
        this.cxt.clearRect(0, 0, 300, 600)
    }
    save(){
       return canvas.toDataURL("image/png")
    }
}
import footView from '@/components/foot/footView'
export default {
  components:{
        footView,
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      val:true,
      url:""
    }
  },
  mounted() {
      draw=new Draw('canvas');
      draw.init();
  },
  methods:{
    clear:function(){
        draw.clear();
    },
    save:function(){
        var data=draw.save();
        this.url = data;
        console.log(data)
    },
　　　mutate(word) {
         this.$emit("input", word);
     },
} } </script>
<style scoped> 
h1, h2 { font-weight: normal; } 
ul { list-style-type: none; padding: 0; } 
li { display: inline-block; margin: 0 10px; } 
a { color: #42b983; } 
#canvas { background-image: linear-gradient(25deg, #2b59ff, #4383ef, #3faade, #00d1cc);
          cursor: default;
           
} 
#keyword-box { margin: 10px 0; } 
.hello{
    width:100vw;
}
</style>