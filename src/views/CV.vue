<template>
  <div class="cv-page">
    <BackBtn v-if="route.fullPath !== '/'" />
    
    <div class="cv-container">
      <div class="cv-header">
        <div class="profile-section">
          <div class="profile-image">
            <img src="img/photo.jpg" alt="Lounis Habrouche" />
          </div>
          <div class="profile-info">
            <h1>HABROUCHE Lounis</h1>
            <p class="role">Développeur Full Stack</p>
            <p class="bio">
              Passionné par le développement, j'ai obtenu mon titre de Développeur Web en octobre 2024 
              et mon titre de Concepteur Développeur d'Applications en août 2025. Je maîtrise les 
              technologies Front-end avec Vue.js et Angular, ainsi que le Back-end avec Node.js 
              (Express, JWT) et PHP.
            </p>
          </div>
        </div>
      </div>

      <div class="cv-grid">
        <div class="cv-sidebar">
          <div class="section contact-section">
            <h2>Contact</h2>
            <div class="contact-item">
              <AkPhone class="icon" />
              <span>06.25.82.10.64</span>
            </div>
            <div class="contact-item">
              <AnOutlinedMail class="icon" />
              <span>lounis.habrouche@gmail.com</span>
            </div>
            <div class="contact-item">
              <AkHomeAlt1 class="icon" />
              <span>Wattrelos, 59150</span>
            </div>
            <div class="contact-item">
              <AnFilledGithub class="icon" />
              <a href="https://github.com/lounis59" target="_blank">lounis59</a>
            </div>
          </div>

          <div class="section skills-highlight">
            <h2>Compétences clés</h2>
            <div class="skill-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Angular</span>
              <span class="tag">React</span>
              <span class="tag">Node.js</span>
              <span class="tag">Docker</span>
              <span class="tag">SQL</span>
              <span class="tag">PHP</span>
              <span class="tag">Jest</span>
            </div>
          </div>
        </div>

        <div class="cv-main">
          <div class="section">
            <h2>Formation</h2>
            <div class="timeline-item">
              <div class="timeline-date">Août 2025</div>
              <div class="timeline-content">
                <h3>Concepteur Développeur d'Applications</h3>
                <p class="institution">SOFIP Roubaix - Niveau 6</p>
                <p class="description">Obtention du titre professionnel en août 2025</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2024</div>
              <div class="timeline-content">
                <h3>Développeur Web</h3>
                <p class="institution">AFCI Villeneuve d'Ascq - Niveau 5</p>
                <p class="description">Obtention du titre professionnel en octobre 2024</p>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Expérience Professionnelle</h2>
            <div class="timeline-item">
              <div class="timeline-date">2019 - 2024</div>
              <div class="timeline-content">
                <h3>Chaudronnier Soudeur</h3>
                <ul class="experience-list">
                  <li>Conception de pièces (AutoCAD)</li>
                  <li>Soudure (TIG, MIG, MAG)</li>
                  <li>Pliage et découpe de métaux</li>
                  <li>Lecture de plans techniques</li>
                </ul>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2018 - 2019</div>
              <div class="timeline-content">
                <h3>Métallier Soudeur</h3>
                <p class="description">Fabrication et installation d'éléments métalliques</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2016 - 2018</div>
              <div class="timeline-content">
                <h3>Serrurier Soudeur</h3>
                <p class="description">Réalisation de travaux de serrurerie et soudure</p>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>À propos</h2>
            <p class="about-text">
              Après plusieurs années dans le secteur de la métallurgie, j'ai entrepris une reconversion 
              professionnelle dans le développement web. J'ai obtenu mon titre de Développeur Web en octobre 2024, 
              puis mon titre de Concepteur Développeur d'Applications en août 2025. Je maîtrise les technologies 
              Front-end avec Vue.js et Angular, ainsi que le Back-end avec Node.js (Express, JWT) et PHP. 
              Je suis également à l'aise avec les bases de données SQL, la conteneurisation avec Docker, 
              et l'écriture de tests avec Jest.
            </p>
            <p class="about-text">
              Curieux et rigoureux, je cherche à intégrer une équipe dynamique où je pourrai mettre à profit 
              mes compétences et continuer à apprendre.
            </p>
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
import {
  AkPhone,
  AnOutlinedMail,
  AkHomeAlt1,
  AnFilledGithub
} from '@kalimahapps/vue-icons';

