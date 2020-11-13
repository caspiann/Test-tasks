<template>
  <div id="app">
    <registration-form/>
  </div>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm';
export default {
  name: 'App',
  components: {
    RegistrationForm
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
</style>
