<template>
  <p>Hello {{ msg }}, I'm Defined in <b>src/components/HelloComponent.vue</b></p>
</template>

<script>
export default {
  props: ["msg"],
  name: "HelloComponent"
};
</script>

<style>
</style>
