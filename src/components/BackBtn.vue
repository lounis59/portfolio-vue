<template>
  <button class="back-btn" @click="back" aria-label="Retour">
    <BsArrowLeftCircle />
    <span>Retour</span>
  </button>
</template>

<script setup>
import { BsArrowLeftCircle } from '@kalimahapps/vue-icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const back = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.back-btn {
  position: fixed;
  top: 150px;
  left: 2rem;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  svg {
    font-size: 1.2rem;
    color: var(--accent);
  }

  &:hover {
    transform: translateX(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: var(--accent);

    svg {
      transform: translateX(-3px);
    }
  }

  &:active {
    transform: translateX(-3px) scale(0.98);
  }

  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .back-btn {
    left: 1rem;
    padding: 0.75rem;
    width: 48px;
    height: 48px;
    justify-content: center;
  }
}
</style>
