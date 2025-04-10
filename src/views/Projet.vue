<template>
  <div class="home">
    <h1>Mes Projet</h1>
    <div class="containeurProjet">
      <div class="btn" @click="goCenter">
        <p>Center Gaming</p>
        <img src="img/Center_Gaming_Logo 1.png" alt="Center_Gaming_Logo 1.png">
      </div>
    </div>
  </div>
</template>

<script setup>
const goCenter = () => {
  window.location.href = 'http://51.75.125.145:3000/'
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'jersey';
  padding-top: 100px;
  h1{
    font-size: 3rem;
  }
  .containeurProjet{
    margin-top: 50px;
    min-width: 90%;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .btn{
      width: min-content;
      height: min-content;
      background: rgba(175, 175, 175, 0.63);
      border-radius: 20px;
      border: 4px solid goldenrod;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 30px;
      font-size: 1.5rem;
      img{
        width: 100px;
        height: auto;
      }
    }
    
  }
}
</style>