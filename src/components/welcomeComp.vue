<template>

    <div class="main">
        <div class="left">
            <h1 class="myName">Hi, my name's Alex!</h1>
            <div class="right" id="smallScreen">
                <img src="../assets/HeadShot.jpg" alt="">
            </div>
            <p class="hook">A freelance developer helping <b>you</b> 
                make an impact in your field.</p>
            <button class="call" @click="this.$emit('scroll2Projects')">
                Check out my work
            </button>
        </div>
        <div class="right" id="largeScreen"  v-motion-pop-visible-once>
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
    height: 90vh;
}
#largeScreen{
    transition-duration: 500ms;
}
h1,h2, p, button{
    font-family: "Open Sans", sans-serif;
}
h1{
    font-weight: 800;
    font-size: 2.5rem;
}
.left, .right{
    margin: 0 auto;
}
.hook{
    max-width: 40ch;
    padding: 5ch 0;
    font-size: 1.5rem;
    font-weight: 400;
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
@media (min-width: 0px){
    .myName{
        margin-top: 2ch;
    }
    #smallScreen {
        display: inherit;
        padding-top: 2ch;
        visibility: visible;
    }
    #largeScreen {
        display: none;
        visibility: hidden;
    }
}
@media (min-width: 992px){
    #smallScreen {
        display: none;
        visibility: hidden;
    }
    #largeScreen {
        display: inherit;
        visibility: visible;
    }
}
</style>