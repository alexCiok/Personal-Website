<template>
    <div class="container">
        <h1>Contact Me</h1>
            <form @submit=submitMsg action="https://formsubmit.co/acciok@gmail.com" method="POST">
                <div class="form-group">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required _replyto>
                </div>
                <div class="form-group">
                    <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                </div>
                <button>Send</button>
            </form>
    </div>
</template>

<script>
    export default {
        name:'contactComp',
        methods:{
            submitMsg(){
                this.$router.push('/submit')
            }
        }
    }
</script>

<style scoped>
.container{
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    padding-bottom: 10vh;
    border-top: 2px solid rgb(0, 0, 0);;
}
h1{
    text-align: center;
    padding: 2rem 0;
    color: rgb(27, 25, 25);
    font-size: 2.5rem;
    font-weight: 600;
    margin: 2rem auto;
}
h1:hover{
    cursor:default;
}
.form-group{
    width: 60%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
textarea{
    width: 100%;
}
textarea,input{
    border: none;
    border-radius: 6px;
    padding: 1ch 1ch;
    margin: 1ch 0%;

}

.container{
    animation: pulse 20s infinite alternate;
}
input{
    width: 47.5%;
}
.flex{
    display: flex;
    margin: 0 auto;
}
button{
    border-radius: 15px;
    background: black;
    color: white;
    width: 50%;
    padding: 0.5ch 0;
    margin-top: 2rem;
    font-size: 1.75rem;
}
button:hover{
    cursor: pointer;
}
@keyframes pulse{
    0% {
        background-color:  #8bb7cb;
    }
    100%{
        background-color:  #62afef;
    }
}
</style>