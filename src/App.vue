<!-- This is the template for all pages on the website.
The navbar component and the footer component are both located here.
The <router-view/> tag displays the different pages based on which one is routed to. -->
<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <div class="footer">
      Man, what a beautiful footer. Anyway, this was made with Vue 2 and Bootstrap 4.
    </div>
  </div>
</template>

<!-- Here, we import the Navbar and the Footer from their Vue components to be used in the HTML above.
We export the Vue file to be used in main.js. -->
<script>
import Navbar from './components/Navbar';
export default {
  name: 'app',
  components: { Navbar, },
};
</script>

<!-- This is the styling for the website as a whole. 
Here, we include all the CSS elements shared by both pages. -->
<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');

html {
  margin: 0;
  padding: 0;
  height: 100vh;
  min-height: 100vh;
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
  color: #333;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

.wrapper {
  margin: auto;
  max-width: 65%;
}

.heroimg {
  margin-top: 75px;
  height: 35vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border: 3px solid #444;
}

/* This is the CSS for the animation on the gradients.
The percentages refer to the amount of time that has passed (for example, 50% of 10s is 5 seconds). */
@-webkit-keyframes hero-img {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@-moz-keyframes hero-img {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@keyframes hero-img { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}

.herotxt {
  position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	color: #fff;
	white-space: nowrap;
}

.herotxt h1 {
  font-size: 96px;
}

router-view {
  margin-bottom: -3vh;
}

.footer {
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 3vh;
  background-color: #999;
  text-align: center;
  color: rgba(255, 255, 255, 0.900);
  font-size: 24px;
}

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
