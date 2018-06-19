<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <article>
        <header><h1>About UWP Apps in Javascript Generaly</h1></header>
        <section>
          <v-card>
            <v-card-title>If there's a thing I would say</v-card-title>
            <v-card-text>
              <v-btn @click="click">
                Click me!
              </v-btn>
              <p>
                So you may have come accross this and thing well looks cool but why not target this instead of something like
                <b><a href="https://electronjs.org/" target="_blank">Electron</a></b> You are right nothing prevents you to do it and yet you have more compilation targets
                Well if you are one of those anti electron guys, perhaps you are not anti-electron but concerned with security, perhaps you do want
                a truly native app made with web, well this is your chance, I don't think there's another platform that gets as native as this
                with Javascript, you <b>do</b> have access to the WinRT API, the same C++, C# and VB have.
              </p>
              <p>
                Now Weren't we as Javascript developers waiting for a truly native option? I Think we've had it for years
              </p>
            </v-card-text>
          </v-card>
        </section>
        <footer>

        </footer>
      </article>
    </v-flex>
  </v-layout>
</template>

<script>
  import UwpMediaToolbar from '../components/UwpMediaToolbar.vue'
  export default {
    name: "AboutPage",
    components: {
      UwpMediaToolbar
    },
    mounted() {
      // native dialog
      //new Windows.UI.Popups.MessageDialog("Woah This Page Has Been Mounted!", "I'm Mounted!").showAsync();
    },
    methods: {
      click() {
        new Windows.UI.Popups.MessageDialog(`Woah You Clicked Me!\nAs Native as It Gets`, "I'm Clicked!").showAsync();
      }
    }
  };
</script>

<style>
</style>
