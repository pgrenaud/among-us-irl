<template>
  <v-app>
    <v-main>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "@/views/main/HelloWorld.vue";

export default {
  name: "Main",
  components: {
    HelloWorld
  }
};
</script>
