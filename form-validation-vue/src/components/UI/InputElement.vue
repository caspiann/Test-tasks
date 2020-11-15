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
import {validationMixin} from 'vuelidate';
import {required, minLength} from 'vuelidate/lib/validators';
import InfoMessage from '@/components/UI/InfoMessage';

export default {
  name: 'Input',
  props: ['title', 'type', 'isRequired'],
  mixins: [getData, validationMixin],
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
  methods: {
    setValue(val) {
      this.inputValue.value = val;
      this.$v.inputValue.value.$touch();
    },
    isDirtyField() {
      return this.$v.inputValue.value.$dirty && this.$v.inputValue.value.$model && this.isRequired;
    },
    isValidData() {
      if (this.title.dataName === 'phone') {
        return {
          valid: !this.$v.inputValue.value.minLength && this.isDirtyField() && this.isRequired,
          message: 'Введите корректеный номер телефона',
        };
      } else {
        return {
          valid: this.$v.inputValue.value.$dirty && !this.$v.inputValue.value.$model && this.isRequired,
          message: 'Обязательное поле',
        };
      }
    },
    isStartWithSeven() {
      if (this.title.dataName === 'phone') {
        return !this.$v.inputValue.value.mustStartWithSeven && this.isDirtyField();
      }
    },
  },
  validations() {
    const mustStartWithSeven = (value) => value[0] === '7';
    if (this.title.dataName === 'phone') {
      return {
        inputValue: {
          value: {required, minLength: minLength(11), mustStartWithSeven},
        },
      };
    } else {
      return {
        inputValue: {
          value: {required},
        },
      };
    }
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