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
  margin: 0;
  padding: 5px 0;
  color: #fc3939;
  font-weight: bold;
  font-size: 16px;
  text-decoration: underline;
  text-align: left;
}
</style>