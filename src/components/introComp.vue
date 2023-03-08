<template>
    <div class="container" 
    v-motion-fade>
    <nav>
            <h2 class="header welcome" 
            :enter="{opacity: 1, x:0, scale: 1}"
            :visible="{opacity: 1, x:0, scale: 1}"
            ><span>Welcome to </span></h2>
            <h1 class="header" v-motion-slide-left v-motion-slide-visible-left><span>alexciok.ca</span></h1>
    </nav>
    </div>
</template>

<script>
    export default {
        name: 'introComp',
        components:{
        },
        methods:{
        }
}
</script>

<style scoped>
.container{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* background: url('../assets/bg/intro-mountains-1.jpg'); */
    background: url('../assets/bg/intro-mountains-5.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    overflow: hidden;

}
.header{
    color: rgba(17, 13, 13, 0.9);
    font-weight: 800;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: .125ch;
    margin: 0 auto;
    transition-duration: 300ms;
}
.header:hover{
    cursor: default;
}
.show{
    opacity: 1;
}
h1,h2{
    font-family: 'Open Sans', sans-serif;
}
h2{
    font-size: min(8vw, 4rem);
}
h1{
    font-size: min(8vw, 4rem);
}
.welcome{
    margin-top: 10vh;
    margin: 10vh 10vw 0 10vw;
}

@media (max-width: 670px){
    .container{
        padding-top: 15vh;
    }
    .header{
        margin: 0 auto;
    }
    h2{
        animation: from-above 500ms ease-in forwards;
    }
    h1{
        opacity: 0;
        animation: from-above 800ms ease-in forwards;
        animation-delay: 300ms;
    }
}

</style>