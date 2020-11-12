<template>
  <div class="container">
    <label>
      <input type="text" :value="component">
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      component: 'input'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  color: #ccc;
}
</style>