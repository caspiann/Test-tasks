<template>
  <div class="container">
      <Input/>
      <Button/>
      <Checkbox/>
      <Select/>
    <Error/>
  </div>
</template>

<script>
import Checkbox from '@/components/UI/Checkbox';
import Error from '@/components/UI/Error';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import Select from '@/components/UI/Select';
import validation from '@/mixins/validation';
export default {
  mixins: [validation],
  name: 'App',
  components: {
    Error,
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
  color: #ccc;  
}
</style>