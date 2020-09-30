<template>
  <v-snackbar v-model="show" :color="color" :timeout="timeout">
    {{ message }}

    <template v-if="close" v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="show = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  data: () => ({
    show: false,
    message: "",
    color: null,
    close: false,
    timeout: 5000,
    oddEven: false
  }),
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "SNACKBAR_SHOW_MESSAGE") {
        this.message = state.snackbar.content;
        this.color = state.snackbar.color;
        this.close = state.snackbar.close;
        this.timeout = this.close ? -1 : this.oddEven ? 5000 : 5001;
        this.oddEven = !this.oddEven;
        this.show = true;
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>
