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

<style lang="scss">
.app-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: $color-neutral-100;

    a:hover {
        text-decoration: none;
    }

    p {
        font-size: $font-size-h1;
        font-weight: bold;
        color: $color-primary;
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: $spacing-unit;
    }

    li {
        cursor: pointer;

        a {
            font-size: $font-size-base;
            color: $color-text;
            transition: color 0.3s;

            &:hover {
                color: $color-primary;
            }
        }
    }

    button {
        background: none;
        border: none;
        color: $color-text;
        cursor: pointer;
        font-size: $font-size-base;

        &:hover {
            color: $color-primary;
        }
    }
}
</style>