<template>
    <div class="mainComp">
        <BackBtn v-if="route.fullPath != '/'"/>
        <div class="containeur">
            <h2>Front-end</h2>
            <div class="competenceContaineur">
                <div class="contain">
                    <AkVueFill class="icons vue"/>
                    <p>Vue 3</p>
                </div>
                <div class="contain">
                    <DeAngularjsPlain class="icons"/>
                    <p>Angular</p>
                </div>
                <div class="contain">
                    <CoBrandReact class="react icons"/>
                    <p>React</p>
                </div>
            </div>
        </div>
        <div class="containeur">
            <h2>Back-end</h2>
            <div class="competenceContaineur">
                <div class="contain">
                    <DeNodejsPlainWordmark class="icons"/>
                    <p>Node Js</p>
                </div>
                <div class="contain">
                    <DeAngularjsPlain class="icons"/>
                    <p>Angular</p>
                </div>
                <div class="contain">
                    <CoBrandReact class="react icons"/>
                    <p>React</p>
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
import BackBtn from '../components/BackBtn.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style lang="scss" scoped>
.mainComp{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
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
                p{
                    font-size: 1.5rem;
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