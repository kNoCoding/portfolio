<template>
  <AppHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ResumeSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ResumeSection from './components/ResumeSection.vue'
import ContactSection from './components/ContactSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    HeroSection,
    AboutSection,
    ProjectsSection,
    ResumeSection,
    ContactSection
  }
}
</script>

<style>
</style>
