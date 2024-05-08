<template>
    <div class="hero-section d-flex" id="hero">
        <div class="left">

            <h1>Konstantin Nochevny</h1>
            <h2>From Web Exploration to Tech Solutions</h2>
            <p>Exploring the web since 2004 and evolving into a tech innovator. I blend full-stack development with
                digital
                marketing and automation to craft dynamic solutions that propel business growth.</p>
            <button>View My Work</button>
        </div>
        <img src="https://robohash.org/85.64.203.44.png" alt="">
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.hero-section {
    align-items: center;

    @include mobile {
        flex-direction: column-reverse;
        justify-content: flex-end;
        padding: 40px 0 0 0;
        gap: 20px;

    }
}

.left {
    align-self: center;
}

img {
    background-color: lightgreen;
    border: 5px solid #f28f3b;
    border-radius: 50%;

}
</style>