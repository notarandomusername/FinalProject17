<template>
  <div class="wrapper">
    <div class="heroimg">
      <div class="herotxt">
        <h1>{{ msg }}</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title"><strong>Color Grid</strong></h4>
            <p class="card-text">The first website I made with JavaScript (and jQuery). Hover over boxes and color them a random color.</p>
            <a href="https://notarandomusername.github.io/the-odin-project/ColorGrid/" class="btn btn-primary">Check it out!</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title"><strong>My Github</strong></h4>
            <p class="card-text">I couldn't think of anything notable I made... so here's my github! Hope you enjoy random code!</p>
            <a href="https://github.com/notarandomusername" class="btn btn-primary">Come visit!</a>
          </div>
        </div>
      </div>
    </div>

    <div class="card text-center">
      <div class="card-header">
        <strong>Coming Soon</strong>
      </div>
      <div class="card-body">
        <h4 class="card-title"><em>Oh no! There's nothing here!</em></h4>
        <p class="card-text">There will be more stuff here eventually (I hope)!</p>
        <a class="btn btn-warning">This does nothing because Vue hates popovers and/or me!</a>
      </div>
    </div>
  </div>
</template>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroimg {
  background: #085078;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #085078, #4cb8c4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #085078, #4cb8c4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 400% 400%;

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
