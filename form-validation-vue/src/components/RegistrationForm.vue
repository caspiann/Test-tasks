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

        <InputElement
            type="text" :title="{name:'Фамилия', dataName:'secondName'}" is-error="true" is-required="true"
            @_set="Value"
        >
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement
            type="text" :title="{name:'Имя', dataName:'name'}" is-error="true" is-required="true" @_set="Value"
        >
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement
            :title="{name:'Отчество', dataName:'lastName'}"
            type="text"
            @_set="Value"
        />

        <InputElement
            type="date"
            :title="{name:'Дата рождения', dataName:'birthday'}"
            is-error="true" is-required="true"
            @_set="Value"
        >
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement
            type="number"
            :title="{name:'Номер телефона', dataName:'phone'}"
            is-error="true" is-required="true"
            @_set="Value"
        >
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement
            :title="{name:'Пол', dataName:'sex'}"
            type="text"
            @_set="Value"
        />

        <Select
            :title="{name:'Группа клиентов', dataName:'clients'}"
            :options="[{option: 'VIP' }, {option: 'Проблемные'}, {option:'ОМС'}]"
            is-multiple="true"
            is-required="true"
            @_set="Value"
        >
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </Select>
        <Select
            :title="{name:'Лечащий врач', dataName:'doctor'}"
            :options="[{option: 'Иванов'}, {option: 'Захаров'}, {option:'Чернышева'}]"
            @_set="Value"
        />
        <Checkbox
            :title="{name:'Не отправлять СМС', dataName:'notSendSMS'}" @_set="Value"
        />
      </fieldset>
      <fieldset>
        <legend>Адрес</legend>
        <InputElement
            :title="{name:'Индекс', dataName:'index'}"
            type="number"
            @_set="Value"
        />
        <InputElement
            :title="{name:'Страна', dataName:'country'}"
            type="text"
            @_set="Value"
        />
        <InputElement
            :title="{name:'Область', dataName:'region'}"
            type="text"
            @_set="Value"
        />

        <InputElement
            type="text"
            :title="{name:'Город', dataName:'city'}"
            is-error="true" is-required="true"
            @_set="Value"
        >
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </InputElement>

        <InputElement
            :title="{name:'Улица', dataName:'street'}"
            type="text"
            @_set="Value"
        />
        <InputElement
            :title="{name:'Дом', dataName:'house'}"
            type="number"
            @_set="Value"
        />

      </fieldset>

      <fieldset>
        <legend>Документы</legend>
        <Select
            :title="{name:'Тип документа', dataName:'documentType'}"
            :options="[{option: 'Паспорт'}, {option: 'Свидетельство о рождении'}, {option:'Вод. удостоверение'}]"
            is-required="true"
            @_set="Value"
        >
          <template #error>
            <InfoMessage message="Обязательное поле" />
          </template>
        </Select>
        <InputElement
            :title="{name:'Серия', dataName:'serialNumber'}"
            type="number"
            @_set="Value"
        />
        <InputElement
            :title="{name:'Номер', dataName:'number'}"
            type="number"
            @_set="Value"
        />
        <InputElement
            :title="{name:'Кем выдан', dataName:'gettingPlace'}"
            type="text"
            @_set="Value"
        />
        <InputElement
            type="date"
            :title="{name:'Дата выдачи', dataName:'gettingDate'}"
            is-error="true" is-required="true" @_set="Value"
        >
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
import {validationMixin} from 'vuelidate';
import validation from '@/mixins/validation';
import setData from '@/mixins/setData';

export default {
  mixins: [validation, validationMixin, setData],
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
        'name': '',
        'secondName': '',
        'lastName': '',
        'birthday': '',
        'phone': '',
        'sex': '',
        clients: [],
        doctor: '',
        notSendSMS: true,
      },
      address: {
        'index': '',
        'country': '',
        'region': '',
        'city': '',
        'street': '',
        'house': '',
      },
      document: {
        documentType: '',
        'serialNumber': '',
        'number': '',
        'gettingPlace': '',
        'gettingDate': '',
      },
    };
  },

};
</script>

<style lang="scss">
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
    min-width: 0;
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

@media (max-width: 768px) {
  .container {
    margin: 15px 0;

    fieldset {
      margin: 20px 0;
      padding: 10px 20px;
    }
  }

}

@media (max-width: 480px) and (max-width: 320px) {
  .container {
    margin: 5px 0;

    fieldset {
      margin: 10px 0;
      padding: 10px;
    }
  }
}

</style>