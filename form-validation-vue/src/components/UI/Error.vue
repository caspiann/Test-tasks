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
p{
  color: red;
}
</style>