<template>
  <navigationComp/> 
  <router-view
  ></router-view>
</template>

<script>
import navigationComp from '@/components/navigationComp.vue';

export default {
  name: 'App',
  components: {
    navigationComp
  },
  data(){
    return({
     
    })
  },
  
 
}
</script>

<style>
html{scroll-behavior:smooth}

*,*:before,*:after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
