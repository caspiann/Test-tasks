<template>
  <div id="app">
    <registration-form v-if="!isFormChecked" />
    <InfoMessage message="Форма успешно отправлена!" is-success="true" v-else/>
  </div>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm';
import InfoMessage from '@/components/UI/InfoMessage';
export default {
  name: 'App',
  components: {
    RegistrationForm,
    InfoMessage
  },
  data(){
    return {
      isFormChecked: false
    }
  },
  methods: {
    checkForm() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.isFormChecked = true;
      }
    }
  }

}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 50vw;
}
</style>
