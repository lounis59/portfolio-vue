<template>
    <div class="mainComp">
        <BackBtn v-if="route.fullPath != '/'"/>
        <div class="containeur front">
            <h2>Front-end</h2>
            <div class="competenceContaineur">
                <div class="contain">
                    <AkVueFill class="icons vue"/>
                    <p>Vue 3</p>
                    <div class="circle vuelvl">XP</div>
                </div>
                <div class="contain">
                    <DeAngularjsPlain class="icons"/>
                    <p>Angular</p>
                    <div class="circle angularLvl">XP</div>
                </div>
                <div class="contain">
                    <CoBrandReact class="react icons"/>
                    <p>React</p>
                    <div class="circle reactLvl">XP</div>
                </div>
            </div>
        </div>
        <div class="containeur back">
            <h2>Back-end</h2>
            <div class="competenceContaineur">
                <div class="contain">
                    <DeNodejsPlainWordmark class="icons"/>
                    <p>Node Js</p>
                    <div class="circle nodelvl">XP</div>
                </div>
                <div class="contain">
                    <DeAzuresqldatabasePlain class="icons"/>
                    <p>SQL</p>
                    <div class="circle sqllvl">XP</div>
                </div>
                <div class="contain">
                    <CoBrandPhp class="icons"/>
                    <p>PHP</p>
                    <div class="circle phplvl">XP</div>
                </div>
                <div class="contain">
                    <VsFileTypeDocker2 class="icons"/>
                    <p>Docker</p>
                    <div class="circle dockerlvl">XP</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { AkVueFill } from '@kalimahapps/vue-icons';
import { DeAngularjsPlain } from '@kalimahapps/vue-icons';
import { CoBrandReact } from '@kalimahapps/vue-icons';
import { DeNodejsPlainWordmark } from '@kalimahapps/vue-icons';
import { DeAzuresqldatabasePlain } from '@kalimahapps/vue-icons';
import BackBtn from '../components/BackBtn.vue';
import { CoBrandPhp } from '@kalimahapps/vue-icons';
import { VsFileTypeDocker2 } from '@kalimahapps/vue-icons';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import { onMounted } from 'vue';

gsap.registerPlugin(CSSPlugin)

const route = useRoute()
onMounted(() => {
    console.log('tla');
    
    gsap.fromTo('.front',{x:500 , scale:0 , opacity:0},{
        x:0 , scale:1 ,duration:2 ,opacity:1
    })
    gsap.fromTo('.back',{x:-500,scale:0,opacity:0},{x:0 , duration:2  , delay:1 ,scale:1,opacity:1}
    )
})
</script>

<style lang="scss" scoped>
.mainComp{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    max-width: 100vw;
    min-height: 100vh;
    font-family: 'jersey';
    .containeur{
        width: 75%;
        min-height: min-content;
        padding: 20px;
        border: 5px solid goldenrod;
        border-radius: 10px;
        margin-bottom: 50px;
        h2{
            font-size: 3rem;
            margin: 20px;
        }
        .competenceContaineur{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .contain{
                display: flex;
                justify-content: space-evenly;
                align-items: center; 
                margin: 20px;
                position: relative;
                p{
                    font-size: 1.5rem;
                }
                .circle{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    padding: 5px;
                    text-align: center;
                    font-size: 1.3rem;
                }
                .vuelvl , .nodelvl , .sqllvl , .phplvl{
                    border: 5px solid transparent;
                    border-left: 5px blue solid;
                    border-top: 5px blue solid;
                    border-right: 5px blue solid;

                }
                .angularLvl , .dockerlvl{
                    border: 5px solid transparent;
                    border-left: 5px blue solid;
                    border-top: 5px blue solid;   
                }
                .reactLvl{
                    border: 5px solid transparent;
                    border-left: 5px blue solid;
                }
               
               
               
            }
                        
            .icons{
                font-size: 2rem;
            }
            .vue{
                color: green;
            }
            .readt{
                color: rgb(4, 143, 207);
            }   
        }
    }
}
</style>