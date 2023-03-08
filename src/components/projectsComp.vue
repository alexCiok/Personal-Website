<template>
    <div>
        <h1 class="head" ref="projects" v-motion-fade-visible-once>Projects</h1>

        <div class="grid main-container">
            <div class="project" v-for="project in projects" 
            :key="project.projectName"
            >
                <projectItem 
                :projectName="project.projectName"
                :skillsUsed="project.skillsUsed"
                :imageURL="project.projectMedia"
                :isVideo="project.isVideo"
                :codeLink="project.codeLink"
                :projectDescription="project.projectDescription"
                :receivedAward="project.receivedAward"
                :awardReceived="project.awardReceived"
                />
                </div>
            </div>
        </div>
</template>

<script>
import projectItem from './projectItem.vue'
let projects = require('../projects')
export default {
        name:'projectsComp',
        components:{
            projectItem
        },
        data(){
            return({
                projects: projects.projects,
            })
        },
        methods:{
            
        }
    }
</script>

<style scoped>
.head{
    text-decoration: underline;
    text-underline-offset: 0.5ch;
    text-align: center;
    padding-bottom: 2em;
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 auto;
}
.head:hover{
    cursor: default;
}
.grid{
    display: grid;
    gap: 2em 0;
    grid-template-columns:  repeat(auto-fit, minmax(450px, 1fr));
}
.project:nth-child(2){
    transition-delay: 400ms;
}
.project:nth-child(3){
    transition-delay: 800ms;
}
.project:nth-child(4){
    transition-delay: 1200ms;
}
@media (max-width: 55em){
    .grid{
        grid-template-columns: auto;
        grid-auto-flow: row;
    }
}

</style>