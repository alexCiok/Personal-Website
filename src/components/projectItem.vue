<template>
    <div class="project-container">
                <div class="project-item header" v-motion-slide-visible-right>
                    <h1 class="project-title"> {{projectName}} </h1>
                    <h2 class="skills-used"> {{ skillsUsed }}</h2>
                </div>
                <div class="project-item" v-if="isVideo" >
                    <embed class="project-img" :src="imageURL" allowfullscreen frameborder="0"/>
                </div>
                <div class="project-item" v-else>
                    <a href="http://alexciok.ca/tutoring" target="_blank">
                        <img class="project-img" src="../assets/projects/tutoring-screen-1.jpg" alt="">
                    </a>
                </div>
                <div class="project-item">
                    <p class="project-description">
                        <b>{{projectName}}</b>{{projectDescription}}
                    </p>
                    <p class="project-description award" v-if="receivedAward">
                        Awarded <b>{{ awardReceived[0] }} place </b>
                        at {{ awardReceived[1] }}
                    </p>
                </div>
                <div class="project-item link">
                    <a :href="codeLink" target="_blank" class="button">
                        <span>View Code</span>
                    </a>
                </div>
                
            </div>
</template>

<script>
    export default {
        name:'projectItem',
        props:
        ['projectName',
        'imageURL',
        'projectDescription',
        'codeLink',
        'isVideo',
        'skillsUsed',
        'receivedAward',
        'awardReceived']
    }
</script>

<style scoped>
.project-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100%;
}
.project-item{
    width: 100%;
}
.header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: left;
    max-width: 90%;
    margin: 0 auto;

}
.project-description.award{
    margin-top: 2ch;
}
.project-title{
    font-size: 2.3rem;
    font-weight: 700;
    margin: 0 auto;
}
.skills-used{
    font-size: 1rem;
    font-weight: 300;
    margin: 0 auto 2ch auto;
    color: grey;
}
.project-img{
    width: 70%;
    height: 30vh;
    padding-bottom: 2ch;
}
.project-description{
    margin: 0 15%;
    text-align: left;
}
.link{
    position: relative;
    bottom: 0px;
}

a.button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
    background-color: rgb(91, 204, 204);
    padding: 0.75ch 1.5ch;
    border-radius: 6px;
    margin: 2rem;
}
a.button:hover{
    opacity: 0.9;
}
</style>