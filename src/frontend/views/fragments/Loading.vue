<template>
  <v-overlay v-model="show">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script>
export default {
  name: "Loading",
  data: () => ({
    show: false
  }),
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "LOADING_UPDATE") {
        this.show = state.loading.loading;
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>
