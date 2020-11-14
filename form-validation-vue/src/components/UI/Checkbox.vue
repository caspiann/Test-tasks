<template>
  <div class="container">
    <input type="checkbox" :id="title.dataName" v-model="inputValue.value" @change="getData"/>
    <label :for="title.dataName">{{title.name}}</label>
  </div>
</template>

<script>
import getData from '@/mixins/getData';
export default {
  name: 'checkbox',
  props: ['title'],
  mixins: [getData],
  data () {
    return {
      inputValue: {
        value: false,
        dataValue: this.title.dataName,
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mainUiStyle';

.container {
  text-align: left;
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked+label:before{
      content: 'X';
      color: #fff;
      box-shadow: none;
      cursor: pointer;
      background-color: #000;
      transition: all 0.2s ease-in;
    }
  }

  label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    padding-top: 15px;

    font-weight: bold;
    font-size: 20px;
    color: #000;

    &:before {
      display: flex;
      justify-items: center;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      content: 'X';
      color: #fff;
      width: 20px;
      height: 20px;
      border: 3px solid #000;
      background-color: #fff;
      box-shadow: inset 2px 2px 0 0 #ffff3d, 4px 4px 0 0 #fff;
      transition: all 0.2s ease-in;
    }
    &:hover:before{
      box-shadow: none;
      cursor: pointer;
      transition: all 0.2s ease-in;
    }
  }
}



</style>