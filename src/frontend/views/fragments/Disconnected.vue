<template>
  <v-dialog v-model="show" persistent width="300">
    <v-card color="warning">
      <v-card-title>
        Disconnected!
        <v-spacer />
        <v-icon>mdi-connection</v-icon>
      </v-card-title>
      <v-card-text>
        <p>Trying to reconnect...</p>
        <v-progress-linear indeterminate color="white" class="mb-0" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Disconnected",
  data: () => ({
    show: true
  }),
  sockets: {
    connect: function() {
      this.show = false;
    },
    disconnect: function() {
      this.show = true;
    }
  },
  mounted() {
    this.show = !this.$store.state.socket.connected;
  }
};
</script>
