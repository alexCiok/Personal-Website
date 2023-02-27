<template>
    <div class="main-wrapper">
        <div class="main">
            <welcomeComp
            @scroll2Projects="scrollToProjects"
            />
            <projectsComp ref="projects"/>
        </div>
    </div>
</template>

<script>
import welcomeComp from '@/components/welcomeComp.vue'
import projectsComp from '@/components/projectsComp.vue'
    export default {
        name: 'landingPage',
        components: {
            welcomeComp,
            projectsComp
        },
        methods:{
            scrollToProjects(){
                this.$refs.projects.$el.scrollIntoView();
             }
        }
        
}   
</script>

<style local>
.main{
    width: 70%;
    margin: 0 auto;
    background: white;
    padding-bottom: 5rem;
}
.main-wrapper{
    background: linear-gradient(white, rgb(92, 104, 136));

    height: 100%;
}
@media only screen and (max-width: 500px) {
    .main{
      width: 100%;
    }
}
</style>