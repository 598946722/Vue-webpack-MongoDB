<template>
  <div class="all">
    <div class="header">
      <router-link to="/"><div class="back f-l">&#xe622;</div></router-link>
      <router-link to="/add"><div class="menu f-r">&#xe64c;</div></router-link>
      <div class="title">所有歌曲</div>
    </div>
    
    <div class="nav">
      <div class="song h">歌曲</div>
      <div class="article">歌手</div>
      <div class="special">专辑</div>  
    </div>
    <div class="single-music">
      <div class="demo">
        <div class="menu f-r">&#xe602;</div>
        <div class="name">Music-Name</div>
        <div class="message">Music-Message</div>        
      </div>
      <router-link to="/going">
        <div class="single" v-for="song in songs" @click='run(song.name)'>
          <div class="menu f-r">&#xe602;</div>
          <div class="name">{{song.name}}</div>
          <div class="message">{{song.message}}</div>  
        </div>
      </router-link>
      
    </div>
  </div>
</template>
<script>
// import bus from '../router/bus'
    export default{
      name:'app',
      data(){
        return{
          // url:'',
          songs:[
            {
              'name':'远走高飞',
              'message':'金志文'
            },
            {
              'name':'不要说话',
              'message':'陈奕迅'
            },
            {
              'name':'演员',
              'message':'薛之谦'
            },
            {
              'name':'一棵会开花的树',
              'message':'谢春花'
            },
            {
              'name':'童话镇',
              'message':'陈一发'
            },
            {
              'name':'好久不见',
              'message':'陈奕迅'
            },
            {
              'name':'我一定会爱上你',
              'message':'谢春花'
            }
          ]
        }
        
      },
      methods:{
        run(val){     
          
          bus.$emit('songname',val)
        },

      },
      created(){
        this.$http.get('http://localhost:8000/api',{emulateJSON:true},{}).then((response) => {
            console.log(response)
        })
      },
      components:{

      },
      
    }
</script>
