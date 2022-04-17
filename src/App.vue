<template>
  <div class="container">
    <Search/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Search,Footer},

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body::-webkit-scrollbar {
  display: none;
}

.container {
  width: 100%;
  background-color: rgb(37, 37, 37);
  display: flex;
  flex-direction: column;
}
</style>
