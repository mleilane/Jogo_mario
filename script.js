
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const restar = document.querySelector('.restart')



const jump = () =>{
mario.classList.add("jump")
setTimeout(()=>{
mario.classList.remove("jump")
},500)

}

/*observando se  o mario bateu no tupo */
const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft;
//colocando o + na frente da string ele tenta converter para numero 
const marioPosition = +window
.getComputedStyle(mario)
.bottom.replace("px", "");

console.log(typeof marioPosition)


if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 80){
    pipe.style.animation ="none";
    pipe.style.left = `${pipePosition}px`

    mario.style.animation ="none";
    mario.style.bottom = `${marioPosition}px`

    mario.src = "./assets/game-over.png"
    mario.style.width = "100px"
    mario.style.marginLeft = "23px"

    clearInterval(loop)
 }

}, 10);

restar.addEventListener('click', () => {
    location.reload(true)
})

document.addEventListener("keydown",jump)