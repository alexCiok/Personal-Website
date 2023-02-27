<template>
    <div class="nav-container">
        <div class="logo">
            <router-link to="/">
                <img src="../assets/sample_logo.png" alt="">
            </router-link>
        </div>
        <div class="links space-evenly">
            <a @click.prevent="handleLinks('home')" 
                :class="{active: homeActive}">Home</a>
            <a @click.prevent="handleLinks('about')"
                :class="{active: aboutActive}">About</a>
            <a @click.prevent="handleLinks('projects')"
                :class="{active: projectsActive}">Projects</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navigationComp',
        data(){
            return({
                homeActive: false,
                aboutActive: false,
                projectsActive: false,
            })
        },
        methods:{
            handleLinks(tab){
                if(tab == 'home'){
                    this.$emit('home', true);
                    this.homeActive= !this.homeActive
                    this.aboutActive = false;
                    this.projectsActive = false;
                }
                if(tab == 'about'){
                    this.$emit('about', true);
                    this.aboutActive= !this.aboutActive
                    this.homeActive = false;
                    this.projectsActive = false;
                }
                if(tab == 'projects'){
                    this.$emit('projects', true);
                    this.projectsActive= !this.projectsActive
                    this.homeActive = false;
                    this.aboutActive = false;
                }
            }
        }
    }
</script>

<style scoped>
.nav-container{
    display: flex;
    height: 7vh;
    align-items: center;
    color: white;
    background-color: rgb(0, 0, 0);
    padding: 0 2vw 0 3vw;
}
.active{
    color: rgb(139, 253, 225);
}
.links{
    width: 50%;
    margin: 0 auto;
}
img{
    height: 5vh;
}
a{
    color: white;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
    text-underline-offset: .4ch;
    cursor: pointer;
}
.space-evenly{
    display: flex;
    justify-content: space-evenly;
}
.space-around {

    display: flex;

    justify-content: space-around;
}
.space-between{
    justify-content: space-between;
}
</style>