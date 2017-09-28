<template>
  <div class="add">
      音乐名：  <input type="text" class="musicname"><br>
      歌手：   <input type="text" class="article"><br>
      图片：<input type="file"class="img"  accept="image/gif, image/jpg, image/png"><br>
      音频：<input type="file"class="song" ><br>
      <input type="button" value="上传" class="add">
      {{home}}
  </div>
</template>
<script>
    const Err_Ok = 0;
    export default{
            data(){
                return{
                    home:[
                        'test',
                    ]
                }
            },

            created(){
              this.$http.get('/api').then((response) => {
                // response = response.body;
                // if(response.error === Err_Ok){
                  console.log(response.data)
                // }
              })
            },
    }
</script>