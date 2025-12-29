<template>
    <div class="mainComp">
        <BackBtn v-if="route.fullPath != '/'"/>
        <div class="containeur front">
            <h2>Skills</h2>
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
                <div class="contain">
                    <CoBrandReact class="reactNative icons"/>
                    <p>React native</p>
                    <div class="circle reactNativeLvl">XP</div>
                </div>
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
const tl = gsap.timeline()
const route = useRoute()
gsap.registerEffect({
    name:'startLvl',
    effect: (target) => {
        return gsap.fromTo(target,
    {
        borderLeftWidth:"0px" ,borderTopWidth:"0px",borderRightWidth:"0px", borderLeftColor: "transparent",borderTopColor: "transparent",borderRightColor: "transparent"
    },
    {
        borderLeftWidth: "5px" ,borderTopWidth: "5px",borderRightWidth: "5px",delay:1.2
    }
   )
    }
})
gsap.registerEffect({
    name:'lvl1',
    effect: (target) => {
        return gsap.to(target, {borderLeftColor:"blue"})
    }
})
gsap.registerEffect({
    name:'lvl2',
    effect: (target) => {
        return gsap.to(target, {borderLeftColor:"blue" , borderTopColor:"blue"})
    }
})
gsap.registerEffect({
    name:'lvl3',
    effect: (target) => {
        return gsap.to(target, {borderLeftColor:"blue" , borderTopColor:"blue",borderRightColor:"blue"})
    }
})
onMounted(() => {
    console.log('tla');
    
    gsap.from('.front',{  width:0 , height:0 , opacity:0 , duration:2})
   tl.add(gsap.effects.startLvl('.circle'))
        .add(gsap.effects.lvl3('.vuelvl'))
        .add(gsap.effects.lvl2('.angularLvl'), "+=0.2")
        .add(gsap.effects.lvl2('.reactLvl'),"+=0.2")
        .add(gsap.effects.lvl2('.reactNativeLvl'),"+=0.2")
        .add(gsap.effects.lvl3('.nodelvl'),"+=0.2")
        .add(gsap.effects.lvl3('.sqllvl'),"+=0.2")
        .add(gsap.effects.lvl2('.phplvl'),"+=0.2")
        .add(gsap.effects.lvl2('.dockerlvl'),"+=0.2")
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
        width: 40%;
        overflow: hidden;
        height: min-content;
        padding: 20px;
        border: 5px solid goldenrod;
        border-radius: 10px;
        margin-bottom: 50px;
        box-shadow: 0px 0px 50px 20px rgb(133, 132, 132) ;
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
                justify-content: space-between;
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
                .angularLvl , .dockerlvl,.reactLvl, .reactNativeLvl{
                    border: 5px solid transparent;
                    border-left: 5px blue solid;
                    border-top: 5px blue solid;   
                }
                
               
               
               
            }
                        
            .icons{
                font-size: 2rem;
            }
            .vue{
                color: green;
            }
            .react{
                color: rgb(4, 143, 207);
            }
            .reactNative{
                color: rgb(4, 143, 207);
                background-color: black;
                border-radius: 50%;
                padding: 5px;
            }   
        }
    }
   }
@media screen and (min-width: 768px) {
    .competenceContaineur{
        align-items: center;
        .contain{
            width: 60%;
            padding: 10px;
            justify-content: space-around !important;
        }
    }
    
}
</style>