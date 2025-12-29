<template>
    <div class="home">
        <BackBtn v-if="route.fullPath !== '/'" />
        <div ref="container" class="containeur">
            <h2>Bonjour</h2>
            <p ref="presentation" class="presentation"></p>
            <div class="contain">
                <div class="infoContainer">
                    <AnOutlinedGithub class="icons git" />
                    <p>Lounis59</p>
                </div>
                <div class="infoContainer">
                    <CoBrandGmail class="icons gmail" />
                    <p>lounis.habrouche@gmail.com</p>
                </div>
                <div class="infoContainer">
                    <BsPhoneFill class="icons phone" />
                    <p>06 . 25 . 82 . 10 . 64</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { AnOutlinedGithub, CoBrandGmail, BsPhoneFill } from '@kalimahapps/vue-icons'
import BackBtn from '../components/BackBtn.vue'

// Route
const route = useRoute()

// Refs
const container = ref(null)
const presentation = ref(null)

// Texte de présentation
const text = `Bonjour, je m'appelle Lounis Habrouche, j'ai 31 ans.
Ancien chaudronnier soudeur, je me suis reconverti dans le développement.
Je maîtrise Vue.js, Angular, React et React Native pour le front-end.
Côté back-end, je travaille avec Node.js, Express et PHP.
Je configure des CI/CD avec GitHub Actions et Docker, et je gère des VPS.
Passionné d'informatique, je cherche toujours de nouveaux défis.`

// Animation du texte avec effet typing
const animateText = () => {
  if (!presentation.value) return

  presentation.value.textContent = ''
  let currentIndex = 0

  const typeWriter = () => {
    if (!presentation.value) return // Vérification à chaque itération
    
    if (currentIndex < text.length) {
      presentation.value.textContent += text.charAt(currentIndex)
      currentIndex++
      setTimeout(typeWriter, 40)
    }
  }

  typeWriter()
}

// Lifecycle
onMounted(async () => {
  await nextTick()

  if (!container.value) return

  const tl = gsap.timeline()

  tl.from(container.value, {
    width: 0,
    transformOrigin: 'left center',
    duration: 1.5,
    ease: 'power2.out'
  }).call(animateText)
})
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
  font-family: 'jersey';

  .containeur {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    min-height: min-content;
    padding: 20px;
    border: 5px solid goldenrod;
    border-radius: 10px;
    margin-bottom: 50px;
    box-shadow: 0 0 50px 20px rgb(133, 132, 132);

    h2 {
      font-size: 3rem;
      margin: 20px;
    }

    .presentation {
      font-size: 1.5rem;
      margin: 20px;
      text-align: justify;
      line-height: 1.2;
      white-space: pre-line;
    }

    .contain {
      .infoContainer {
        align-items: center;
        margin: 20px;

        p {
          font-size: 1.5rem;
          margin-left: 10px;
        }

        .icons {
          font-size: 40px;
          margin: 20px;
        }

        .gmail {
          color: rgb(197, 8, 8);
        }
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .contain {
    display: flex;

    .infoContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;

      p {
        font-size: 1.5rem;
        margin-left: 10px;
      }

      .icons {
        font-size: 40px;
        margin: 20px;
      }

      .gmail {
        color: rgb(197, 8, 8);
      }
    }
  }
}
</style>