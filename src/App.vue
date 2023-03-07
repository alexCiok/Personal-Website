<template>
  <router-view
  ></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return({
     
    })
  },
  methods:{
  },
}
</script>

<style global>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');
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
