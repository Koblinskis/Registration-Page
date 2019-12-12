<template>
  <div id="app">
    <registration/>
  </div>
</template>

<script>
import Registration from './components/Registration'

export default {
  name: 'app',
  components: {
    Registration
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
