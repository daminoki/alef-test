<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__text">
        all rights reserved
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.footer {
    background-color: var(--gray-bg);
    box-shadow: 0px 1px 0px 0px #1111111A;

    &__container {
        @include container;

        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    &__text {
        @include p3;
        color: var(--typo-dark);
    }
}
</style>
