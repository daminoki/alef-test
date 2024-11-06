<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink
        to="/"
        class="header__logo"
      >
        <img
          src="@/assets/images/logo.svg"
          alt="Alef Test Task"
          width="93"
          height="29"
        >
      </NuxtLink>

      <nav class="header__nav">
        <NuxtLink
          to="/"
          class="header__nav-link"
        >
          Форма
        </NuxtLink>
        <NuxtLink
          to="/preview"
          class="header__nav-link"
        >
          Превью
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.header {
  box-shadow: 0px 1px 0px 0px #1111111A;

  &__container {
    @include container;

    display: grid;
    grid-template-columns: 93px 1fr;
    align-items: center;
    padding-top: 22px;
    padding-bottom: 22px;
  }

  &__logo {
    display: flex;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  &__nav {
    place-self: center;
    display: flex;
    gap: 24px;
  }

  &__nav-link {
    @include header-link;
    @include transition(color);
  }
}
</style>
