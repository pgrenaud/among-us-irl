<template>
  <div class="d-flex flex-column fill-height">
    <v-list class="flex-grow-1">
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

    <BottomBar app fixed grow>
      <v-btn color="success" text @click="start">
        <span>Start</span>
        <v-icon>mdi-play</v-icon>
      </v-btn>
    </BottomBar>
  </div>
</template>

<script>
import BottomBar from "@/components/BottomBar";

export default {
  name: "Lobby",
  components: {
    BottomBar
  },
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
      },
      {
        id: 5,
        name: "Bob Graton"
      },
      {
        id: 6,
        name: "Alice Graton"
      },
      {
        id: 7,
        name: "Joe Graton"
      },
      {
        id: 8,
        name: "Sylvie Graton"
      },
      {
        id: 9,
        name: "Bob Graton"
      },
      {
        id: 10,
        name: "Alice Graton"
      },
      {
        id: 11,
        name: "Joe Graton"
      },
      {
        id: 12,
        name: "Sylvie Graton"
      },
      {
        id: 13,
        name: "Bob Graton"
      },
      {
        id: 14,
        name: "Alice Graton"
      },
      {
        id: 15,
        name: "Joe Graton"
      },
      {
        id: 16,
        name: "Sylvie Graton"
      }
    ]
  }),
  methods: {
    start() {
      this.$snackbar.showMessage({
        content: "Starting the game",
        color: "success"
      });
    }
  },
  mounted() {
    this.$navigation.setTitle("Lobby");
    this.$loading.hideSpinner();
  }
};
</script>
