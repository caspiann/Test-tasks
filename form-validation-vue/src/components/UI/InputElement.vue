<template>
  <div class="container">
    <label :for="title.dataName">{{ title.name }}<sup v-if="isRequired">*</sup></label>
    <input
        :type="type" :id="title.dataName" v-model.trim="inputValue.value" @change="getData"
        @input="setValue($event.target.value)"
    >

    <InfoMessage :message="isValidData().message" v-if="isValidData().valid" />
    <InfoMessage message="Номер телефона должен начинатся с '7'" v-else-if="isStartWithSeven()" />
  </div>
</template>

<script>
import getData from '@/mixins/getData';
import InfoMessage from '@/components/UI/InfoMessage';
import validationInput from '@/mixins/validationInput';

export default {
  name: 'Input',
  props: ['title', 'type', 'isRequired'],
  mixins: [getData, validationInput],
  components: {
    InfoMessage,
  },
  data() {
    return {
      inputValue: {
        value: '',
        dataValue: this.title.dataName,
      },
    };
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
    padding-top: 10px;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #000;
  }
}

</style>