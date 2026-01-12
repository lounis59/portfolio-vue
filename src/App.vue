<template>
  <div id="app">
    <Nav/>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --primary: #1a1a1a;
  --secondary: #f5f5f5;
  --accent: #d4af37;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --bg-primary: #ffffff;
  --bg-secondary: #fafafa;
  --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
  position: relative;
}

/* Transitions de page */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Typographie */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  line-height: 1.2;
  color: var(--text-primary);
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #b8941f;
}

/* Animation globale */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
