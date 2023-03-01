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
            projectsComp,
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
    width: 85%;
    max-width: 1000px;
    margin: 0 auto;
    background: white;
    padding-bottom: 5rem;

}
.main-wrapper{
    background: linear-gradient( #333550, rgb(214, 214, 214));
    height: 100%;
}
@media only screen and (max-width: 769px) {
    .main{
      width: 100%;
    }
}
</style>