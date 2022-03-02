<template>
  <button class="button" @click="$emit('clickButton')">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/application.scss';

.button {
  background: $primary;
  padding: 12px 64px;
  border-radius: 32px;
  font-size: 1.2em;
}
</style>
