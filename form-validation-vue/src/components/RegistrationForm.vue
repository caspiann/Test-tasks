<template>
  <div class="container">
      <Input/>
      <Select/>
      <Checkbox/>
      <InfoMessage/>
      <Button/>
  </div>
</template>

<script>
import Checkbox from '@/components/UI/Checkbox';
import InfoMessage from '@/components/UI/InfoMessage';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import Select from '@/components/UI/Select';
import validation from '@/mixins/validation';
export default {
  mixins: [validation],
  name: 'App',
  components: {
    Input,
    InfoMessage,
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
  width: 80vw;
  padding-top: 20px;
}
</style>