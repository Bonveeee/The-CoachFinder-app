<template>
  <div class="spinner-container">
    <q-spinner :size="size" :color="color" type="dots" :dark="true"></q-spinner>
  </div>
</template>

<script>
export default {
  name: 'BaseSpinner',
  props: {
    size: {
      type: String,
      default: '50px'
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
