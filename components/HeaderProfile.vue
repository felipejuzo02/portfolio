<template>
  <div class="teste">
    testes
  </div>
</template>

<script>
import technologies from '../mixins/technologies'

export default {
  mixins: [technologies],

  data () {
    return {}
  },

  computed: {
  },

  created () {
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/application.scss';

.teste {
  color: $primary;
}
</style>
