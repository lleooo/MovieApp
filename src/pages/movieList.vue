<template>
  <div class="top-movie">
    <h2 v-show="!this.$store.state.showDetail">熱門電影</h2>
    <div class="movie-container" v-show="!this.$store.state.showDetail">
      <div
        class="movie"
        :id="d.id"
        v-for="(d, index) in this.$store.state.movieData"
        :key="index"
      >
        <observer @on-change="onChange" class="lazy">
          <div class="movie-img">
            <img :data-src="imgPath + d.poster_path" @click="detail(d, $event)" />
            <div class="love" @click="loveCheck(d, $event)" :ref="d.id">❤</div>
          </div>
        </observer>
        <h1>{{ d.original_title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Observer from "vue-intersection-observer";
export default {
  components: { Observer },
  name: "movieList",
  data() {
    return {
      imgPath: "https://image.tmdb.org/t/p/w500",
      love: [],
    };
  },

  methods: {
    onChange(entry,unoberserve) {
      if(entry.isIntersecting){
        const image=entry.target;
        const x=image.children[0].childNodes[0].getAttribute('data-src')
        image.children[0].childNodes[0].src=x
        unoberserve()
        console.log('該跑電影圖片了')
      }
    },
    detail(d, e) {
      this.$store.commit("change", true);
      this.$router.push({
        path: "/movieDetail",
        query: {
          id: d.id,
        },
      });
    },
    loveCheck(d, e) {
      if (this.love.includes(d.id)) {
        this.love = this.love.filter((element) => {
          return element != d.id;
        });
        localStorage.setItem("love-movie", this.love);
        alert("從最愛移除");
        console.log(this.love);
        e.target.className = "love";
      } else {
        this.love.push(d.id);
        localStorage.setItem("love-movie", this.love);
        alert("加入最愛");
        console.log(this.love);
        e.target.className = "love-active";
      }
    },
  },

  created() {
    this.$store.dispatch('fetch')
  },

  mounted() {
    if (localStorage.getItem("love-movie") == null) return;
    let x = localStorage.getItem("love-movie").split(",");
    for (let i = 0; i < x.length; i++) {
      this.love.push(Number(x[i]));
    }
    console.log(this.love);
  },

  updated() {
    this.$store.state.movieData.forEach((e) => {
      if (localStorage.getItem("love-movie") == null) return;
      if (localStorage.getItem("love-movie").includes(e.id)) {
        this.$refs[e.id][0].className = "love-active";
      }
    });
  },
  beforeDestroy() {
    console.log("電影列表死了", this.movieData);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mohave:ital,wght@1,300&display=swap");
h2 {
  color: white;
}

h1 {
  font-family: "Mohave", sans-serif;
  letter-spacing: 0.1em;
  width: 250px;
  text-align: center;
}

.movie-container {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.movie {
  width: 350px;
  margin: 15px 5px;
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.movie-img {
  position: relative;
}

.movie img {
  width: 250px;
  height: 350px;
}

.love {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2em;
}

.love-active {
  color: red;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2em;
}
</style>