<script setup lang="ts">
import { onMounted } from 'vue'

// Restore saved theme before paint to avoid flash. Default = light.
onMounted(() => {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') document.documentElement.classList.add('dark')
  } catch {}
})
</script>

<template>
  <SiteHeader />
  <NuxtRouteAnnouncer />
  <NuxtPage />
  <footer class="site-footer">
    <span>© {{ new Date().getFullYear() }} Nishitha Bottu Ramakanthchowdary</span>
  </footer>
</template>
