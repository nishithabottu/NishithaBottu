<script setup lang="ts">
const { skillGroups } = useResume()

useHead({
  title: 'About — Nishitha Bottu',
  meta: [{
    name: 'description',
    content: 'About Nishitha Bottu — AI Engineer with 5+ years of production software experience, currently at Spectrum.',
  }],
})
</script>

<template>
  <main class="page">
    <header class="page-head">
      <h1>About</h1>
      <p class="lede">
        I'm an AI Engineer with 5+ years of production software experience, currently shipping
        a multi-agent LLM platform at Spectrum.
      </p>
    </header>

    <section class="prose-block">
      <p>
        I started in backend systems and observability at <strong>Genpact</strong> and
        <strong>Ascent</strong>, then spent two years building research applications at the
        <strong>UNC School of Information &amp; Library Science</strong> while completing my
        M.S. in Information Science. Once large language models became usable in production,
        that engineering background became what lets me build agentic systems that hold up
        outside of demos.
      </p>
      <p>
        At <strong>Spectrum</strong>, I work on a production multi-agent LLM platform — planner,
        executor, and verifier sub-agents coordinating over nine typed MCP tools to automate UI
        and API testing across our WiFi infrastructure. I care about structured outputs,
        cost-versus-latency tradeoffs, and treating prompt changes the same way we treat code
        changes: version-controlled, reviewable, and gated by tests.
      </p>
      <p>
        Outside of work, I'm the <strong>Communications Director</strong> for the UNC SILS
        Alumni Association, where I host technical talk panels with senior AI engineers across
        the U.S. I was previously <strong>President</strong> of the ASIS&amp;T Student Chapter
        at UNC Chapel Hill.
      </p>
    </section>

    <section class="section">
      <h2>Skills</h2>
      <dl class="skills">
        <template v-for="g in skillGroups" :key="g.label">
          <dt>{{ g.label }}</dt>
          <dd>{{ g.items.join(', ') }}</dd>
        </template>
      </dl>
    </section>
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

.prose-block p {
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 1.1rem;
  max-width: 62ch;
}
.prose-block strong { font-weight: 600; }

.section {
  margin-top: 3rem;
  padding-top: 2.4rem;
  border-top: 1px solid var(--border);
}
.section h2 {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 1.4rem;
}

.skills {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 0.9rem 1.6rem;
  margin: 0;
}
.skills dt {
  font-size: 0.82rem;
  color: var(--muted);
  letter-spacing: 0.04em;
}
.skills dd {
  margin: 0;
  font-size: 0.97rem;
  line-height: 1.65;
  color: var(--fg);
}
@media (max-width: 560px) {
  .skills { grid-template-columns: 1fr; gap: 0.3rem 0; }
  .skills dt { margin-top: 0.7rem; font-weight: 600; color: var(--fg); }
}
</style>
