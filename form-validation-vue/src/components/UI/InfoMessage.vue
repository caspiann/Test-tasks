<template>
  <p :class="isSuccess ? 'success' : ''">{{message}}</p>
</template>

<script>
export default {
  name: 'Error',
  props:['message', 'isSuccess']
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 5px 0;
  color: #fc3939;
  font-weight: bold;
  font-size: 16px;
  text-decoration: underline;
  text-align: left;
}

.success{
  color: #029100;

}
</style>