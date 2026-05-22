<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: (page.value?.title ? page.value.title + ' — Nishitha Bottu' : 'Nishitha Bottu'),
})
</script>

<template>
  <article class="prose">
    <NuxtLink to="/projects" class="back-link">← Back to projects</NuxtLink>
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 1.6rem;
  font-size: 0.9rem;
  color: var(--muted);
  text-decoration: none;
}
.back-link:hover { color: var(--fg); }
</style>
