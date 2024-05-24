<template>

    <header class="app-header">
        <a href="#top" class="logo">kNoCoding</a>
        <ul v-show="!mobile" class="non-mobile-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>


        <button @click="toggleMobileNav" v-show="mobile" :class="{ 'mobile-menu-active': mobileNav }">Menu</button>

        <transition name="mobile-nav">
            <ul v-if="mobileNav" class="dropdown-nav">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </transition>



    </header>

</template>

<script>
export default {
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen)
        this.checkScreen()
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        checkScreen() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 992) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        }
    },
}
</script>

<style lang="scss">
.app-header {
    padding: $gutter-width calc($gutter-width*2);
    display: flex;
    gap: calc($gutter-width*4);
    justify-content: space-between;
    align-items: center;

    .non-mobile-menu {
        list-style: none;
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        gap: calc($spacing-unit*4);

        .logo {
            font-weight: 600;
        }

        li {
            a {
                padding: $spacing-unit calc($spacing-unit*2);
                background-color: $color-background;

                // from figma
                box-shadow:
                    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
                    -5px -5px 10px 0px rgba(255, 255, 255, 0.25),
                    5px 5px 10px 0px rgba(0, 0, 0, 0.25);

                // my take
                // box-shadow:
                //     //  inset|| offset-x | offset-y | blur-radius | spread-radius || color
                //     1px 3px 2px 2px rgba(0, 0, 0, 0.25),
                //     -3px -2px 4px -1px rgba(255, 255, 255, 0.25),
                //     5px 5px 10px 0px rgba(0, 0, 0, 0.25);

                border-radius: 50px;
            }
        }
    }



    .dropdown-nav {
        display: flex;
        gap: calc($spacing-unit*3);
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 150px;
        height: 100%;
        background-color: white;
        top: 0;
        left: 0;
        list-style: none;
        padding: calc($spacing-unit*3);


        a {
            color: black;
        }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
        transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
        transform: translateX(0);
    }


}

@include mobile {
    .app-header {
        padding: calc($spacing-unit*2) calc($spacing-unit*4);
    }

}
</style>