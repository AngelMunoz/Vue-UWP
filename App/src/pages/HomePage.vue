<template>
  <div>
    <h1>Hello Home!</h1>
    <hello-component msg="Component!"></hello-component>
  </div>
</template>

<script>
import HelloComponent from "../components/HelloComponent.vue";
export default {
  name: "HomePage",
  components: {
    HelloComponent
  }
};
</script>

<style>
</style>
