<script setup lang="ts">
const { projects } = useResume()

useHead({
  title: 'Projects — Nishitha Bottu',
  meta: [{
    name: 'description',
    content: 'Selected AI engineering projects by Nishitha Bottu — RAG pipelines, agent loops, evaluation harnesses.',
  }],
})
</script>

<template>
  <main class="page">
    <header class="page-head">
      <h1>Projects</h1>
      <p class="lede">
        Recent work, focused on LLM systems with measurable quality bars and typed tool layers.
      </p>
    </header>

    <div class="proj-grid">
      <article v-for="p in projects" :key="p.title" class="proj-card">
        <h3>{{ p.title }}</h3>
        <p class="proj-desc">{{ p.desc }}</p>
        <p class="proj-tech">{{ p.tech.join(' · ') }}</p>
        <p class="proj-links">
          <a :href="p.github" target="_blank" rel="noopener">GitHub ↗</a>
          <span class="sep">·</span>
          <NuxtLink :to="p.readMore">Read writeup →</NuxtLink>
        </p>
      </article>
    </div>
  </main>
</template>

<style scoped>
.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
}
.page-head h1 {
  font-size: clamp(1.9rem, 4vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.6rem;
  line-height: 1.15;
}
.page-head .lede {
  font-size: 1.05rem;
  color: var(--muted);
  margin: 0 0 2.4rem;
  max-width: 60ch;
}

.proj-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
.proj-card {
  padding: 1.4rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.proj-card:hover {
  border-color: var(--border-strong);
  background: var(--hover);
}
.proj-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  letter-spacing: -0.005em;
}
.proj-desc {
  margin: 0 0 0.8rem;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--fg);
}
.proj-tech {
  margin: 0 0 0.8rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--muted);
}
.proj-links {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
}
.proj-links a { color: var(--fg); }
.sep { margin: 0 0.55rem; color: var(--muted-2); }

@media (min-width: 720px) {
  .proj-grid { grid-template-columns: 1fr 1fr; }
}
</style>
