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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    @include mobile {
        flex-direction: column-reverse;
        padding: 1rem 0;
        gap: 1rem;
    }

    .left {
        max-width: 600px;

        h1 {
            font-size: $font-size-h1;
            color: $color-primary;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: $font-size-h3;
            color: $color-secondary;
            margin-bottom: 1rem;
        }

        p {
            font-size: $font-size-base;
            color: $color-text;
            margin-bottom: 1.5rem;
        }

        button {
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            font-size: $font-size-base;
        }
    }

    img {
        max-width: 100%;
        border-radius: 50%;
    }
}
</style>