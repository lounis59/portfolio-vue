<template>
  <div class="projets-page">
    <BackBtn v-if="route.fullPath !== '/'" />

    <div class="container">
      <div class="page-header">
        <h1>Mes Projets</h1>
        <p class="subtitle">Découvrez mes réalisations et projets</p>
      </div>

      <div class="projects-grid">
        <div class="project-card featured">
          <div class="project-image">
            <img src="img/Center_Gaming_Logo 1.png" alt="Center Gaming Logo" />
          </div>
          <div class="project-content">
            <span class="project-tag">Site Web</span>
            <h2>Center Gaming</h2>
            <p class="project-description">
              Plateforme gaming complète développée avec les dernières technologies web.
              Comprend un système d'authentification, une gestion de profils utilisateurs
              et une interface interactive pour la communauté gaming.
            </p>
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Express</span>
              <span class="tech-tag">SQL</span>
            </div>
            <button class="btn-visit" @click="goCenter">
              <span>Visiter le site</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="coming-soon-section">
          <div class="coming-soon-card">
            <div class="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3>Nouveaux projets en cours</h3>
            <p>De nouvelles réalisations passionnantes arrivent bientôt. Restez connecté !</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import BackBtn from '../components/BackBtn.vue';

const route = useRoute();

const goCenter = () => {
  window.open('http://51.75.125.145:3000/', '_blank');
};

onMounted(() => {
  gsap.fromTo('.page-header', {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.fromTo('.project-card', {
    opacity: 0,
    y: 40
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  });

  gsap.fromTo('.coming-soon-section', {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 0.6
  });
});
</script>

<style lang="scss" scoped>
.projets-page {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: var(--bg-secondary);

  .container {
    max-width: 1200px;
    margin: 0 auto;

    .page-header {
      text-align: center;
      margin-bottom: 4rem;

      h1 {
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        margin-bottom: 1rem;
        color: var(--primary);
      }

      .subtitle {
        font-size: 1.25rem;
        color: var(--text-secondary);
      }
    }

    .projects-grid {
      display: grid;
      gap: 3rem;

      .project-card {
        background: white;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transition: var(--transition);

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        &.featured {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          
          .project-image {
            background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3rem;

            img {
              max-width: 100%;
              height: auto;
              filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
            }
          }

          .project-content {
            padding: 3rem;
            display: flex;
            flex-direction: column;

            .project-tag {
              display: inline-block;
              padding: 0.5rem 1rem;
              background: rgba(212, 175, 55, 0.1);
              color: var(--accent);
              border-radius: 20px;
              font-size: 0.85rem;
              font-weight: 600;
              width: fit-content;
              margin-bottom: 1rem;
            }

            h2 {
              font-size: 2.5rem;
              margin-bottom: 1rem;
              color: var(--primary);
            }

            .project-description {
              color: var(--text-secondary);
              line-height: 1.8;
              margin-bottom: 2rem;
              flex: 1;
            }

            .project-tech {
              display: flex;
              flex-wrap: wrap;
              gap: 0.75rem;
              margin-bottom: 2rem;

              .tech-tag {
                padding: 0.5rem 1rem;
                background: var(--bg-secondary);
                border-radius: 20px;
                font-size: 0.9rem;
                color: var(--text-primary);
                font-weight: 500;
              }
            }

            .btn-visit {
              display: inline-flex;
              align-items: center;
              gap: 0.75rem;
              padding: 1rem 2rem;
              background: var(--primary);
              color: white;
              border: none;
              border-radius: 50px;
              font-size: 1rem;
              font-weight: 600;
              cursor: pointer;
              transition: var(--transition);
              width: fit-content;

              svg {
                width: 20px;
                height: 20px;
                transition: var(--transition);
              }

              &:hover {
                background: var(--accent);
                transform: translateX(5px);

                svg {
                  transform: translateX(5px);
                }
              }

              &:active {
                transform: translateX(3px);
              }
            }
          }
        }
      }

      .coming-soon-section {
        .coming-soon-card {
          background: white;
          border-radius: 20px;
          padding: 4rem 3rem;
          text-align: center;
          border: 2px dashed rgba(0, 0, 0, 0.1);

          .icon-container {
            width: 80px;
            height: 80px;
            margin: 0 auto 2rem;
            background: var(--bg-secondary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
              width: 40px;
              height: 40px;
              color: var(--accent);
            }
          }

          h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: var(--primary);
          }

          p {
            color: var(--text-secondary);
            font-size: 1.1rem;
            max-width: 500px;
            margin: 0 auto;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .projets-page {
    padding: 6rem 1.5rem 3rem;

    .container {
      .projects-grid {
        .project-card {
          &.featured {
            grid-template-columns: 1fr;

            .project-image {
              padding: 2rem;
            }

            .project-content {
              padding: 2rem;
            }
          }
        }

        .coming-soon-section {
          .coming-soon-card {
            padding: 3rem 2rem;
          }
        }
      }
    }
  }
}

@media (max-width: 640px) {
  .projets-page {
    padding: 6rem 1rem 3rem;

    .container {
      .projects-grid {
        .project-card {
          &.featured {
            .project-content {
              h2 {
                font-size: 2rem;
              }

              .btn-visit {
                width: 100%;
                justify-content: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
