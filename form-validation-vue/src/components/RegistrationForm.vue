<template>
  <div class="container">
    <div class="header">
      <h1>Новый клиент</h1>
      <h3>Для регистрации нового клиента заполните форму.</h3>
      <h5><sup>*</sup> Поле обязательное для заполнения.</h5>
    </div>
    <form>
      <fieldset>
        <legend>Основные данные</legend>

        <InputElement type="text" title="Фамилия" is-error="true" is-required="true">
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement type="text" title="Имя" is-error="true" is-required="true">
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement
            title="Отчество"
            type="text"
        />

        <InputElement type="date" title="Дата рождения" is-error="true" is-required="true">
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement type="number" title="Номер телефона" is-error="true" is-required="true">
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement
            title="Пол"
            type="text"
        />
        <Select
            title="Группа клиентов"
            :options="[{option: 'VIP'}, {option: 'Проблемные'}, {option:'ОМС'}]"
            is-multiple="true"
            is-required="true"
        >
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </Select>
        <Select
            title="Лечащий врач"
            :options="[{option: 'Иванов'}, {option: 'Захаров'}, {option:'Чернышева'}]"
        />
        <Checkbox title="Не отправлять СМС" />
      </fieldset>
      <fieldset>
        <legend>Адрес</legend>
        <InputElement
            title="Индекс"
            type="number"
        />
        <InputElement
            title="Страна"
            type="text"
        />
        <InputElement
            title="Область"
            type="text"
        />

        <InputElement type="text" title="Город" is-error="true" is-required="true">
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement
            title="Улица"
            type="text"
        />
        <InputElement
            title="Дом"
            type="number"
        />

      </fieldset>

      <fieldset>
        <legend>Документы</legend>
        <Select
            title="Тип документа"
            :options="[{option: 'Паспорт'}, {option: 'Свидетельство о рождении'}, {option:'Вод. удостоверение'}]"
            is-required="true"
        >
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </Select>
        <InputElement
            title="Серия"
            type="number"
        />
        <InputElement
            title="Номер"
            type="number"
        />
        <InputElement
            title="Кем выдан"
            type="text"
        />
        <InputElement type="date" title="Дата выдачи" is-error="true" is-required="true">
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <Button title="Отправить" />
      </fieldset>

    </form>

  </div>
</template>

<script>
import Checkbox from '@/components/UI/Checkbox';
import InputElement from '@/components/UI/InputElement';
import Button from '@/components/UI/Button';
import Select from '@/components/UI/Select';
import InfoMessage from '@/components/UI/InfoMessage';
import validation from '@/mixins/validation';

export default {
  mixins: [validation],
  name: 'App',
  components: {
    InputElement,
    Button,
    Checkbox,
    Select,
    InfoMessage,
  },
  data() {
    return {
      mainData: {
        name: '',
        secondName: '',
        lastName: '',
        birthday: '',
        phone: '',
        sex: '',
        clients: [],
        doctor: '',
        isSendSMS: true,
      },
      address: {
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
      },
      document: {
        documentType: '',
        serialNumber: '',
        number: '',
        gettingPlace: '',
        gettingDate: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin: 25px 0;
  box-sizing: border-box;

  .header {
    margin-bottom: 10px;
  }

  fieldset {
    margin: 40px 0;
    border: 3px solid #000;
    padding: 30px 50px;
    background: #ffff5d;
  }

  legend {
    padding: 5px 20px;
    text-align: left;
    font-weight: bold;
    font-size: 20px;
    border: 3px solid #000;
    background: #fff;

  }
}
</style>