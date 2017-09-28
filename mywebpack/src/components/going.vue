<template>
  <div class="going">
    
    <audio v-bind:src="url" controls="controls" autoplay="autoplay">
        
    </audio>
    <input type="button" @click='fun' value="获取url">
    <!-- <a-player> </a-player>   -->
  </div>
</template>
<script>

  export default{ 
    name:'going',
    data:() =>({
      url:'./src/music/远走高飞.mp3'
    }),
    mounted(){
      let this_ = this;
      bus.$on('songname',function(val){
        document.cookie = './src/music/'+ val+'.mp3';
        // this_.url = './src/music/'+ val+'.mp3';
      })
      this.url =  document.cookie; 
    },
    methods:{
      fun(){
        console.log(this.url)
      }
    }
  }
</script>