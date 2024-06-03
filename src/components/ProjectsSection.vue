<template>
    <div class="project-section" id="projects">
        <h2>My Projects</h2>
        <ul class="projects-list">
            <li class="project-item" v-for="project in projects" :key="project.id">
                <img :src="project.imageUrl" alt="Project image">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
                <div class="project-links">
                    <a :href="project.liveAppUrl" target="_blank">View App</a>
                    <a :href="project.codeOnGithubUrl" target="_blank">View Code</a>
                </div>
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
                    imageUrl: 'https://robohash.org/85.64.203.44.png',
                    name: 'Minesweeper Game',
                    description: 'A Minesweeper game built using Vanilla JavaScript, featuring classic gameplay mechanics and a modern interface.',
                    liveAppUrl: 'https://knocoding.github.io/minesweeperProject/',
                    codeOnGithubUrl: 'https://github.com/kNoCoding/minesweeperProject'
                },
                {
                    id: 2,
                    imageUrl: 'https://robohash.org/85.64.203.44.png',
                    name: 'Meme Generator',
                    description: 'An interactive web application created with Vanilla JavaScript, HTML, and CSS that allows users to create and customize memes.',
                    liveAppUrl: 'https://knocoding.github.io/meme-generator/',
                    codeOnGithubUrl: 'https://github.com/kNoCoding/meme-generator'
                },
                {
                    id: 3,
                    imageUrl: 'https://robohash.org/85.64.203.44.png',
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
    margin: $gutter-width 0;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .projects-list {
        list-style-type: none;
        display: flex;
        gap: 2rem;
        margin-top: 1rem;

        .project-item {
            background-color: $color-background;

            border-radius: 24px;
            box-shadow: -25px -25px 60px rgba(255, 255, 255, 0.25), 25px 25px 60px rgba(0, 0, 0, 0.25);
            padding: $gutter-width;

            display: flex;
            flex: 1;
            flex-direction: column;
            gap: 1rem;

            text-align: center;

            img {
                width: 100%;
                border-radius: 24px;
                background: linear-gradient(320deg, #2F3339 0%, #15181C 100%);
            }

            .project-links {
                display: flex;
                justify-content: space-evenly;
            }
        }
    }

    h2 {
        position: relative;
        padding-bottom: 1rem;

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

@include mobile {
    .project-section .projects-list {
        flex-direction: column;
    }

    .project-links{
        flex-direction: column;
        gap: calc($spacing-unit*2);
    }
}
</style>