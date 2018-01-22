<template>
<!-- Vue can only have one external HTML component, so we put our HTML inside a div called wrapper. -->
  <div class="wrapper">
    <div class="heroimg">
      <div class="herotxt">
        <!-- This <h1> uses the Vue data included in the js to say "About Me" in our hero image. -->
        <h1>{{ msg }}</h1>
      </div>
    </div>
    <!-- This block of code represents the two Bootstrap cards that hold the information for the Color Grid website and my Github.
    We use col-sm-6 for our grid sizes as that ensures that they are the only two cards on that row no matter the size of the screen (as long as they can both fit in a row). -->
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <!-- The <strong> semantic tag puts emphasis on the title. -->
            <h4 class="card-title"><strong>Color Grid</strong></h4>
            <p class="card-text">The first website I made with JavaScript (and jQuery). Hover over boxes and color them a random color.</p>
            <a href="https://notarandomusername.github.io/the-odin-project/ColorGrid/" class="btn btn-primary">Check it out!</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <!-- The <strong> semantic tag puts emphasis on the title. -->
            <h4 class="card-title"><strong>My Github</strong></h4>
            <p class="card-text">I couldn't think of anything notable I made... so here's my github! Hope you enjoy random code!</p>
            <a href="https://github.com/notarandomusername" class="btn btn-primary">Come visit!</a>
          </div>
        </div>
      </div>
    </div>

    <!-- This block of code represents the bottom-most large card which holds the coming soon information.
    We make the button btn-warning as the change in color contrasts the rest of the buttons and signifies that it does not work. -->
    <div class="card text-center">
      <div class="card-header">
        <!-- The <strong> semantic tag puts emphasis on the title. -->
        <strong>Coming Soon</strong>
      </div>
      <div class="card-body">
        <!-- The <em> semantic tag puts emphasis on the subtitle. -->
        <h4 class="card-title"><em>Oh no! There's nothing here!</em></h4>
        <p class="card-text">There will be more stuff here eventually (I hope)!</p>
        <a class="btn btn-warning">This does nothing!</a>
      </div>
    </div>
  </div>
</template>

<!-- This exports the Vue file as a component to be used in the router index.js. -->
<script>
export default {
  name: 'MyWorks',
  data() {
    return {
      msg: 'My Works',
    };
  },
};
</script>

<!-- This is the styling for the My Works page.
Added the "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* This background section is for the hero image at the top of the page.
  Since CSS is cascading, we start off with the fallback backgrounds for older browsers, before transitioning to the gradient. */
.heroimg {
  background: #085078;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #085078, #4cb8c4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #085078, #4cb8c4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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

.row {
  margin: 20px;
  margin-top: 25px;
}

.card {
  margin: auto;
  width: 65%;
  border: 2px solid #999;
  padding: 10px;
  margin-bottom: 15px;
  background-color: lightblue;
}

.card-header {
  font-size: 24px;
}

.card-title {
  font-size: 18px;
}

.card-text {
  font-size: 16px;
}

.btn {
  border: 1px solid #333;
}
</style>
