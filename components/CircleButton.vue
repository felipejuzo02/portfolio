<template>
  <div class="circle-button" @click="$emit('clickButton')">
    <img class="circle-button__icon pa-sm" :src="icon.image" :alt="icon.name">
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'menu_black_24dp'
    }
  },

  computed: {
    icon () {
      return {
        image: require(`../static/assets/icons/${this.iconName}.svg`),
        name: this.iconName
      }
    }
  }
}

</script>

<style lang="scss">
@import '~/assets/scss/application.scss';

.circle-button {
  max-width: 40px;
  background: #1a1919;
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__icon {
    color: blue;
  }

  &:hover {
    background: #202020;
    cursor: pointer;
  }
}
</style>
