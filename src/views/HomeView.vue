<template>
  <div class="home">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <p class="greeting" ref="greeting">Bienvenue sur mon portfolio</p>
          <h1 class="hero-title" ref="title">
            <span class="line">Lounis</span>
            <span class="line">Habrouche</span>
          </h1>
          <p class="hero-subtitle" ref="subtitle">
            Concepteur Développeur d'Applications - Créateur d'expériences web modernes et performantes
          </p>

          <div class="cta-buttons" ref="buttons">
            <button class="btn btn-primary" @click="navigate('/cv')">
              <ReProfileLine />
              <span>Voir mon CV</span>
            </button>
            <button class="btn btn-secondary" @click="navigate('/Projet')">
              <CaEarthEuropeAfrica />
              <span>Mes projets</span>
            </button>
          </div>
        </div>

        <div class="hero-cards" ref="cards">
          <div class="card" @click="navigate('/Competence')">
            <div class="card-icon">
              <CdTools />
            </div>
            <h3>Compétences</h3>
            <p>Vue.js, Angular, React, Node.js et plus</p>
          </div>

          <div class="card" @click="navigate('/A-propos')">
            <div class="card-icon">
              <FlContactCard />
            </div>
            <h3>À propos</h3>
            <p>Découvrez mon parcours et ma passion</p>
          </div>

          <div class="card" @click="navigate('/Projet')">
            <div class="card-icon">
              <BsJoystick />
            </div>
            <h3>Projets</h3>
            <p>Explorez mes réalisations</p>
          </div>
        </div>
      </div>
    </div>

    <div class="decoration">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
import { 
  ReProfileLine, 
  CdTools, 
  FlContactCard, 
  BsJoystick,
  CaEarthEuropeAfrica 
} from '@kalimahapps/vue-icons';

const router = useRouter();
const greeting = ref(null);
const title = ref(null);
const subtitle = ref(null);
const buttons = ref(null);
const cards = ref(null);

const navigate = (path) => {
  router.push(path);
};

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Animation du greeting
  tl.fromTo(greeting.value, {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6
  })
  // Animation des lignes du titre
  .fromTo(title.value.querySelectorAll('.line'), {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2
  }, '-=0.3')
  // Animation du subtitle
  .fromTo(subtitle.value, {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6
  }, '-=0.4')
  // Animation des boutons
  .fromTo(buttons.value.querySelectorAll('.btn'), {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1
  }, '-=0.3')
  // Animation des cartes
  .fromTo(cards.value.querySelectorAll('.card'), {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15
  }, '-=0.5');
});
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-top: 80px;

  .hero-section {
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      width: 100%;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto 4rem;
      text-align: center;

      .greeting {
        font-size: 1rem;
        color: var(--accent);
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      .hero-title {
        font-size: clamp(3rem, 8vw, 6rem);
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .line {
          display: block;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }

      .hero-subtitle {
        font-size: clamp(1rem, 2vw, 1.25rem);
        color: var(--text-secondary);
        max-width: 600px;
        margin: 0 auto 2.5rem;
        line-height: 1.6;
      }

      .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          border: none;

          svg {
            font-size: 1.2rem;
          }

          &.btn-primary {
            background: var(--primary);
            color: white;

            &:hover {
              background: var(--accent);
              transform: translateY(-3px);
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            }
          }

          &.btn-secondary {
            background: white;
            color: var(--primary);
            border: 2px solid var(--primary);

            &:hover {
              background: var(--primary);
              color: white;
              transform: translateY(-3px);
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            }
          }

          &:active {
            transform: translateY(-1px);
          }
        }
      }
    }

    .hero-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;

      .card {
        background: white;
        padding: 2.5rem 2rem;
        border-radius: 16px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        cursor: pointer;
        transition: var(--transition);
        text-align: center;

        .card-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border-radius: 12px;
          transition: var(--transition);

          svg {
            font-size: 2rem;
            color: var(--accent);
          }
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }

        p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: var(--accent);

          .card-icon {
            background: var(--accent);

            svg {
              color: white;
            }
          }
        }
      }
    }
  }

  .decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;

    .circle {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
      animation: float 20s infinite ease-in-out;

      &.circle-1 {
        width: 400px;
        height: 400px;
        top: -200px;
        right: -100px;
        animation-delay: 0s;
      }

      &.circle-2 {
        width: 300px;
        height: 300px;
        bottom: -150px;
        left: -100px;
        animation-delay: -7s;
      }

      &.circle-3 {
        width: 200px;
        height: 200px;
        top: 50%;
        left: 50%;
        animation-delay: -14s;
      }
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@media (max-width: 768px) {
  .home {
    .hero-section {
      .hero-content {
        .cta-buttons {
          flex-direction: column;
          align-items: stretch;

          .btn {
            justify-content: center;
          }
        }
      }

      .hero-cards {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
