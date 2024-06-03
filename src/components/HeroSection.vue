<template>
    <div class="hero-section" id="hero">
        <img src="https://robohash.org/85.64.203.44.png" alt="">
        <h1>Konstantin Nochevny</h1>
        <h2>From Web Exploration to Tech Solutions</h2>
        <p>Exploring the web since 2004 and evolving into a tech innovator. I blend full-stack development with
            digital
            marketing and automation to craft dynamic solutions that propel business growth.</p>
        <div class="hero-buttons">
            <a href="#projects">My Work</a>
            <a href="#contact">Contact</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.hero-section {
    padding: calc($spacing-unit*2) calc($spacing-unit*4);
    margin: $gutter-width 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    // gap: calc($spacing-unit*2);

    h1,
    h2 {
        text-align: center;
    }

    img {
        background: linear-gradient(320deg, #2F3339 0%, #15181C 100%);
        margin-bottom: 1rem;
        width: 100%;
        max-width: 450px;
        border-radius: 50%;
        box-shadow:
            // my take
            // -6px -6px 12px rgba(255, 255, 255, 0.25),
            // 6px 6px 12px rgba(0, 0, 0, 0.25);

            // from figma
            -25px -25px 60px rgba(255, 255, 255, 0.25),
            25px 25px 60px rgba(0, 0, 0, 0.25);
    }

    p {
        text-align: center;
        padding: 0 $gutter-width;
    }

    .hero-buttons {
        display: flex;
        gap: $gutter-width;
        margin-top: $gutter-width;
    }

}

@include mobile {
    .hero-section {

        img {
            max-width: 60%;
        }

        p {
            padding: 0;
        }

        .hero-buttons {
            margin: calc($gutter-width/2) 0;
        }
    }
}
</style>