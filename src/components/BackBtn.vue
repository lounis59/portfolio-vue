<template>
  <BsArrowLeftCircle ref="btnRef" class="btn" @click="back" @mousedown="pushBtn" @mouseup="stopPush"/>
</template>

<script setup>
import { BsArrowLeftCircle } from '@kalimahapps/vue-icons';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const btnRef = ref(null);

const back = () => {
  router.back()
}
const pushBtn = () => {
  if (btnRef.value) {
    btnRef.value.classList.toggle('btnPush');
  }
}
const stopPush = () => {
  if (btnRef.value) {
    btnRef.value.classList.toggle('btn');
  }
}
</script>

<style lang="scss" scoped>
.btn{
  position: relative;
  margin: 50px;
  top: 0%;
  left: 50px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow:  10px 10px 20px #bebebe,
              -10px -10px 20px #ffffff;
  color: goldenrod;
  cursor: pointer;
}
.btnPush{
  margin: 50px;
  border-radius: 50%;
  position: relative;
  top: 0%;
  left: 50px;
  width: 35px;
  height: 35px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  10px 10px 20px #bebebe,
              -10px -10px 20px #ffffff;
  cursor: pointer;
}
</style>