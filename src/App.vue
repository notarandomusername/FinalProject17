<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'app',
  components: { Navbar },
};
</script>

<style>
html {
    margin: 0;
    padding: 0;
    height: 100vh;
}
h1, h2 {
  font-weight: normal;
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
.wrapper {
  margin: auto;
  max-width: 95%;
}
.heroimg {
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.herotxt {
  position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	color: #fff;
  font-size: 48px;
	text-align: center;
	white-space: nowrap;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
