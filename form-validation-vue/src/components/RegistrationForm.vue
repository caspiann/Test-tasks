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
        <Input
            title="Фамилия"
            type="text"
        />
        <Input
            title="Имя"
            type="text"
        />
        <Input
            title="Отчество"
            type="text"
        />
        <Input
            title="Дата рождения"
            type="date"
        />
        <Input
            title="Номер телефона"
            type="number"
        />
        <Input
            title="Пол"
            type="text"
        />
          <Select
              title="Группа клиентов"
              :options="[{option: 'VIP'}, {option: 'Проблемные'}, {option:'ОМС'}]"
          />
          <Select
              title="Лечащий врач"
              :options="[{option: 'Иванов'}, {option: 'Захаров'}, {option:'Чернышева'}]"
          />
        <Checkbox title="Не отправлять СМС"/>
      </fieldset>

      <fieldset>
        <legend>Адрес</legend>
        <Input
            title="Индекс"
            type="number"
        />
        <Input
            title="Страна"
            type="text"
        />
        <Input
            title="Область"
            type="text"
        />
        <Input
            title="Город"
            type="text"
        />
        <Input
            title="Улица"
            type="text"
        />
        <Input
            title="Дом"
            type="number"
        />

      </fieldset>

      <fieldset >
        <legend>Документы</legend>
        <Select
        title="Тип документа"
        :options="[{option: 'Паспорт'}, {option: 'Свидетельство о рождении'}, {option:'Вод. удостоверение'}]"
        />
        <Input
            title="Серия"
            type="number"
        />
        <Input
            title="Номер"
            type="number"
        />
        <Input
            title="Кем выдан"
            type="text"
        />
        <Input
            title="Дата выдачи"
            type="date"
        />
        <Button/>
      </fieldset>

    </form>

  </div>
</template>

<script>
import Checkbox from '@/components/UI/Checkbox';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import Select from '@/components/UI/Select';
import validation from '@/mixins/validation';
export default {
  mixins: [validation],
  name: 'App',
  components: {
    Input,
    Button,
    Checkbox,
    Select
  },
  data () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin: 25px 0;
  box-sizing: border-box;
  .header{
    margin-bottom: 10px;
  }
  fieldset{
    margin: 40px 0;
    border: 3px solid #000000;
    padding: 30px 50px;
    background: #ffff5d;
  }
  legend{
    padding: 5px 20px;
    text-align: left;
    font-weight: bold;
    font-size: 20px;
    border: 3px solid #000000;
    background: #fff;

  }
}
</style>