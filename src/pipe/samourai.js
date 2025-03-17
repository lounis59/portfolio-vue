import gsap from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin)
const timeline = gsap.timeline()

const samouraiMove = (bool) => {
  const screenSizeW = window.innerWidth
  const img1 = "img/samourai/Walk.png"
  const img2 = "img/samourai/Walk (1).png"
  let x = -400
  let x2 = -390
  if (bool) timeline.pause();
   if (screenSizeW <= 500) {
      x = -150
      x2 = -140
     for (let index = 0; index < 17; index++) {
        timeline.from('.samourai',{
        x: x + index, 
        duration:0.15, 
        onUpdate:() => {
          document.querySelector('.samourai').setAttribute("src" , img1)
      }})
      timeline.from('.samourai',{
        x: x2 + index, 
        duration:0.15, 
        onUpdate:() => {
          document.querySelector('.samourai').setAttribute("src" , img2)
      }})
      x += index
      x2 += index
      console.log(x , x2 , 't la');
      
    }
   timeline.to('.samourai',{
     x: 0, 
     onUpdate:() => {
       document.querySelector('.samourai').setAttribute("src" , "img/samourai/Idle.png")
   }})
   } else if (screenSizeW >= 500) {

    for (let index = 0; index < 29; index++) {
        timeline.from('.samourai',{
        x: x + index, 
        duration:0.14, 
        onUpdate:() => {
          document.querySelector('.samourai').setAttribute("src" , img1)
      }})
      timeline.from('.samourai',{
        x: x2 + index, 
        duration:0.14, 
        onUpdate:() => {
          document.querySelector('.samourai').setAttribute("src" , img2)
      }})
      x += index
      x2 += index
      console.log(x , x2 , 't la');
      
    }
   timeline.to('.samourai',{ 
     x: 0, 
     onUpdate:() => {
       document.querySelector('.samourai').setAttribute("src" , "img/samourai/Idle.png")
   }})
   }
 }

 export default samouraiMove