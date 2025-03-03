<template>
<div class="cv">
  <div class="photo">
    <img src="img/photo.jpg" alt="photo.jpg">
  </div>
  <div class="pres">
    <h1>HABROUCHE Lounis</h1>
    <span>Développeur Full Stack</span>
    <p>Passionné par le développement, j’ai obtenu mon titre de Développeur Web en octobre 2024 et je poursuis actuellement une formation de Concepteur Développeur Web pour approfondir mes compétences.
    Je maîtrise les technologies Front-end avec Vue.js et Angular, ainsi que le Back-end avec Node.js (Express, JWT, etc.) et PHP. Je suis également à l’aise avec les bases de données SQL, la conteneurisation avec Docker, et l’écriture de tests avec Jest.
    Curieux et rigoureux, je cherche à intégrer une équipe dynamique où je pourrai mettre à profit mes compétences et continuer à apprendre. 
    </p>
  </div>
  <div class="contact">
    <div class="tel contain">
      <AkPhone class="icon"/>
      <p>06.25.82.10.64</p>
    </div>
    <div class="mail contain">
      <AnOutlinedMail class="icon"/>
      <p>lounis.habrouche@gmail.com</p>
    </div>
    <div class="adress contain">
      <AkHomeAlt1 class="icon"/>
      <p>257/1 rue Jules Guesde 59150 Wattrelos</p>
    </div>
    <div class="git contain">
      <AnFilledGithub class="icon"/>
      <p>lounis59</p>
    </div>
  </div>
  <div class="xpContain">
    <div class="diplome containeur">
      <h2>Diplome</h2>
      <p>Tittre professionnel DEVELLOPPEUR WEB niveux 5 </p>
      <span>AFCI Villeneuve d'ascq 10/2024</span>
    </div>
    <div class="experience containeur">
      <h2>Experience</h2>
      <div class="poste">
        <h3>Chaudronnier Soudeur 2019-2024</h3>
        <ul>
          <li>Conseption de piece (Auto cad)</li>
          <li>Soudure (TIG , MIG , MAG)</li>
          <li>Pliage</li>
          <li>Decoupe</li>
          <li>Etc ...</li>
        </ul>
      </div>
      <div class="poste">
        <h3>Metalier Soudeur 2018-2019</h3>
      </div>
      <div class="poste">
        <h3>Serrurier Soudeur 2016-2018</h3>
      </div>
    </div>
    
    <div>
      <span></span>
    </div>
  </div>
  <div class="compContain"></div>
    
  
</div>
</template>

<script setup>
import { AkPhone } from '@kalimahapps/vue-icons';
import { AnOutlinedMail } from '@kalimahapps/vue-icons';
import { AkHomeAlt1 } from '@kalimahapps/vue-icons';
import { AnFilledGithub } from '@kalimahapps/vue-icons';
import gsap from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import { onMounted } from 'vue';

gsap.registerPlugin(CSSPlugin)

onMounted(() => {
  gsap.fromTo('.photo',{x:-300 , scale:0, duration: 3},{x:0, scale:1})
  gsap.fromTo('.pres',{x:500 , scale:0, duration: 3 },{x:0, scale:1, delay:0.5})
  gsap.from('.contain',{x:-200,opacity:0,delay:1,stagger:0.5})
  gsap.from('.containeur',{x:300,opacity:0,delay:3,stagger:0.5})

})
</script>

<style lang="scss" scoped>
@media screen and (max-width:430px) {
  
  .cv{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    .photo{
      width: 150px;
      height: 150px;
      align-self: flex-end;
      margin-top: 50px;
      margin-right: 50px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .pres{
      width: 80vw;
      margin-top: 50px;
      align-self: flex-end;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-family: 'jersey';
      background: goldenrod;
      border-radius: 50px;
      margin-left: 50px;
      box-shadow:  41px 41px 82px #bebebe,
                  -41px -41px 82px #ffffff;
      h1{
        font-size: 2rem;
      }
      span{
        font-size: 1.5rem;
        
      }
      p{
        text-wrap: balance;
        
      }
  
    }
    .contact{
      padding: 20px;
      align-self: flex-end;
      .contain{
        display: flex;
        padding: 10px;
        background: rgba(0, 0, 0, 0.267);
        margin-left: 60px;
        margin-bottom: 20px;
        border-radius: 5px;
        align-items: center;
        box-shadow:  5px 5px 10px #bebebe,
               -5px -5px 10px #ffffff;
        p{
          margin-left: 20px;
        }
        .adress{
          .icon{
            
          }
        }
        .icon{
        color: goldenrod;
          
        }
      }
    }
    .xpContain{
      align-self: flex-end;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      .containeur{
        max-width: 80vw;
        background: rgba(128, 128, 128, 0.438);
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 10px;
        box-shadow:  15px 15px 30px #bebebe,
               -15px -15px 30px #ffffff;
      }
      h2{
          align-self: center;
          margin: 20px;
          font-size: 2rem;
        }
      p, span, h3{
        align-self: flex-start;
        margin: 10px;
      }
      ul{
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        li{
          align-self: flex-start;
          list-style: none;
        }
      }
      .diplome{
        display: flex;
        flex-direction: column;
        h2, p, span{
          text-align: left;
        }
      }
      .poste{
        text-align: left;
        margin: 30px;
      }
    }
  }
}
@media  screen and (min-width: 1000px) {
  .cv{
  width: 100vw;
  height: 100vh;
  padding: 200px;
  display: grid;
  grid-template: 4/3;
  font-family: 'jersey';
  .photo{
    grid-row: 1/2;
    grid-column: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    img{

      width: 200px;
      height: 300px;
      border-radius: 10px;
      box-shadow:  20px 20px 40px #bebebe,
                  -20px -20px 40px #ffffff;
    }
  }
  .pres{
    grid-row: 1;
    grid-column: 2/3;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'jersey';
    background: goldenrod;
    border-radius: 50px;
    margin-left: 50px;
    box-shadow:  41px 41px 82px #bebebe,
                -41px -41px 82px #ffffff;
    h1{
      font-size: 5rem;
    }
    span{
      font-size: 2.5rem;
      
    }
    p{
      text-wrap: balance;
      font-size: 1.5rem;
    }
  }
  .contact{
    grid-row: 2;
    grid-column: 1;
    padding: 20px;
    .contain{
      display: flex;
      padding: 10px;
      background: rgba(0, 0, 0, 0.267);
      margin: 10px;
      border-radius: 5px;
      box-shadow:  5px 5px 10px #bebebe,
             -5px -5px 10px #ffffff;
      p{
        margin-left: 20px;
      }
      .icon{
      color: goldenrod;
        
      }
    }
  }
  .xpContain{
    margin: 30px;
    padding: 30px;
    height: 100%;
    grid-row: 2/4;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .containeur{
      background: rgba(128, 128, 128, 0.438);
      margin: 20px;
      padding: 20px;
      border-radius: 10px;
      box-shadow:  15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
    }
    h2{
        align-self: center;
        margin: 20px;
        font-size: 3rem;
      }
    p, span, h3{
      align-self: flex-start;
      margin: 10px;
      font-size: 2rem;
    }
    ul{
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      li{
        align-self: flex-start;
        list-style: none;
      }
    }
    .diplome{
      display: flex;
      flex-direction: column;
      h2, p, span{
        text-align: left;
      }
    }
    .poste{
      text-align: left;
      margin: 30px;
    }
  }
  
}
}

</style>