<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
<style>
body {
  padding: 0;
  margin: 0;
  background-color: #f8f8f8;
}
#app {
  width: 100%;
  margin-bottom: 30px;
}

</style>
