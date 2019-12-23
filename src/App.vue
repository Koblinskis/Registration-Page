<template>
  <div id="app" class="cat">
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
div.cat {
  background-image: url('https://marketplace.canva.com/MADatDTo_Mw/1/screen_2x/canva-sleeping-cat-curled-up-in-a-ball-MADatDTo_Mw.jpg');
  background-size: cover;
  height: 950px
}
div.box {
  width: 800px;
  background-color: white;
  border: 2px solid darkblue;
  padding: 60px;
  margin-top: 200px;
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
