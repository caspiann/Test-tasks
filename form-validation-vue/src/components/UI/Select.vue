<template>
  <div class="container">
    <label for="select">{{title}}</label>
    <select name="" id="select" class="mainBlockStyle">
        <option v-for="(w, index) of options" :key="index" :value="w.option">{{w.option}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props:['title', 'options'],
  data () {
    return {
      component: 'Item1'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mainUiStyle';


.container {
  box-sizing: content-box;

  select {
    width: 50%;
    box-sizing: border-box;
    cursor: inherit;
    margin: 0;
    padding-left: 5px;
    padding-right: 20px;
    font-size: 40px;
    font-weight: 700;
  }

  label{
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #000;
  }

}

</style>