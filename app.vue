<template>
  <div class="page-wrapper">
    <TheHeader />
    <main class="page">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Alef Test Task',
  meta: [
    { name: 'Test task for Alef company', content: 'Alef Test Task' },
  ],
})
</script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}

.page {
  flex: 1;
}
</style>
