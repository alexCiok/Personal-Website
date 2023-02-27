<template>
    <div>
        <h1 class="head" ref="projects">Projects</h1>

        <div class="grid main-container">
            <div class="" v-for="project in projects" :key="project.projectName">
                <projectItem
                :projectName="project.projectName"
                :skillsUsed="project.skillsUsed"
                :imageURL="project.projectMedia"
                :isVideo="project.isVideo"
                :codeLink="project.codeLink"
                :projectDescription="project.projectDescription"
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
            logg(){
                console.log(this.projects);
            }
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
}
.grid{
    display: grid;
    gap: 2em 0;
    grid-template-columns:  repeat(auto-fit, minmax(450px, 1fr));
}
@media (max-width: 55em){
    .grid{
        grid-template-columns: auto;
        grid-auto-flow: row;
    }
}

</style>