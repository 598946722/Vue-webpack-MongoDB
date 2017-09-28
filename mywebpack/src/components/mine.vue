
<template>
  <div class="mine">
    <div class="header">
        <div class='nav'>
          <div class="menu f-l">&#xe631;</div>
          <router-link to='/'><div class="mine h f-l">我的</div></router-link>
          <router-link to='/music'><div class="music f-l">音乐馆</div></router-link>
          <router-link to='/find'> <div class="find f-l">发现</div></router-link>
          <div class="add f-r">&#xe64c;</div>        
        </div>       
        <div class="clear"></div>
        <div class="search">
           <div class='content'>&#xe620;&nbsp;&nbsp;搜索</div>		
        </div>	
        <div class='clear'></div>			
    </div>
      <div class='user'>
        <div class='online f-l'>
              &#xe601;50分钟
        </div>        
        <div class='vip f-r'>
          开通
        </div>
        <div class='via'>
          <img src='./via.jpg'/>
        </div>
        <div class='clear'></div>
        <div class='userName'>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xe63d;&nbsp;&nbsp;MoCha&nbsp;&nbsp;&#xe63d;
        </div>
      </div>
      <div class='main'>
        <router-link to='/all'>
          <div class="all btn">
           <div class="logo">&#xe638;</div>
           <p>全部歌曲</p>
           <a>160</a>
         </div>
        </router-link>
          
        <router-link to='/download'> 
          <div class="download">
            <div class="logo">&#xe864;</div>
            <p>下载歌曲</p>
            <a>50</a>
          </div>
        </router-link>
        <div class="recent">
          <div class="logo">
            &#xe67f;
          </div>
          <p>最近播放</p>
          <a>35</a>
        </div>
        <router-link to="like">
          <div class="like btn">
            <div class="logo">
            &#xe97e; 
            </div>
            <p>我喜欢</p>
            <a>66</a>
          </div>
        </router-link>
        
        <div class="mv">
          <div class="logo">
            &#xe6cf;
          </div>
          <p>下载MV</p>
          <a>2</a>
        </div> 
        <div class="buy">
          <div class="logo"> &#xe603;</div>        
          <p>已购音乐</p>
          <a>35</a>
          </div>
        </div>

        <div class="radio">
          <div class="character">
            <div class="logo f-l">
              <img src="../img/1.png" alt="">
            </div>
            <p>个性电台</p>
            <a>好音乐因你而存在</a>
          </div>
          <div class="clear"></div>
          <div class="running">
            <div class="logo f-l">
              <img src="../img/2.png" alt="">
            </div>
            <p>跑步电台</p>
            <a>QQ音乐 X Nike,让运动乐在其中</a>
          </div> 
          <div class="clear"></div>
        </div>  

        <div class="list">
           <div class="menu f-r">&#xe673;</div>
          <div class="add f-r">&#xe64c;</div>
          <div class="create">自建歌单 | 收藏歌单</div>
          
         
        </div>
        <router-link to="/going">
          <div class="player">
            <div class="logo f-l">
              <img src="./via.jpg" alt="">
            </div>
            
            <div class="menu f-r">&#xe717;</div>
            <div class="go f-r">&#xe607;</div>
            <p>音乐名</p>
            <a>音乐信息</a>            
          </div>
        </router-link>
        

  </div>
      
</template>

<script>

</script>
