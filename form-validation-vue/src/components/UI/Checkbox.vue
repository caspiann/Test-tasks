<template>
  <div>
    <input type="checkbox" id="checkbox"/>
    <label for="checkbox">Hello</label>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      component: 'checkbox'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mainUiStyle';

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
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  user-select: none;

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
</style>