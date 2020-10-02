<template>
  <v-container fluid>
    <v-list>
      <v-list-item v-for="user in users" :key="user.id">
        <v-list-item-avatar>
          <v-avatar color="grey" size="36">
            <span class="white--text headline">{{ user.name.charAt(0) }}</span>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="user.name"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon color="green">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon color="red">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "Lobby",
  data: () => ({
    users: [
      {
        id: 1,
        name: "Bob Graton"
      },
      {
        id: 2,
        name: "Alice Graton"
      },
      {
        id: 3,
        name: "Joe Graton"
      },
      {
        id: 4,
        name: "Sylvie Graton"
      }
    ]
  }),
  mounted() {
    this.$navigation.setTitle("Lobby");
    this.$loading.hideSpinner();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
