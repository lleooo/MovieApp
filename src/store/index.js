import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)
const actions = {
    addLoveMovie(context, value) {
        console.log(context,value)
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
    loveMovie: [],
}


export default new Vuex.Store({
    actions,
    mutations,
    state
})