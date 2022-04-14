<template>
  <div class="search">
    <h3>MOVIEAPP</h3>
    <div class="type">
      <router-link to="/" @click.native="show">Movie</router-link>
      <router-link to="/loveMovies" @click.native="show">loves</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    show() {
      this.$store.commit("change", false);
    },
  },
};
</script>

<style>
.search {
  position: relative;
  top: 0;
  width: 100%;
  height: 65px;
  background-color: rgb(78, 78, 78);
  display: flex;
  align-items: center;
}

h3 {
  margin: 0 20px;
}

.type {
  width: 100%;
}

.type a {
  margin: 0 25px;
  color: gray;
  text-decoration: none;
}

.search input {
  padding: 8px 15px;
}

/*****************************************************/
@media screen and (max-width: 768px) {
  .search{
    width: 100%;
    height: 100vh;
  }

  .search h3{
    margin: auto;
  }

  .hamburger{
    width: 30px;
    height: 30px;
    border: 3px solid white;
  }

  .type{
   display: none;
  }
}
</style>