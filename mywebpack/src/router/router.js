import Vue from 'vue'
import Router from 'vue-router'
// import Resource from 'vue-resource'
import music from '../components/music.vue'
import all from '../components/all.vue'
import add from '../components/add.vue'
import find from '../components/find.vue'
import like from '../components/like.vue'
import mine from '../components/mine.vue'
import download from '../components/download.vue'
import going from '../components/going.vue'
import player from '../components/player.vue'
import VueAplayer from 'vue-aplayer'


require('../css/index.css')
require('../css/public.css')
require('../css/iconfont.css')
// require('../js/common.js')

Vue.use(Router)
// Vue.use(Resource)

export default new Router({
    mode:'history',
    routes:[
        {   path:'/going',
            name:'going',
            component:going
        },
        {   path:'/player',
            name:'player',
            component:VueAplayer
        },
        {   path:'/add',
            name:'add',
            component:add
        },
        {
            path:'/music',
            name:'music',
            component: music

        },
        {
            path:'/download',
            name:'download',
            component: download
            
        },
        {
            path:'/',
            name:'mine',
            component: mine

        },
        {
            path:'/all',
            name:'all',
            component: all

        },
        {
            path:'/find',
            name:'find',
            component: find

        },
        {
            path:'/like',
            name:'like',
            component: like

        },
        
    ]
})