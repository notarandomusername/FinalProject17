<!-- This is the HTML for the About Me web page. -->
<template>
<!-- Vue can only have one external HTML component, so we put our HTML inside a div called wrapper. -->
  <div class="wrapper">
    <div class="heroimg">
      <div class="herotxt">
        <!-- This <h1> uses the Vue data included in the js to say "About Me" in our hero image. -->
        <h1>{{ msg }}</h1>
      </div>
    </div>

    <div class="bio-text">
      <h1>Hi! My name is Adam, and I'm a high school junior raised in Linden, NJ. Here is my portfolio.</h1>
      <!-- Since < and > are special characters in HTML, we use &lt; and &gt; respectively. -->
      <h1>&lt;/html&gt;</h1>
    </div>
  </div>
</template>

<!-- This exports the Vue file as a component to be used in the router index.js. -->
<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      msg: 'About Me',
    };
  },
};
</script>

<!-- This is the styling for the About Me page.
Added the "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroimg {
  /* This background section is for the hero image at the top of the page.
  Since CSS is cascading, we start off with the fallback backgrounds for older browsers, before transitioning to the gradient. */
  background: #4cb8c4; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4cb8c4, #3cd3ad); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4cb8c4, #3cd3ad); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 400% 400%;

  /* This is the animation for the gradients.
  hero-img is the variable name,
  10s is the number of seconds for a full animation cycle,
  ease says that the animation starts off slow, goes quickly in the middle, and ends slowly,
  and infinite says that the animation goes on infinitely. */
  -webkit-animation: hero-img 10s ease infinite;
  -moz-animation: hero-img 10s ease infinite;
  animation: hero-img 10s ease infinite;
}

.bio-text {
  margin: auto;
  margin-top: 20px;
  width: 75%;
  padding: 20px;
}

.bio-text h1 {
  font-size: 48px;
}

</style>
