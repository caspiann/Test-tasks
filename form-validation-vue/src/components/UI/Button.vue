<template>
  <div>
    <button type="submit" class="mainBlockStyle">{{ component }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      component: 'Button'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mainUiStyle';

.mainBlockStyle {
  width: 140px;
  height: 50px;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
}

</style>