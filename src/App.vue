<template>
  <Navigation />
  <Timer />
  <Schedule />
  <Mine />
  <About />
</template>

<style></style>

<script>
import Navigation from "./components/Navigation.vue"
import Timer from "./components/Timer.vue"
import Schedule from "./components/Schedule.vue";
import Mine from "./components/Mine.vue";
import About from "./components/About.vue";

export default {
  components: {
    Navigation,
    Timer,
    Schedule,
    Mine,
    About
  }
};
</script>