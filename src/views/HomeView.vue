<template>
  <div class="home">
    <BackBtn v-if="route.fullPath != '/'"/>
    <h1 class="content">Bienvenue !</h1>
    <img src="img/samourai/Idle.png" alt="samourai.png" class="samourai">
   <div class="containeur" @mouseenter="zoom(true)" 
   @mouseleave="zoom(false)">

     <img src="img/donjonPorte.png" alt="donjon.png" class="content door" >
     <div class="logoContaineur">
      <div class="iconsContaineur" @click="goCv">
        <ReProfileLine/>
        <p>C.V</p>
      </div>
      <div class="iconsContaineur" @click="goComp">
        <CdTools class="icons"/>
        <p>Compétences</p>

      </div>
      <div class="iconsContaineur">
        <BsJoystick class="icons"/>
        <p>Jeux</p>
      </div>
      <div class="iconsContaineur" @click="() => {
        samouraiMove(true)
        router.push('/A-propos')}">
        <FlContactCard class="icons"/>
        <p>Informations</p>
      </div>
      <div class="iconsContaineur" @click="goProjet">
        <CaEarthEuropeAfrica class="icons"/>
        <p>Projet</p>
      </div>
     </div>
   </div>
    <p class="message">Choisis ta route voyageur ! </p>

  </div>
</template>

<script setup>
import { BsJoystick } from '@kalimahapps/vue-icons';
import { FlContactCard } from '@kalimahapps/vue-icons';
import gsap from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import { nextTick, onMounted } from 'vue';
import { ReProfileLine } from '@kalimahapps/vue-icons';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import samouraiMove from '@/pipe/samourai';
import { CdTools } from '@kalimahapps/vue-icons';
import BackBtn from '../components/BackBtn.vue';
import { CaEarthEuropeAfrica } from '@kalimahapps/vue-icons';



gsap.registerPlugin(CSSPlugin)
const timeline = gsap.timeline()
const router = useRouter()
const route = useRoute()
const store = useStore()
const zoom = (statue) => {
 if (statue) {
  gsap.to('.door', {scale: 1.8, duration:1})
  gsap.to('.iconsContaineur', {   duration:2 , scale: 1})
  gsap.to('.logoContaineur', {   duration:2 , scale: 1})
  
} else {
  gsap.to('.door', {scale: 1, duration:1})
  gsap.to('.iconsContaineur', {  duration:2 , scale: 0})
  gsap.to('.logoContaineur', {  duration:2 , scale: 0})
  
  
}
}
const flowerRain = () => {
  const home = document.querySelector('.home')
  if ( !home || route.fullPath != '/') {
    return;
  } 
  for (let i = 0; i < 10; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', 'img/sakuraFeuille.png');
    img.style.width = `${Math.floor(Math.random() * 15) + 10}px`; // Taille entre 10px et 25px
    img.style.position = 'absolute';
    img.style.left = `${Math.random() * 100}vw`; // Position horizontale aléatoire
    img.style.top = '-50px'; // Départ en haut de l'écran
    img.style.opacity = Math.random() * 0.5 + 0.5; // Transparence légère (0.5 - 1)

    home.appendChild(img);
    let duration = Math.random() * 5 + 5; // Durée de chute entre 5 et 10 secondes
    let delay = Math.random() * 3; // Délai aléatoire avant le début

    gsap.to(img, {
      y: window.innerHeight + 50, // Descendre sous l'écran
      x: `+=${Math.random() * 100 - 50}`, // Oscillation gauche/droite (±50px)
      rotation: Math.random() * 360, // Rotation aléatoire
      duration: duration, // Durée variable
      ease: "linear",
      repeat: -1, // Répète infiniment
      delay: delay, // Démarrage différé
    });

    // Supprimer l'élément après un cycle pour éviter une surcharge mémoire
    setTimeout(() => {
      img.remove();
    }, (duration + delay) * 1000);
  }
};


const goCv = () => {
  samouraiMove(true)
  
  router.push('/cv')
}
const goComp = () => {
  router.push('/Competence')
  samouraiMove(true)
}
const goProjet = () => {
  router.push('/Projet')
  samouraiMove(true)
}
if (route.fullPath != '/') {}
onMounted(() => {
  samouraiMove()
  console.log(route.name)
  
  setInterval(flowerRain, 3000);
  
})

</script>

<style lang="scss" scoped>
.home{
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left:  100px;
  overflow: hidden;
  background: url('../assets/cerisier-removebg-preview.png');
  background-repeat: no-repeat;
  background-position: -65% 53%;
  background-size: 300px;

  .containeur{
    cursor: pointer;
    min-width: 100%;
    position:relative;
    padding: 50px;
  }
  img{
    width: 150px;
    height: 150px;
  }
  h1{
    font-family: 'jersey';
    font-size: 3rem;
  }
  .content{
    margin-top: 20px;
    margin-bottom: 10px;
    
  }
  p{
    color: goldenrod;
    font-family: 'jersey';
  }
  .logoContaineur {
    position: absolute;
    padding: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    min-width: max-content;
    height: 300px;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-60%,-50%);
    
  
    
    .iconsContaineur{
      
      color: goldenrod;
      font-size: 1rem;
      background: rgba(51, 53, 54, 0.527);
      padding: 15px;
      min-width: 80px;
      min-height: 80px;
      border-radius: 5px;
      scale: 0;
      margin: 10px;
      .icons{
        font-size: 20px;
      }
      
    }
    
  }
  .samourai{
    position: absolute;
    width: 100px;
    height: 100px;
    left: 28%;
    top: 51%;
  }
}
@media screen and (min-width: 1000px) {
  .home{
    background-position: 20% 45%;
    background-size: 600px;
    h1{
      font-size: 7rem;
    }
    img{
      width: 250px;
      height: 250px;
    }
    .samourai{
      width: 200px;
      height: 200px;
      left: 35%;
      top:45%;
    }
    .message{
      font-size: 4rem;
    }
    .logoContaineur{
      transform: translate(-50%,-50%);
      .iconsContaineur{
        width: 100px;
      }
    }
  }
}
</style>
