<template>
  <div class="index">
    <HeaderProfile />

    <div class="index__presentation">
      <div>
        <img src="" alt="My photo">
      </div>

      <div class="my-xl">
        <small class="index__greetings">Hello,</small>
        <h2 class="index__name">
          I'm Luis Felipe Juzo
        </h2>
        <p class="index__profession">
          { <span>Frontend Developer</span> }
        </p>
      </div>

      <div>
        <main-button label="Abot me" @clickButton="goToAboutMe" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  methods: {
    goToAboutMe () {
      this.$router.push({ name: 'AboutMe' })
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/application.scss';

.index {
  background: $black;
  height: 100vh;
  position: relative;

  &__presentation {
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__greetings {
    color: #787878;
  }

  &__name {
    font-size: 2em;
  }

  &__profession {
    color: $primary;
    font-size: 1.25em;

    & > span {
      color: $white;
    }
  }
}
</style>
