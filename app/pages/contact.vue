<script setup lang="ts">
useHead({
  title: 'Contact — Nishitha Bottu',
  meta: [{
    name: 'description',
    content: 'Get in touch with Nishitha Bottu — AI Engineer based in Denver, CO.',
  }],
})
</script>

<template>
  <main class="page">
    <header class="page-head">
      <h1>Contact</h1>
      <p class="lede">
        If you're building agentic systems, RAG, MCP integrations, or production LLM tooling
        and want to chat — the best way to reach me is by email.
      </p>
    </header>

    <ul class="contact-list">
      <li>
        <span class="label">Email</span>
        <a href="mailto:bottu@alumni.unc.edu">bottu@alumni.unc.edu</a>
      </li>
      <li>
        <span class="label">LinkedIn</span>
        <a href="https://linkedin.com/in/nishithabr" target="_blank" rel="noopener">
          linkedin.com/in/nishithabr
        </a>
      </li>
      <li>
        <span class="label">GitHub</span>
        <a href="https://github.com/nishithabottu" target="_blank" rel="noopener">
          github.com/nishithabottu
        </a>
      </li>
      <li>
        <span class="label">Based in</span>
        <span>Denver, CO</span>
      </li>
    </ul>
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

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.contact-list li {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  align-items: baseline;
}
.contact-list li:last-child { border-bottom: none; }
.contact-list .label {
  font-size: 0.82rem;
  color: var(--muted);
  letter-spacing: 0.04em;
}
.contact-list a {
  color: var(--fg);
  font-size: 1rem;
}
@media (max-width: 560px) {
  .contact-list li { grid-template-columns: 1fr; gap: 0.2rem; }
  .contact-list .label { color: var(--muted); }
}
</style>
