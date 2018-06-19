<template>
  <v-container grid-list-sm>
    <v-layout row wrap>
      <v-flex xs12 sm4 offset-sm2>
        <header>
          <h1>Hello person who cloned the repo!</h1>
        </header>
        <section>
          <p>
            This is the Vue you love and like, with <b>.vue</b> components!
          </p>
        </section>
      </v-flex>
      <v-flex xs12 sm4>
        <h4>For Example the next tag is a Vue Component</h4>
        <hello-component msg="Component!"></hello-component>
        <pre>{{ componentString }}</pre>
      </v-flex>
      <v-flex xs12 sm6 offset-sm2>
        <h1>A Native Audio Player!?</h1>
        <p>Even though this is an HTML Application: </p>
        <ul>
          <li>No HTML5 Audio Tag</li>
          <li>
            Natural Windows Controls for things like <br /> player buttons when you turn up/down the volume
            as well as when the screen is locked
          </li>
          <li>If you can do this, what else can be done?</li>
          <li>Madness!</li>
        </ul>
        <uwp-media-toolbar></uwp-media-toolbar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import HelloComponent from "../components/HelloComponent.vue";
  import UwpMediaToolbar from "../components/UwpMediaToolbar.vue";
  export default {
    name: "HomePage",
    components: {
      HelloComponent,
      UwpMediaToolbar
    },
    data() {
      return {
        componentString: '<hello-component msg="Component!"></hello-component>'
      }
    }
  };
</script>

<style>
</style>
