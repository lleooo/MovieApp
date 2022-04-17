import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)
const actions = {
    fetch(context) {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=e147528034b3b1192f389af6460b3ad9&language=zh-TW&page=1"
        )
            .then((respone) => {
                return respone.json();
            })
            .then((data) => {
                data.results=data.results.filter(e=>{
                   return e.poster_path!=null
                })
                context.state.movieData = data.results;
                console.log("電影列表來了", context.state.movieData);
            });
    },

    newFetch(context, value) {
        context.state.page++
        if (context.state.page == 1) {console.log('先不要')}
        else {
            fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=e147528034b3b1192f389af6460b3ad9&language=zh-TW&page=" + context.state.page
            )
                .then((respone) => {
                    return respone.json();
                })
                .then((data) => {
                    data.results.forEach(element => {
                        context.state.movieData.push(element)
                    });
                    console.log('新電影進來了')
                });
        }
    },

    addLoveMovie(context, value) {
        console.log(context, value)
        if (context.state.loveMovie.includes(value[0]) == true) {
            value[1].target.className = 'love'
            alert('從最愛移除')
            context.state.loveMovie = context.state.loveMovie.filter((element) => {
                return element != value[0]
            })
            console.log(context.state.loveMovie)
        }
        else {
            value[1].target.className = 'love-active'
            alert('已加入最愛')
            context.state.loveMovie.push(value[0]),
                console.log(context.state.loveMovie)
        }
    }

}
const mutations = {
    change(state, value) {
        state.showDetail = value;
    }
}
const state = {
    showDetail: false,
    movieData: [],
    page: 0,
    loveMovie: [],
}


export default new Vuex.Store({
    actions,
    mutations,
    state
})