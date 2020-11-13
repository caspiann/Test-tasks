<template>
  <div class="container">
    <label for="input" >{{title}}<sup>*</sup></label>
      <input :type="type" id="input">
<!--      <InfoMessage/>-->
  </div>
</template>

<script>
// import InfoMessage from '@/components/UI/InfoMessage';

export default {
  name: 'Input',
  components: {
    // InfoMessage
  },
  props: ['title', 'type'],
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mainUiStyle';
.container {
  padding: 0;
  margin: 0;
  input {
    box-sizing: border-box;
    height: 60px;
    cursor: inherit;
    padding-left: 5px;
    font-size: 40px;
    font-weight: 700;
  }
  label{
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #000;
  }
}
</style>