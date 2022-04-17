<template lang="">
    <observer @on-change="onChange" class="lazy">
        <div class='footer'>
        </div>
    </observer>
</template>
<script>
import Observer from "vue-intersection-observer";
export default {
  components: { Observer },
  data() {
    return {
       page:1,
       mD:[]
    }
  },
  methods: {
    onChange(entry,unoberserve) {
      console.log('Footer被執行了')
      console.log("see",entry.isIntersecting)
      if (entry.isIntersecting) {
        this.$store.dispatch('newFetch',[entry,unoberserve])
      }
    },
  },
};
</script>
<style scope>
.footer {
  width: 100%;
  height: 500px;
  background-color: aquamarine;
}
</style>