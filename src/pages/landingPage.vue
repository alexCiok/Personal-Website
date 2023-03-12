<template>
    <div class="main-wrapper">
        <navigationComp
            id="navigation"
            @scroll2Home="scrollToHome" 
            @scroll2About="scrollToAbout"
            @scroll2Projects="scrollToProjects"
            @scroll2Contact="scrollToContact"
        />
        <introComp
            ref="home"
        />
        <div class="main">
            <welcomeComp
            ref="about"
                @scroll2Projects="scrollToProjects"
            />
            <projectsComp
            ref="projects"
            />
            <contactComp
            ref="contact"
            />
        </div>
    </div>
</template>

<script>
import welcomeComp from '@/components/welcomeComp.vue'
import introComp from '@/components/introComp.vue'
import projectsComp from '@/components/projectsComp.vue'
import contactComp from '@/components/contactComp.vue'
import navigationComp from '@/components/navigationComp.vue';

    export default {
        name: 'landingPage',
        components: {
            welcomeComp,
            introComp,
            projectsComp,
            contactComp,
            navigationComp,
        },
        mounted(){
            (function () {
            const link = document.querySelectorAll('a.hover-this');
            const cursor = document.querySelector('.cursor');
            const animateit = function (e) {
                const span = this.querySelector('span');
                const { offsetX: x, offsetY: y } = e,
                { offsetWidth: width, offsetHeight: height } = this,

                move = 25,
                xMove = x / width * (move * 2) - move,
                yMove = y / height * (move * 2) - move;

                span.style.transform = `translate(${xMove}px, ${yMove}px)`;

                if (e.type === 'mouseleave') span.style.transform = '';
            };

            const editCursor = e => {
                const { clientX: x, clientY: y } = e;
                cursor.style.left = x + 'px';
                cursor.style.top = y + 'px';
            };

            link.forEach(b => b.addEventListener('mousemove', animateit));
            link.forEach(b => b.addEventListener('mouseleave', animateit));
            window.addEventListener('mousemove', editCursor);
            }
            )();
        },
        methods:{
            scrollToProjects(){
                this.$refs.projects.$el.scrollIntoView();
             },
            scrollToHome(){
                this.$refs.home.$el.scrollIntoView();
            },
            scrollToContact(){
                this.$refs.contact.$el.scrollIntoView();
            },
            scrollToAbout(){
                this.$refs.about.$el.scrollIntoView();
            }
        }
}   
</script>

<style local>
.main{
    width: 85%;
    max-width: 1000px;
    margin: 0 auto;
    background: white;
}
#navigation{
    position: sticky;
    top: 0;
    z-index: 1;
    opacity: 0.85;
}
.main-wrapper{
    background: linear-gradient( #333550, rgb(214, 214, 214));
    height: 100%;
}
@media (max-width: 769px) {
    .main{
        width: 100%;
        overflow: hidden;
    }
}
</style>