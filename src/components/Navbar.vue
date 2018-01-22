<!-- This is a navbar built with Bootstrap.
The <router-link> tag is provided by Vue and used by the Vue router. -->
<template>
    <nav class="navbar navbar-default navbar-fixed-top">
      <a class="navbar-brand">
        <router-link to="/">
          <i class="glyphicon glyphicon-tasks"></i>
          Portfolio
        </router-link>
      </a>
      <ul class="nav navbar-nav">
        <li><router-link to="/">My Works</router-link></li>
        <li><router-link to='/about'>About Me</router-link></li>
      </ul>
    </nav>
</template>

<!-- This exports the Vue file as a component to be used in App.vue -->
<script>
export default {
  name: 'Navbar',
};
</script>

<!-- This is the styling for the navbar. -->
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