<template>
    <div class="project-section" id="projects">
        <h2>My Projects</h2>
        <ul class="projects-list">
            <li class="project-item" v-for="project in projects" :key="project.id">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
                <a :href="project.liveAppUrl" target="_blank">View App</a>
                <a :href="project.codeOnGithubUrl" target="_blank">View Code</a>
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

<style lang="scss">
.project-section {
    padding: calc($spacing-unit*2) calc($spacing-unit*4);

    h2 {
        position: relative;
        padding-bottom: 0.5rem;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            background: linear-gradient(to right, #8a2be2 70%, #ffa500 30%);
        }
    }
}
</style>