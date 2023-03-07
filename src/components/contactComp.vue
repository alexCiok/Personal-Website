<template>
    <div>
        <h1>Let's Talk</h1>
            <form @submit=submitMsg class="flex" action="">
                <div class="form-group top">
                    <input type="text" name="name" id="name">
                    <input type="email" name="email" id="email">
                </div>
                <div class="form-group bottom">
                    <input type="text" name="message" id="message">
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

.flex{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 30%;
}
.top{
    display: grid;
}
.bottom{
    display: grid;
    grid-template-columns: 1fr;
}
</style>