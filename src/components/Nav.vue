<template>
  <div>
    <div class="burgerBtn">
      <AkThreeLineHorizontal class="content btn" v-if="!visible" @click="show"/>
    </div>
    <div class="main">
      <p class="content opacity" v-if="visible">HABROUCHE Lounis</p>
      <div class="containeurNav opacity" v-if="visible && route.fullPath != '/'" @click="goToHome">
        <BxHomeAlt2/>
        <p>Menu principale</p>
      </div>
      <div class="containeurNav opacity" v-if="visible">
        <FlHeadsetVr/>
        <p>A propos</p>
      </div>
      <div class="containeurNav opacity" v-if="visible" @click="goCV">
        <ReProfileLine/>
        <p>C.V</p>
      </div>
      <div class="containeurNav opacity" v-if="visible">
        <FlContactCard/>
        <p>info</p>
      </div>
      <div class="containeurNav opacity" v-if="visible" @click="goComp">
        <ClBook/>
        <p>Compétence</p>
      </div>
      <AkCross @click="show" v-if="visible" class="content opacity btn"/>
    </div>
  </div>
</template>

<script setup>
import { AkThreeLineHorizontal } from '@kalimahapps/vue-icons';
import { AkCross } from '@kalimahapps/vue-icons';
import { FlContactCard } from '@kalimahapps/vue-icons';
import { nextTick, ref } from 'vue';
import gsap from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import { ReProfileLine } from '@kalimahapps/vue-icons';
import { ClBook } from '@kalimahapps/vue-icons';
import { FlHeadsetVr } from '@kalimahapps/vue-icons';
import { BxHomeAlt2 } from '@kalimahapps/vue-icons';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import samouraiMove from '@/pipe/samourai';


gsap.registerPlugin(CSSPlugin)
const router = useRouter()
const visible = ref(false)
const route = useRoute()
const show = () => {
   console.log(visible.value);
   
  if (!visible.value) {

    visible.value = true
    nextTick(() => {
      gsap.from('.opacity',{
        opacity: 0 , duration: 0.5 , x:-200 , stagger: 0.2
      })
      gsap.to('.main',{opacity: 1})
    })
  } else {
    visible.value = false
    nextTick(() => {
      gsap.to('.main',{opacity: 0})
    })
  }
}
const goCV = () => {
  router.push('/cv')
  samouraiMove(true)
}
const goComp = () => {
  router.push('/Competence')
  samouraiMove(true)
}
const goToHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.burgerBtn{
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 4;
  .btn{
    color: goldenrod;
    font-size: 3rem;
  }
}
.burgerBtn:hover{
  cursor: pointer;
}
.main{
  position: fixed;
  left: 0;
  background: rgb(15, 21, 48);
  opacity: 0;
  width: max-content;
  max-width: 130px;
  height: 100vh;
  padding: 30px;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 3;
  .content{
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: 'Jersey';
  }
  .opacity{
    opacity: 1;
  }
  .containeurNav{
    display: flex;
    font-family: 'jersey';
    padding: 5px;
    background: rgba(79, 79, 80, 0.705);
    border-radius: 5px;
    margin: 10px;
    align-items: center;
    cursor: pointer;
    p{
      margin-left: 10px;
    }
  }
  .btn{
    cursor: pointer;
  }
}
</style>