<template>
    <div class="main">
        <div class="left">
            <h1>Hi, my name's Alex!</h1>
            <p class="hook">A FREELANCE DEVELOPER TAKING YOU
                FROM 'LOREM IPSUM' TO DREAM WEBSITE.</p>
            <button class="call" @click="this.$emit('scroll2Projects')">Check out my work</button>
        </div>
        <div class="right">
            <img src="../assets/HeadShot.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'welcomeComp',
        emits:['scroll2Projects']
    }
</script>
<style scoped>
.main{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    height: 84vh;
}
.left, .right{
    margin: 0 auto;
}
.hook{
    max-width: 40ch;
    padding: 5ch 0;
}
img{
    max-width: 45vw;
    max-height: 50vh;
    border-radius: 50%;
}
.call{
    border: none;
    font-size: 1.5rem;;
    padding: 1ch 1.5ch;
    border-radius: 15px;
    background-color: blue;
    color: white;
}
button:hover{
    cursor: pointer;
    opacity: 0.9;
}
</style>