<template>
  <div>
    <div class="header-profile">
      <div class="container header-profile__nav-bar px-md">
        <div class="header-profile__logo">
          &lt;<span>luis-juzo</span>/>
        </div>
        <div>
          <circle-button @clickButton="openDrawer" />
        </div>
      </div>
    </div>
    <menu-drawer v-if="openedDrawer" />
  </div>
</template>

<script>
import CircleButton from './CircleButton.vue'
import MenuDrawer from './MenuDrawer.vue'

export default {
  components: {
    CircleButton,
    MenuDrawer
  },

  data () {
    return {
      openedDrawer: false
    }
  },

  created () {
  },

  methods: {
    openDrawer () {
      this.openedDrawer = !this.openedDrawer
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/application.scss';

.header-profile {
  background: $black;
  line-height: 60px;

  &__nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: 1.75rem;
    color: $primary;

    &>span {
      color: $white;
    }
  }
}
</style>
