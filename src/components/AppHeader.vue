<template>

    <header class="app-header">
        <p>kNoCoding</p>

        <ul>
            <li>Hero</li>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
    </header>

</template>

<script setup>

</script>

<style scoped>
.app-header {
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