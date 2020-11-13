<template>
  <p>{{error}}</p>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      error: 'Error message!'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: red;
  font-weight: bold;
  font-size: 16px;
  text-decoration: underline;
}
</style>