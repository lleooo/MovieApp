<template>
  <div class="container">
    <Search/>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from "./components/Search.vue";

export default {
  components: { Search},
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
