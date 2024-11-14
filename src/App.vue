<script setup lang="ts"></script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <nav class="flex gap-2 p-2 text-xl b-b-1 b-b-solid">
    <RouterLink to="/"> Home</RouterLink>
    <RouterLink to="/about"> About</RouterLink>
    <RouterLink to="/projects"> Projects</RouterLink>
    <RouterLink to="/test1"> Test page</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
