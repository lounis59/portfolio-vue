<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">
        <span class="logo-text">LH</span>
      </router-link>
    </div>

    <button 
      class="menu-toggle" 
      :class="{ active: isOpen }"
      @click="toggleMenu"
      aria-label="Toggle menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="menu-overlay" :class="{ active: isOpen }" @click="closeMenu"></div>

    <div class="nav-menu" :class="{ active: isOpen }">
      <div class="nav-header">
        <h2>HABROUCHE Lounis</h2>
        <p class="subtitle">Développeur Full Stack</p>
      </div>

      <ul class="nav-links">
        <li v-if="route.fullPath !== '/'" @click="navigate('/')">
          <BxHomeAlt2 />
          <span>Accueil</span>
        </li>
        <li @click="navigate('/cv')">
          <ReProfileLine />
          <span>Curriculum Vitae</span>
        </li>
        <li @click="navigate('/Competence')">
          <ClBook />
          <span>Compétences</span>
        </li>
        <li @click="navigate('/Projet')">
          <CaEarthEuropeAfrica />
          <span>Projets</span>
        </li>
        <li @click="navigate('/A-propos')">
          <FlContactCard />
          <span>Contact</span>
        </li>
      </ul>

      <div class="nav-footer">
        <a href="https://github.com/lounis59" target="_blank" class="social-link">
          <AnOutlinedGithub />
        </a>
        <a href="mailto:lounis.habrouche@gmail.com" class="social-link">
          <CoBrandGmail />
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { 
  BxHomeAlt2, 
  ReProfileLine, 
  ClBook, 
  FlContactCard,
  CaEarthEuropeAfrica,
  AnOutlinedGithub,
  CoBrandGmail
} from '@kalimahapps/vue-icons';

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  document.body.style.overflow = isOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isOpen.value = false;
  document.body.style.overflow = '';
};

const navigate = (path) => {
  router.push(path);
  closeMenu();
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: var(--transition);

  .logo {
    z-index: 1001;

    a {
      text-decoration: none;
    }

    .logo-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary);
      letter-spacing: 0.05em;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--accent);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  .menu-toggle {
    position: relative;
    z-index: 1001;
    width: 30px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--primary);
      transition: var(--transition);
      transform-origin: center;
    }

    &.active {
      span:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
      }
    }

    &:hover span {
      background: var(--accent);
    }
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 999;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: min(400px, 85vw);
    height: 100vh;
    background: var(--bg-primary);
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    &.active {
      right: 0;
    }

    .nav-header {
      padding: 4rem 0 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--primary);
      }

      .subtitle {
        font-size: 0.9rem;
        color: var(--text-secondary);
        font-weight: 300;
      }
    }

    .nav-links {
      list-style: none;
      padding: 2rem 0;
      flex: 1;

      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
        border-radius: 8px;
        transition: var(--transition);
        font-size: 1.1rem;
        color: var(--text-primary);

        svg {
          font-size: 1.5rem;
          color: var(--accent);
        }

        &:hover {
          background: var(--bg-secondary);
          transform: translateX(8px);

          span {
            color: var(--accent);
          }
        }
      }
    }

    .nav-footer {
      padding-top: 2rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      gap: 1rem;

      .social-link {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--bg-secondary);
        color: var(--text-primary);
        transition: var(--transition);
        text-decoration: none;

        svg {
          font-size: 1.5rem;
        }

        &:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-3px);
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .navbar {
    padding: 2rem 4rem;
  }
}
</style>
