<template>
  <v-container fluid>
    <h1 class="mt-5 mb-3">Login</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="room"
        :counter="4"
        :rules="roomRules"
        label="Room code"
        required
      ></v-text-field>

      <v-text-field
        v-model="name"
        :counter="16"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="primary" @click="submit" class="mt-5">
        Login
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    valid: true,
    name: "",
    nameLength: 16,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 16) || "Name must be less than 16 characters"
    ],
    room: "",
    roomLength: 4,
    roomRules: [
      v => !!v || "Room code is required",
      v => (v && v.length === 4) || "Room code must be exactly 4 characters"
    ]
  }),
  methods: {
    submit() {
      if (!this.validate()) {
        return;
      }

      this.$loading.showSpinner();
      setTimeout(() => {
        this.$container.loadLobby();
      }, 1000);
    },
    validate() {
      return this.$refs.form.validate();
    }
  },
  mounted() {
    this.$loading.hideSpinner();
  }
};
</script>

<style scoped></style>
