<template>
  <div class="container">
    <label :for="title.dataName">{{ title.name }}<sup v-if="isRequired">*</sup></label>
    <select name="" :id="title.dataName" class="mainBlockStyle" :multiple="isMultiple" v-model="inputValue.value" @change="getData">
      <option v-for="(w, index) of options" :key="index" :value="w.option">{{ w.option }}</option>
    </select>
    <slot name="error"></slot>
  </div>
</template>

<script>
import getData from '@/mixins/getData';
export default {
  name: 'Select',
  props: ['title', 'options', 'isMultiple', 'isRequired'],
  mixins: [getData],
  data() {
    return {
      inputValue: {
        value: this.isMultiple ? [] : '',
        dataValue: this.title.dataName,
      },
    };
  },
};
</script>

<style lang="scss" >
@import '../../assets/mainUiStyle';


.container {
  box-sizing: content-box;

  .mainBlockStyle{
    background: #fff;
    &:hover,
    &:active,
    &:focus{
      color: #000;
    }
  }

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

  label {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #000;
  }

}

@media (max-width: 768px) {
  .container {
    select{
      width: 70%;
    }
  }
}

@media (max-width: 480px) and (min-width: 320px) {
  .container {
    select{
      width: 100%;
    }
  }
}

</style>