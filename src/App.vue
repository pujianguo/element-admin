<template>
  <div id="app">
      <input v-model="data1" v-focus />
    <hello></hello>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      data1: ''
    }
  }
}
</script>
<style lang="scss">
#app {
  margin-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @include flex-center(column);
}
</style>