const route = useRoute();

onMounted(() => {
  gsap.fromTo('.cv-header', {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.fromTo('.section', {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
    delay: 0.3
  });
});
</script>

<style lang="scss" scoped>
.cv-page {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: var(--bg-secondary);

  .cv-container {
    max-width: 1200px;
    margin: 0 auto;

    .cv-header {
      background: white;
      border-radius: 16px;
      padding: 3rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      .profile-section {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 2rem;
        align-items: center;

        .profile-image {
          width: 160px;
          height: 160px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .profile-info {
          h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: var(--primary);
          }

          .role {
            font-size: 1.25rem;
            color: var(--accent);
            font-weight: 500;
            margin-bottom: 1rem;
          }

          .bio {
            color: var(--text-secondary);
            line-height: 1.6;
            max-width: 700px;
          }
        }
      }
    }

    .cv-grid {
      display: grid;
      grid-template-columns: 320px 1fr;
      gap: 2rem;

      .cv-sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

          h2 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            color: var(--primary);
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--accent);
          }
        }

        .contact-section {
          .contact-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
            color: var(--text-secondary);

            .icon {
              font-size: 1.25rem;
              color: var(--accent);
              flex-shrink: 0;
            }

            span, a {
              font-size: 0.9rem;
              word-break: break-word;
            }

            a {
              color: var(--text-secondary);
              text-decoration: none;
              transition: color 0.3s ease;

              &:hover {
                color: var(--accent);
              }
            }
          }
        }

        .skills-highlight {
          .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;

            .tag {
              padding: 0.5rem 1rem;
              background: var(--bg-secondary);
              border-radius: 20px;
              font-size: 0.85rem;
              color: var(--text-primary);
              font-weight: 500;
              border: 1px solid rgba(0, 0, 0, 0.08);
              transition: var(--transition);

              &:hover {
                background: var(--accent);
                color: white;
                transform: translateY(-2px);
              }
            }
          }
        }
      }

      .cv-main {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

          h2 {
            font-size: 1.75rem;
            margin-bottom: 2rem;
            color: var(--primary);
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--accent);
          }

          .timeline-item {
            display: grid;
            grid-template-columns: 150px 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);

            &:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }

            .timeline-date {
              font-weight: 600;
              color: var(--accent);
              font-size: 0.95rem;
            }

            .timeline-content {
              h3 {
                font-size: 1.25rem;
                margin-bottom: 0.5rem;
                color: var(--primary);
              }

              .institution {
                font-weight: 500;
                color: var(--text-secondary);
                margin-bottom: 0.75rem;
              }

              .description {
                color: var(--text-secondary);
                line-height: 1.6;
              }

              .experience-list {
                list-style: none;
                padding-left: 0;

                li {
                  position: relative;
                  padding-left: 1.5rem;
                  color: var(--text-secondary);
                  margin-bottom: 0.5rem;
                  line-height: 1.6;

                  &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0.6em;
                    width: 6px;
                    height: 6px;
                    background: var(--accent);
                    border-radius: 50%;
                  }
                }
              }
            }
          }

          .about-text {
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 1rem;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .cv-page {
    padding: 6rem 1.5rem 3rem;

    .cv-container {
      .cv-header {
        padding: 2rem;

        .profile-section {
          grid-template-columns: 1fr;
          text-align: center;

          .profile-image {
            margin: 0 auto;
          }
        }
      }

      .cv-grid {
        grid-template-columns: 1fr;

        .cv-main {
          .section {
            .timeline-item {
              grid-template-columns: 1fr;
              gap: 0.5rem;

              .timeline-date {
                margin-bottom: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
