<template>
    <div class="container">
        <h2 class="header welcome">Welcome to</h2>
        <h1 class="header">alexciok.ca</h1>
        <!-- <h2>Rise above <br>the competition</h2> -->
    </div>
</template>

<script>
    export default {
        name: 'introComp'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
.container{
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* background: url('../assets/bg/intro-mountains-1.jpg'); */
    background: url('../assets/bg/intro-mountains-5.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
}
.header{
    justify-content: center;
    margin: 0vh auto min(1vw,3rem) auto;
    align-items: center;
    color: rgba(17, 13, 13, 0.9);
    text-transform: uppercase;
    letter-spacing: .125ch;
}
h1,h2{
    font-family: 'Open Sans', sans-serif;
}
h1{
    font-size: min(8vw, 4rem);
}
h2{
    font-size: min(8vw, 4rem);
}
.welcome{
    margin-top: 10vh;
    margin-left: 20vw;
}
.header:hover{
    cursor: default;
}
@media (max-width: 670px){
    .container{
        padding-top: 15vh;
    }
}
</style>