<template>

    <header class="app-header">
        <a href="#top">
            <p>kNoCoding</p>
        </a>

        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <button>menu</button>
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
    justify-content: space-between;
    padding: 16px;

    background-color: #d3dcff;
}

a:hover {
    text-decoration: none;
}

p {
    font-size: 1.5rem;
    font-weight: bold;
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