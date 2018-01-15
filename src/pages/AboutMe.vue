<template>
  <div class="wrapper">
    <div class="heroimg">
        <div class="herotxt">
            <h1>{{ msg }}</h1>
        </div>
    </div>
  </div>
</template>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroimg {
  background: #4cb8c4; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4cb8c4, #3cd3ad); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4cb8c4, #3cd3ad); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
