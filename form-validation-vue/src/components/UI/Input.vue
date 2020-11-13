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
@import '../../assets/mainUiStyle';
.container {
  input {
    box-sizing: border-box;
    height: 60px;
    cursor: inherit;
    padding-left: 5px;
    font-size: 40px;
    font-weight: 700;
  }
}
</style>