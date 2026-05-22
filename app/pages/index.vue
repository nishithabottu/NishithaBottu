<script setup lang="ts">
useHead({
  title: 'Nishitha Bottu Ramakanthchowdary — AI Engineer',
  meta: [{
    name: 'description',
    content: 'AI Engineer based in Denver, CO. Building multi-agent LLM systems, MCP integrations, and RAG pipelines in production.',
  }],
})
</script>

<template>
  <main class="page">
    <section class="intro">
      <h1>Nishitha Bottu Ramakanthchowdary</h1>
      <p class="role">AI Engineer · Denver, CO</p>
      <p class="lede">
        I'm an AI Engineer with 5+ years of production software experience, currently shipping
        a multi-agent LLM platform at <strong>Spectrum</strong>. I build agentic systems with
        typed tool layers, RAG pipelines with citation grounding, and CI-gated evaluation
        harnesses for production LLM behavior.
      </p>
      <p class="cta-row">
        <NuxtLink to="/projects">View projects →</NuxtLink>
        <span class="sep">·</span>
        <NuxtLink to="/about">About me</NuxtLink>
        <span class="sep">·</span>
        <NuxtLink to="/contact">Get in touch</NuxtLink>
      </p>
      <p class="contact-line">
        <a href="mailto:bottu@alumni.unc.edu">bottu@alumni.unc.edu</a>
        <span class="sep">·</span>
        <a href="https://linkedin.com/in/nishithabr" target="_blank" rel="noopener">LinkedIn</a>
        <span class="sep">·</span>
        <a href="https://github.com/nishithabottu" target="_blank" rel="noopener">GitHub</a>
      </p>
    </section>
  </main>
</template>

<style scoped>
.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 5rem 1.5rem 6rem;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.intro h1 {
  font-size: clamp(2rem, 4.5vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.4rem;
  line-height: 1.15;
}
.intro .role {
  color: var(--muted);
  margin: 0 0 1.6rem;
  font-size: 1.05rem;
}
.intro .lede {
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 1.6rem;
  max-width: 60ch;
}
.intro .lede strong { font-weight: 600; }
.cta-row {
  font-size: 1rem;
  margin: 0 0 1rem;
}
.cta-row a { color: var(--fg); }
.contact-line {
  font-size: 0.92rem;
  color: var(--muted);
  margin: 0;
}
.contact-line a { color: var(--fg); }
.sep { margin: 0 0.6rem; color: var(--muted-2); }
</style>
