<script setup>
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    aria-label="Toggle light/dark theme"
    @click="toggleTheme"
  >
    <span class="material-symbols-outlined">
      {{ isDark ? 'light_mode' : 'dark_mode' }}
    </span>
  </button>
</template>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
