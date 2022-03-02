<template>
  <div class="menu-drawer">
    <ul class="menu-drawer__items">
      <li class="menu-drawer__item menu-drawer__item--active">
        Home
      </li>
      <li class="menu-drawer__item">
        About Me
      </li>
      <li class="menu-drawer__item">
        Projects
      </li>
      <li class="menu-drawer__item">
        Technologies
      </li>
      <li class="menu-drawer__item">
        Contact
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/application.scss';

.menu-drawer {
  background: $black;
  height: calc(100vh - 60px);
  position: relative;

  &__items {
    color: $white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.25em;

    & > li {
      margin: 2em 0;
    }
  }

  &__item {
    &:hover {
      cursor: pointer;
      color: #b6b6b6;
    }

    &--active {
      background: $primary;
      padding: 8px 64px;
      border-radius: 32px;
    }
  }
}
</style>
