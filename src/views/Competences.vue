<template>
  <div class="competences-page">
    <BackBtn v-if="route.fullPath !== '/'" />

    <div class="container">
      <div class="page-header">
        <h1>Mes Compétences</h1>
        <p class="subtitle">Technologies et outils que je maîtrise</p>
      </div>

      <div class="skills-grid">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          class="skill-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="skill-header">
            <div class="skill-icon" :style="{ background: skill.color }">
              <component :is="skill.icon" />
            </div>
            <div class="skill-info">
              <h3>{{ skill.name }}</h3>
              <div class="skill-level">
                <div class="level-bar">
                  <div 
                    class="level-fill" 
                    :style="{ width: skill.level + '%', background: skill.color }"
                  ></div>
                </div>
                <span class="level-text">{{ getLevelText(skill.level) }}</span>
              </div>
            </div>
          </div>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
      </div>

      <div class="additional-skills">
        <h2>Autres compétences</h2>
        <div class="tags-container">
          <span v-for="tag in additionalSkills" :key="tag" class="tag">
            {{ tag }}
          </span>
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
import {
  AkVueFill,
  DeAngularjsPlain,
  CoBrandReact,
  DeNodejsPlainWordmark,
  DeAzuresqldatabasePlain,
  CoBrandPhp,
  VsFileTypeDocker2
} from '@kalimahapps/vue-icons';

const route = useRoute();

const skills = [
  {
    name: 'Vue.js',
    icon: AkVueFill,
    level: 90,
    color: '#42b883',
    description: 'Framework JavaScript progressif pour construire des interfaces utilisateur'
  },
  {
    name: 'Node.js',
    icon: DeNodejsPlainWordmark,
    level: 85,
    color: '#68a063',
    description: 'Environnement d\'exécution JavaScript côté serveur'
  },
  {
    name: 'SQL',
    icon: DeAzuresqldatabasePlain,
    level: 85,
    color: '#0078d4',
    description: 'Gestion et manipulation de bases de données relationnelles'
  },
  {
    name: 'Angular',
    icon: DeAngularjsPlain,
    level: 75,
    color: '#dd0031',
    description: 'Framework complet pour développer des applications web'
  },
  {
    name: 'React',
    icon: CoBrandReact,
    level: 75,
    color: '#61dafb',
    description: 'Bibliothèque JavaScript pour créer des interfaces utilisateur'
  },
  {
    name: 'React Native',
    icon: CoBrandReact,
    level: 70,
    color: '#61dafb',
    description: 'Framework pour développer des applications mobiles natives'
  },
  {
    name: 'PHP',
    icon: CoBrandPhp,
    level: 75,
    color: '#777bb4',
    description: 'Langage de script côté serveur pour le web'
  },
  {
    name: 'Docker',
    icon: VsFileTypeDocker2,
    level: 70,
    color: '#2496ed',
    description: 'Plateforme de conteneurisation pour déployer des applications'
  }
];

const additionalSkills = [
  'Express.js',
  'JWT',
  'Jest',
  'Git',
  'GitHub Actions',
  'CI/CD',
  'VPS',
  'AutoCAD',
  'Responsive Design',
  'RESTful APIs',
  'Agile/Scrum'
];

const getLevelText = (level) => {
  if (level >= 85) return 'Expert';
  if (level >= 70) return 'Avancé';
  if (level >= 50) return 'Intermédiaire';
  return 'Débutant';
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

  gsap.fromTo('.skill-card', {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.3
  });

  gsap.fromTo('.additional-skills', {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 1
  });
});
</script>

<style lang="scss" scoped>
.competences-page {
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

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;

      .skill-card {
        background: white;
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        transition: var(--transition);
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .skill-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1rem;

          .skill-icon {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;

            svg {
              font-size: 2rem;
              color: white;
            }
          }

          .skill-info {
            flex: 1;

            h3 {
              font-size: 1.5rem;
              margin-bottom: 0.75rem;
              color: var(--primary);
            }

            .skill-level {
              .level-bar {
                height: 8px;
                background: var(--bg-secondary);
                border-radius: 4px;
                overflow: hidden;
                margin-bottom: 0.5rem;

                .level-fill {
                  height: 100%;
                  border-radius: 4px;
                  transition: width 1s ease-out 0.5s;
                }
              }

              .level-text {
                font-size: 0.85rem;
                color: var(--text-secondary);
                font-weight: 500;
              }
            }
          }
        }

        .skill-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }
      }
    }

    .additional-skills {
      background: white;
      border-radius: 16px;
      padding: 3rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--primary);
        text-align: center;
      }

      .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;

        .tag {
          padding: 0.75rem 1.5rem;
          background: var(--bg-secondary);
          border-radius: 25px;
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: var(--transition);
          cursor: default;

          &:hover {
            background: var(--accent);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        }
      }
    }
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .competences-page {
    padding: 6rem 1rem 3rem;

    .container {
      .skills-grid {
        grid-template-columns: 1fr;

        .skill-card {
          .skill-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      }

      .additional-skills {
        padding: 2rem 1.5rem;
      }
    }
  }
}
</style>
