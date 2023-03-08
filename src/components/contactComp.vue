<template>
    <div>
        <h1>Let's Talk</h1>
            <form @submit=submitMsg action="https://formsubmit.co/acciok@gmail.com" method="POST">
                <div class="form-group top">
                    <div class="form-row">
                        <div class="col">
                            <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                        </div>
                        <div class="col">
                            <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                        </div>
                    </div>
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