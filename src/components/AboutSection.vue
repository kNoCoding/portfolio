<template>
    <div class="about-section" id="about">
        <img src="https://robohash.org/85.64.203.44.png" alt="">
        <div class="text-part">
            <h2>About Me</h2>
            <section>
                <p>
                    I'm Konstantin Nochevny, a tech enthusiast and full-stack developer with a solid background in
                    digital
                    marketing and web development. My journey began post-military service, where I quickly excelled in
                    SEO,
                    PPC,
                    and web design, leading to the co-founding of a digital services firm.
                </p>
                <p>
                    After three years of developing strategic digital solutions, I pursued advanced technical training
                    at
                    Coding
                    Academy, graduating from an intensive full-stack development program. Today, I am proficient in both
                    the
                    MERN and MEVN stacks, equipped to tackle complex technological challenges.
                </p>
                <p>
                    Dedicated to innovation, my goal is to enhance backend functionalities and user experiences, driving
                    success
                    in every project I undertake.
                </p>
            </section>
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss">
.about-section {
    padding: calc($spacing-unit*2) calc($spacing-unit*4);
    display: flex;

    .text-part{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    img {
        margin: 0 calc($gutter-width*3) 0 $gutter-width;
        background: linear-gradient(320deg, #2F3339 0%, #15181C 100%);
        height: 100%;
        align-self: center;
        border-radius: 24px;
        box-shadow:
            // my take
            // -6px -6px 12px rgba(255, 255, 255, 0.25),
            // 6px 6px 12px rgba(0, 0, 0, 0.25);

            // from figma
            -25px -25px 60px rgba(255, 255, 255, 0.25),
            25px 25px 60px rgba(0, 0, 0, 0.25);
    }
}

@include mobile {
    .about-section {
        flex-direction: column;
        text-align: center;

        img {
            margin: 0 0 calc($spacing-unit*3) 0;
            max-width: 60%;
        }
    }
}
</style>