<template>
  <div class="container">
    <button type="submit" class="mainBlockStyle">{{ title }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['title'],
  data() {
    return {
      component: 'Отправить',
    };
  },
};
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

.mainBlockStyle:focus,
.mainBlockStyle:hover {
  background: #fff;
}

.mainBlockStyle:active{
  background: #6c6c6c;
  color: #fff;
}



</style>