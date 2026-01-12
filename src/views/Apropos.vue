<template>
  <div class="apropos-page">
    <BackBtn v-if="route.fullPath !== '/'" />

    <div class="container">
      <div class="content-wrapper">
        <div class="intro-section">
          <h1>À propos de moi</h1>
          <div class="intro-text">
            <p>{{ displayedText }}<span class="cursor">|</span></p>
          </div>
        </div>

        <div class="contact-cards">
          <a 
            href="https://github.com/lounis59" 
            target="_blank"
            class="contact-card"
          >
            <div class="card-icon github">
              <AnOutlinedGithub />
            </div>
            <div class="card-content">
              <h3>GitHub</h3>
              <p>lounis59</p>
            </div>
          </a>

          <a 
            href="mailto:lounis.habrouche@gmail.com"
            class="contact-card"
          >
            <div class="card-icon gmail">
              <CoBrandGmail />
            </div>
            <div class="card-content">
              <h3>Email</h3>
              <p>lounis.habrouche@gmail.com</p>
            </div>
          </a>

          <div class="contact-card">
            <div class="card-icon phone">
              <BsPhoneFill />
            </div>
            <div class="card-content">
              <h3>Téléphone</h3>
              <p>06.25.82.10.64</p>
            </div>
          </div>
        </div>

        <div class="journey-section">
          <h2>Mon parcours</h2>
          <div class="journey-content">
            <div class="journey-item">
              <div class="journey-icon">🔧</div>
              <div class="journey-text">
                <h3>Expérience en métallurgie</h3>
                <p>Ancien chaudronnier soudeur avec une expertise en conception et fabrication de pièces métalliques.</p>
              </div>
            </div>

            <div class="journey-item">
              <div class="journey-icon">💻</div>
              <div class="journey-text">
                <h3>Reconversion dans le développement</h3>
                <p>Passionné par la technologie, j'ai entrepris une reconversion pour devenir développeur full stack.</p>
              </div>
            </div>

            <div class="journey-item">
              <div class="journey-icon">🚀</div>
              <div class="journey-text">
                <h3>Expertise technique actuelle</h3>
                <p>Maîtrise de Vue.js, Angular, React pour le front-end et Node.js, Express, PHP pour le back-end.</p>
              </div>
            </div>

            <div class="journey-item">
              <div class="journey-icon">🎯</div>
              <div class="journey-text">
                <h3>Recherche de nouveaux défis</h3>
                <p>Toujours en quête d'apprentissage et prêt à relever de nouveaux challenges techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import BackBtn from '../components/BackBtn.vue';
import { 
  AnOutlinedGithub, 
  CoBrandGmail, 
  BsPhoneFill 
} from '@kalimahapps/vue-icons';

const route = useRoute();
const displayedText = ref('');

const fullText = `Bonjour, je m'appelle Lounis Habrouche, j'ai 31 ans.
Ancien chaudronnier soudeur, je me suis reconverti dans le développement.
J'ai obtenu mon titre de Développeur Web en octobre 2024 et mon titre de Concepteur Développeur d'Applications en août 2025.
Je maîtrise Vue.js, Angular, React et React Native pour le front-end.
Côté back-end, je travaille avec Node.js, Express et PHP.
Je configure des CI/CD avec GitHub Actions et Docker, et je gère des VPS.
Passionné d'informatique, je cherche toujours de nouveaux défis.`;

const typeWriter = (text, delay = 20) => {
  let i = 0;
  const type = () => {
    if (i < text.length) {
      displayedText.value += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  };
  type();
};

onMounted(() => {
  gsap.fromTo('.intro-section h1', {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.fromTo('.contact-card', {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
    delay: 0.5
  });

  gsap.fromTo('.journey-section', {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 1
  });

  setTimeout(() => typeWriter(fullText), 1000);
});
</script>

<style lang="scss" scoped>
.apropos-page {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: var(--bg-secondary);

  .container {
    max-width: 1000px;
    margin: 0 auto;

    .content-wrapper {
      .intro-section {
        text-align: center;
        margin-bottom: 4rem;

        h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 2rem;
          color: var(--primary);
        }

        .intro-text {
          background: white;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          text-align: left;

          p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-secondary);
            white-space: pre-line;
            min-height: 200px;

            .cursor {
              animation: blink 1s infinite;
              color: var(--accent);
            }
          }
        }
      }

      .contact-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 4rem;

        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
          text-decoration: none;
          color: inherit;
          cursor: pointer;

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

            .card-icon {
              transform: scale(1.1);
            }
          }

          .card-icon {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: var(--transition);

            svg {
              font-size: 2rem;
              color: white;
            }

            &.github {
              background: linear-gradient(135deg, #24292e 0%, #000 100%);
            }

            &.gmail {
              background: linear-gradient(135deg, #ea4335 0%, #c5221f 100%);
            }

            &.phone {
              background: linear-gradient(135deg, var(--accent) 0%, #b8941f 100%);
            }
          }

          .card-content {
            h3 {
              font-size: 1.1rem;
              margin-bottom: 0.25rem;
              color: var(--primary);
            }

            p {
              font-size: 0.95rem;
              color: var(--text-secondary);
              word-break: break-word;
            }
          }
        }
      }

      .journey-section {
        background: white;
        border-radius: 16px;
        padding: 3rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

        h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
          color: var(--primary);
        }

        .journey-content {
          display: grid;
          gap: 2rem;

          .journey-item {
            display: flex;
            gap: 1.5rem;
            align-items: flex-start;

            .journey-icon {
              width: 60px;
              height: 60px;
              background: var(--bg-secondary);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 2rem;
              flex-shrink: 0;
            }

            .journey-text {
              flex: 1;

              h3 {
                font-size: 1.25rem;
                margin-bottom: 0.5rem;
                color: var(--primary);
              }

              p {
                color: var(--text-secondary);
                line-height: 1.6;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .apropos-page {
    padding: 6rem 1rem 3rem;

    .container {
      .content-wrapper {
        .intro-section {
          .intro-text {
            padding: 2rem;

            p {
              font-size: 1rem;
            }
          }
        }

        .contact-cards {
          grid-template-columns: 1fr;
        }

        .journey-section {
          padding: 2rem;

          .journey-content {
            .journey-item {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
