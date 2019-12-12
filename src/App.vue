<template>
  <div id="app">
    <div class="header">
      <h1>Registrator Here</h1>
    </div>
    <div class="box">
      <registration></registration>
    </div>
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

<style scoped>
div.box {
  width: 800px;
  border: 2px solid darkblue;
  padding: 60px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 10px 10px grey
}
div.header {
  text-align: center;
  padding: 20px;
  text-shadow: 1px 1px 3px blue;
}
</style>
