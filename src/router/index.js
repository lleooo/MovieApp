import VueRouter from 'vue-router'

import movieList from '../pages/movieList'
import loveMovies from '../pages/loveMovies'
import movieDetail from '../pages/movieDetail'
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: movieList,
        },
        {
            path:'/movieDetail',
            component:movieDetail,
        },
        
        {
            path:'/loveMovies',
            component:loveMovies,
        }
    ]
})