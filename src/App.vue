<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
  height: auto;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  height: 0;
  filter: blur(1rem);
}
</style>
