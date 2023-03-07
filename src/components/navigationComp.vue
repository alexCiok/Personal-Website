<template>
    <div class="nav-container">
        <div class="logo">
            <router-link to="/" @click="this.$emit('scroll2Home')">
                <img src="../assets/signature-logo2.png" alt="">
            </router-link>
        </div>
        <div class="links space-evenly">
            <a class="hover-this"
                @click="this.$emit('scroll2About')"
                :class="{active: aboutActive}">
                <span>About</span>
            </a>
            <a class="hover-this"
                @click="this.$emit('scroll2Projects')"
                :class="{active: projectsActive}">
                <span>Projects</span>
            </a>
            <a class="hover-this" 
                @click="this.$emit('scroll2Contact')"
                :class="{active: aboutActive}">
                <span>Contact</span>
            </a>
            <div class="cursor"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'navigationComp',
        emits:['scroll2Projects'],
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
        },
        
}
</script>

<style scoped>
.nav-container{
    display: flex;
    height: 10vh;
    position: sticky;
    align-items: center;
    color: white;
    background-color: rgb(0, 0, 0);
    padding: 0 2vw 0 3vw;
}
.hover-this {
  transition: all 0.3s ease;
}
span{
  font-weight: 400;
  color: #fff;
  font-size: 36px;
  pointer-events: none;
  transition: transform 0.1s linear;
}

.cursor {
  pointer-events: none;
  position: fixed;
  padding: 0.35rem;
  background-color: #ebe6e6;
  border-radius: 50%;
  mix-blend-mode: difference;
  transition: transform 0.2s ease;
}

.hover-this:hover ~ .cursor {
  transform: translate(-50%, -50%) scale(8);
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
    border-radius: 50%;
    border: 2px solid black;
}
img:hover{
    border: none;
}
a, span{
    color: white;
    font-family: 'Open-Sans', sans-serif;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
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