<template>
    <div class="container">
        <img src="../assets/green-check.png">
        <h1>Thank You!</h1>
        <p>I respond to all inquiries within 24hrs.</p>
    </div>
</template>

<script>
    export default {
        name:'submitPage'
    }
</script>

<style scoped>
img{
    min-width: 100px;
    max-width: 10vw;
    margin: 5rem auto;
    border: 2px solid black;
    border-radius: 50%;
    background-color: rgb(250, 250, 250);
    padding: 1.5vw 1.5vw;
}

.container{
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
}
h1{
    font-weight: 800;
    margin-bottom: 2ch;
}
p{
    font-weight: 500;
    font-size: 1.75rem;
}
</style>