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

                // from figma
                // box-shadow:
                //     0px 4px 4px 0px rgba(0, 0, 0, 0.25),
                //     -5px -5px 10px 0px rgba(255, 255, 255, 0.25),
                //     5px 5px 10px 0px rgba(0, 0, 0, 0.25);

                // my take
                box-shadow:
                    //  inset|| offset-x | offset-y | blur-radius | spread-radius || color
                    1px 3px 2px 2px rgba(0, 0, 0, 0.25),
                    -3px -2px 4px -1px rgba(255, 255, 255, 0.25),
                    5px 5px 10px 0px rgba(0, 0, 0, 0.25);

                border-radius: 50px;
            }
        }
    }
}
</style>