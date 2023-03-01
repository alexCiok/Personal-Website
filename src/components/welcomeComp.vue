<template>
    <div class="main">
        <div class="left">
            <h1>Hi, my name's Alex!</h1>
            
            <p class="hook">A FREELANCE DEVELOPER HELPING YOU 
                MAKE A SPLASH IN YOUR FIELD.</p>
            <button class="call" @click="this.$emit('scroll2Projects')">Check out my work</button>
        </div>
        <div class="right" id="largeScreen">
            <img src="../assets/HeadShot.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'welcomeComp',
        emits:['scroll2Projects'],
        data(){
            return({
            })
        }
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
    background-color: rgb(14, 16, 16); /*PLAY WITH */
    color: white;
}
button:hover{
    cursor: pointer;
    opacity: 0.9;
}
@media (min-width: 600px){
    #smallScreen {
        visibility: visible;
    }
    #largeScreen {
        visibility: hidden;
    }
}
@media (min-width: 992px){
    #smallScreen {
        visibility: hidden;
    }
    #largeScreen {
        visibility: visible;
    }
}
</style>