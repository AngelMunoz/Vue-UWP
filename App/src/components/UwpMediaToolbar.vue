<template>
  <v-toolbar dark>
    <v-btn icon @click="pickAudio">
      <v-icon>library_music</v-icon>
    </v-btn>
    <v-btn icon v-if="file.isAvailable && !isPlaying" @click="play">
      <v-icon>play_arrow</v-icon>
    </v-btn>
    <v-btn icon v-else-if="file.isAvailable && isPlaying" @click="pause">
      <v-icon>pause</v-icon>
    </v-btn>
    <v-toolbar-title>{{ file.displayName }} - {{file.displayType}}</v-toolbar-title>
  </v-toolbar>

</template>
<script>
  export default {
    name: 'UwpMediaToolbar',
    data() {
      return {
        isPlaying: false,
        file: {
          displayName: "Choose a File",
          displayType: 'Click on the left button',
          isAvailable: false
        },
        mediaSource: null,
        player: null,
        picker: null
      }
    },
    beforeMount() {
      this.player = new Windows.Media.Playback.MediaPlayer();
      this.player.onmediaended = this.resetControls.bind(this)
      this.picker = new Windows.Storage.Pickers.FileOpenPicker();
      this.picker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
      this.picker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.musicLibrary;
      this.picker.fileTypeFilter.replaceAll([".mp3"]);
    },
    methods: {
      async pickAudio() {
        try {
          const file = await this.picker.pickSingleFileAsync();
          if (file) { this.file = file }
          console.log(file);
        } catch (e) {
          console.error(e);
        }
      },
      play() {
        if (!this.player || !this.player.source || !this.mediaSource) {
          this.mediaSource = Windows.Media.Core.MediaSource.createFromStorageFile(this.file);
          this.player.source = this.mediaSource;
        }
        this.player.play();
        this.isPlaying = true
      },
      pause() {
        this.player.pause();
        this.isPlaying = false;
      },
      resetControls() {
        this.isPlaying = false;
      }
    }
  }
</script>
<style></style>