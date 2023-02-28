<template>
    <div class="container">
        <h2>Make a splash in <br> your industry</h2>
        <!-- <h2>Rise above <br>the competition</h2> -->
    </div>
</template>

<script>
    export default {
        name: 'introComp'
    }
</script>

<style scoped>
.container{
    display: flex;
    height: 100vh;
    /* background: url('../assets/bg/intro-mountains-1.jpg'); */
    background: url('../assets/bg/intro-mountains-5.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
}
h2{
    justify-content: center;
    margin: 15vh auto 0 auto;
    align-items: center;
    color: rgba(27, 36, 106, 0.90);
    font-size: 3rem;
    text-transform: capitalize;
    letter-spacing: .125ch;
}
h2:hover{
    cursor: default;
}
</style>