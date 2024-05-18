<template>
    <div class="contact-section" id="contact">
        <h2>Contact</h2>
        <p>Let's Connect! Whether you're seeking a dynamic collaboration, need a tailored tech solution, or just want to
            say hello, I'm here to listen and respond. Use the form below to drop me a message, or connect with me
            through my professional profiles.</p>

        <form>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Message">

            <button>Send Message</button>
        </form>

        <h3>My Links</h3>
        <ul>
            <li><a href="https://www.linkedin.com/in/k-nochevny/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/kNoCoding" target="_blank">GitHub</a></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.contact-section {
    text-align: center;
    padding: 2rem 0;

    h2 {
        font-size: $font-size-h2;
        color: $color-primary;
    }

    p {
        font-size: $font-size-base;
        color: $color-text;
        margin: 1rem 0;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 2rem 0;

        input,
        textarea {
            width: 100%;
            max-width: 400px;
            padding: 1rem;
            border: 1px solid $color-neutral-300;
            border-radius: 4px;
        }

        button {
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            font-size: $font-size-base;
        }
    }

    h3 {
        font-size: $font-size-h3;
        color: $color-primary;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: center;
        gap: 1rem;

        li {
            a {
                font-size: $font-size-base;
                color: $color-primary;

                &:hover {
                    color: darken($color-primary, 10%);
                }
            }
        }
    }
}
</style>