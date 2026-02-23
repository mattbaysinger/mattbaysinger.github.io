import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'theme-override'

function getSystemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function getInitialDark() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark') return true
  if (stored === 'light') return false
  return getSystemPrefersDark()
}

export function useTheme() {
  const isDark = ref(getInitialDark())

  function applyBodyClass() {
    document.body.classList.remove('light-theme', 'dark-theme')
    document.body.classList.add(isDark.value ? 'dark-theme' : 'light-theme')
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }

  watch(isDark, () => applyBodyClass(), { immediate: false })
  onMounted(() => applyBodyClass())
  applyBodyClass()

  // React to system preference when no override is set
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (localStorage.getItem(STORAGE_KEY) == null) {
        isDark.value = getSystemPrefersDark()
      }
    })
  }

  return { isDark, toggleTheme }
}
