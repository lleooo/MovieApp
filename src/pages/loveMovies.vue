<template >
  <div class="love-movies">
    <h2 v-show="!this.$store.state.showDetail">電影收藏</h2>
    <div class="love-movie-container" v-show="!this.$store.state.showDetail">
      <div
        class="love-movie"
        :id="d.id"
        v-for="(d, index) in movieInLocal"
        :key="index"
      >
        <div class="love-movie-img">
          <img :src="imgPath + d.poster_path" @click="detail(d, $event)" />
        </div>
        <h1>{{ d.original_title }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loveMovies",
  data() {
    return {
      movieInLocal: [],
      imgPath: "https://image.tmdb.org/t/p/w500",
    };
  },

  methods: {
    detail(d, e) {
      this.$store.commit("change", true);
      this.$router.push({
        path: "/movieDetail",
        query: {
          id: d.id,
        },
      });
    },
  },

  created() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e147528034b3b1192f389af6460b3ad9&language=zh-TW&page=1"
    )
      .then((respone) => {
        return respone.json();
      })
      .then((data) => {
        console.log(localStorage.getItem("love-movie"));
        data.results.forEach((element) => {
          if (localStorage.getItem("love-movie").includes(element.id)) {
            this.movieInLocal.push(element);
          }
        });
        console.log(this.movieInLocal);
      });
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

.love-movie-container {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.love-movie {
  width: 350px;
  margin: 15px 5px;
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.love-movie-img {
  position: relative;
}

.love-movie img {
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