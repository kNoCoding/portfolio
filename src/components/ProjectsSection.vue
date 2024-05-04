<template>
    <div class="project-section">
        <h2>My Projects</h2>
        <ul class="projects-list">
            <li class="project-item" v-for="project in projects" :key="project.id">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
                <a :href="project.liveAppUrl" target="_blank"><button>View App</button></a>
                <a :href="project.codeOnGithubUrl" target="_blank"><button>View Code</button></a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'Minesweeper Game',
                    description: 'A Minesweeper game built using Vanilla JavaScript, featuring classic gameplay mechanics and a modern interface.',
                    liveAppUrl: 'https://knocoding.github.io/minesweeperProject/',
                    codeOnGithubUrl: 'https://github.com/kNoCoding/minesweeperProject'
                },
                {
                    id: 2,
                    name: 'Meme Generator',
                    description: 'An interactive web application created with Vanilla JavaScript, HTML, and CSS that allows users to create and customize memes.',
                    liveAppUrl: 'https://knocoding.github.io/meme-generator/',
                    codeOnGithubUrl: 'https://github.com/kNoCoding/meme-generator'
                },
                {
                    id: 3,
                    name: 'Budget Tracker',
                    description: 'A comprehensive budget tracking application built with the MERN stack, designed to help users manage their finances effectively.',
                    liveAppUrl: 'https://mern-budget-tracker-client.onrender.com/',
                    codeOnGithubUrl: 'https://github.com/kNoCoding/MERN-Budget-Tracker'
                }
            ]
        }
    }
}



</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
</style>