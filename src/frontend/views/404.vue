<template>
  <div class="container">
    <div class="code">
      404
    </div>

    <div class="message">
      {{ $t("errors.404") }}
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #636b6f;
}

.code {
  border-right: 2px solid;
  padding: 0 15px 0 15px;
  font-size: 26px;
  text-align: center;
}

.message {
  padding: 10px;
  font-size: 18px;
  text-align: center;
}
</style>
