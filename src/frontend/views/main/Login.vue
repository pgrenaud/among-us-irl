<template>
  <v-container fluid>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="room"
        :counter="roomLength"
        :rules="roomRules"
        :label="$t('login.label.room')"
        prepend-icon="mdi-home"
        validate-on-blur
        clearable
        required
        autocomplete="off"
      ></v-text-field>

      <v-text-field
        v-model="name"
        :counter="nameLength"
        :rules="nameRules"
        :label="$t('login.label.name')"
        prepend-icon="mdi-account-box"
        clearable
        required
        autocomplete="nickname"
      ></v-text-field>

      <v-btn :disabled="!valid" color="primary" @click="submit" class="mt-5">
        {{ $t("login.label.submit") }}
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
    nameRules: [],
    room: "",
    roomLength: 4,
    roomRules: []
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
    this.$navigation.setTitle("Login");
    this.$loading.hideSpinner();

    this.nameRules = [
      v => !!v || this.$i18n.t("login.rules.name.required"),
      v =>
        (v && v.length <= this.nameLength) ||
        this.$i18n.t("login.rules.name.length", { length: this.nameLength })
    ];
    this.roomRules = [
      v => !!v || this.$i18n.t("login.rules.room.required"),
      v =>
        (v && v.length === this.roomLength) ||
        this.$i18n.t("login.rules.room.length", { length: this.roomLength })
    ];
  }
};
</script>

<style scoped></style>
