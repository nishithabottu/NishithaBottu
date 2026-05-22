<template>
  <header class="site-header">
    <div class="bar">
      <NuxtLink to="/" class="brand" aria-label="Home">
        <span class="avatar" aria-hidden="true">
          <!-- Replace /me.jpg with your photo. Falls back to initials. -->
          <img src="/me.jpeg" alt="" @error="imgFailed = true" v-show="!imgFailed" />
          <span v-show="imgFailed" class="initials">NB</span>
        </span>
        <span class="brand-text">
          <span class="brand-name">Nishitha Bottu</span>
          <span class="brand-sub">AI Engineer · Denver, CO</span>
        </span>
      </NuxtLink>

      <nav class="nav" aria-label="Sections">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/experience">Experience</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>

      <div class="actions">
        <a class="resume" href="/Nishitha_AI_Engineer.docx" download>Resume ↓</a>
        <button
          class="theme"
          type="button"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <span v-if="isDark">☀</span>
          <span v-else>☾</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const imgFailed = ref(false)
const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleTheme() {
  const root = document.documentElement
  const nowDark = !root.classList.contains('dark')
  root.classList.toggle('dark', nowDark)
  isDark.value = nowDark
  try {
    localStorage.setItem('theme', nowDark ? 'dark' : 'light')
  } catch {}
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  backdrop-filter: saturate(180%) blur(8px);
  -webkit-backdrop-filter: saturate(180%) blur(8px);
}
.bar {
  max-width: 880px;
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1.5rem;
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: var(--fg);
  min-width: 0;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--hover);
  border: 1px solid var(--border);
  overflow: hidden;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.04em;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.initials { user-select: none; }
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  min-width: 0;
}
.brand-name {
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: -0.005em;
}
.brand-sub {
  font-size: 0.75rem;
  color: var(--muted);
  margin-top: 1px;
}

.nav {
  display: flex;
  gap: 1.4rem;
}
.nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.92rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.nav a:hover { color: var(--fg); }
.nav a.router-link-active {
  color: var(--fg);
  border-bottom-color: var(--fg);
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.resume {
  text-decoration: none;
  font-size: 0.85rem;
  color: var(--fg);
  border: 1px solid var(--border-strong);
  padding: 0.45rem 0.75rem;
  border-radius: 6px;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.resume:hover { background: var(--hover); border-color: var(--fg); }

.theme {
  background: transparent;
  border: 1px solid var(--border-strong);
  color: var(--fg);
  width: 34px;
  height: 34px;
  border-radius: 6px;
  font-size: 1rem;
  display: grid;
  place-items: center;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.theme:hover { background: var(--hover); border-color: var(--fg); }

@media (max-width: 780px) {
  .bar {
    grid-template-columns: 1fr auto;
    gap: 0.8rem;
  }
  .nav { display: none; }
  .brand-sub { display: none; }
}
</style>
