<template>

    <header class="app-header">
        <p>kNoCoding</p>

        <ul>
            <li><a href="#hero">Hero</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </header>

</template>

<script setup>

</script>

<style scoped>
.app-header {
    position: sticky;
    top: 0;
    z-index: 1000;

    display: flex;
    justify-content: space-around;
    padding: 16px;

    background-color: #d3dcff;
}

p {
    font-size: 1.5rem;
    cursor: pointer;
}

ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 8px;
}

li {
    cursor: pointer;
}
</style>