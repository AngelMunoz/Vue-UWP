<template>
  <h1>Hello About!</h1>
</template>

<script>
  export default {
    name: "AboutPage",
    mounted() {
      // native dialog
      new Windows.UI.Popups.MessageDialog("Woah This Page Has Been Mounted!", "I'm Mounted!").showAsync();
    }
  };
</script>

<style>
</style>
