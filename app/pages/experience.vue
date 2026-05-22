<script setup lang="ts">
const { roles } = useResume()

useHead({
  title: 'Experience — Nishitha Bottu',
  meta: [{
    name: 'description',
    content: 'Work experience and education for Nishitha Bottu — AI Engineer with 5+ years across Spectrum, Tek Labs, PDMA, UNC SILS, Genpact, and Ascent.',
  }],
})
</script>

<template>
  <main class="page">
    <header class="page-head">
      <h1>Experience</h1>
      <p class="lede">
        6 roles, 5+ years. Python and production engineering through the whole arc — and more
        recently, agentic AI in production.
      </p>
    </header>

    <ol class="exp">
      <li v-for="role in roles" :key="role.company">
        <div class="exp-head">
          <div class="exp-left">
            <h3>{{ role.company }}</h3>
            <p class="exp-title">{{ role.title }}</p>
          </div>
          <div class="exp-right">
            <p class="exp-dates">{{ role.dates }}</p>
            <p class="exp-loc">{{ role.location }}</p>
          </div>
        </div>
        <ul class="exp-bullets">
          <li v-for="(b, i) in role.bullets" :key="i">{{ b }}</li>
        </ul>
      </li>
    </ol>

    <section class="section">
      <h2>Education</h2>
      <ul class="edu">
        <li>
          <strong>M.S., Information Science</strong> — University of North Carolina at Chapel Hill
        </li>
        <li>
          <strong>B.S., Computer Science</strong> — Jain University, Bengaluru, India
        </li>
      </ul>
      <h3 class="sub-h">Certifications &amp; Awards</h3>
      <ul class="edu">
        <li>Certified Scrum Product Owner (CSPO), Scrum Alliance</li>
        <li>Silver Order of Merit Award, Genpact (March 2022)</li>
      </ul>
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

.exp { list-style: none; padding: 0; margin: 0; }
.exp > li {
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--border);
}
.exp > li:first-child { padding-top: 0; }
.exp > li:last-child  { border-bottom: none; padding-bottom: 0; }
.exp-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.7rem;
}
.exp-left h3 {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: -0.005em;
}
.exp-title {
  margin: 0.2rem 0 0;
  color: var(--muted);
  font-size: 0.92rem;
}
.exp-right { text-align: right; min-width: 0; }
.exp-dates {
  margin: 0;
  font-size: 0.88rem;
  color: var(--fg);
  font-variant-numeric: tabular-nums;
}
.exp-loc {
  margin: 0.15rem 0 0;
  font-size: 0.82rem;
  color: var(--muted-2);
}
.exp-bullets {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0.4rem 0 0;
}
.exp-bullets li {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--fg);
  margin: 0 0 0.4rem;
}
.exp-bullets li:last-child { margin-bottom: 0; }
@media (max-width: 560px) {
  .exp-right { text-align: left; }
}

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
.section h3.sub-h {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 2rem 0 0.8rem;
}
.edu { list-style: none; padding: 0; margin: 0; }
.edu li {
  padding: 0.55rem 0;
  font-size: 0.97rem;
  color: var(--fg);
  border-bottom: 1px solid var(--border);
}
.edu li:last-child { border-bottom: none; }
.edu strong { font-weight: 600; }
</style>
