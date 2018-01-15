<template>
    <nav class="navbar navbar-default navbar-fixed-top">
      <a class="navbar-brand">
        <i class="glyphicon glyphicon-tasks"></i>
        Portfolio
      </a>
      <ul class="nav navbar-nav">
        <li><router-link to="/">My Works</router-link></li>
        <li><router-link to='/about'>About Me</router-link></li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>