<template>
  <div>
    <label>
      <select name="" id="" class="mainBlockStyle">
        <option value="1">{{ component }}</option>
        <option value="2">{{ component }}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      component: 'Hello world'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mainUiStyle';
select {
  box-sizing: border-box;
  height: 60px;
  cursor: inherit;
  margin: 20px 0;
  padding-left: 5px;
  padding-right: 20px;

  font-size: 40px;
  font-weight: 700;
}

</style>