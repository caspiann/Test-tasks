<template>
  <div class="container">
    <label for="title.dataName">{{ title.name }}<sup v-if="isRequired">*</sup></label>
    <input :type="type" id="title.dataName" :class=errorClass() v-model.trim="inputValue.value" @change="getData">
    <slot name="error"></slot>
  </div>
</template>

<script>
import getData from '@/mixins/getData';

export default {
  name: 'Input',
  props: ['title', 'type', 'isError', 'isRequired'],
  mixins: [getData],
  data() {
    return {
      inputValue: {
        value: '',
        dataValue: this.title.dataName,
      },
    };
  },
  methods: {
    errorClass() {
      if (this.isError) {
        return 'error';
      }
    },
  },
};
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

  label {
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #000;
  }
}

</style>