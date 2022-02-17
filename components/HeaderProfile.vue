<template>
  <div>
    <div v-for="(technology, index) in teste" :key="index">
      <img :src="technologyImage(technology).image" alt="">
    </div>
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
    teste () {
      return [
        'javascript',
        'html'
      ]
    }
  },

  created () {
    console.log(this.technologyImage('javascript'))
  }
}
</script>
