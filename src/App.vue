<template>
  <AppHeader />
  <main>
    <HeroSection />
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    HeroSection,
  }
}
</script>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
