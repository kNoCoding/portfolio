<template>

    <header class="app-header">

        <ul>
            <li><a href="#top" class="logo">kNoCoding</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

    </header>

</template>

<script setup>

</script>

<style lang="scss">
.app-header {
    padding: $gutter-width calc($gutter-width*2);

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;

        .logo {
            font-weight: 600;
        }

        li {
            a {
                padding: $spacing-unit calc($spacing-unit*2);
                background-color: $color-background;
                // TODO: fix drop shadow on these buttons
                box-shadow:
                    -4px -4px 4px rgba(255, 255, 255, 0.15),
                    5px 5px 10px rgba(0, 0, 0, 0.25);
                // box-shadow:
                //     -4px -4px 4px rgba(255, 255, 255, 0.25),
                //     0px 4px 4px rgba(0, 0, 0, 0.25);

                border-radius: 50px;
            }
        }
    }
}
</style>