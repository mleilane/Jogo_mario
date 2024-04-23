
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () =>{
mario.classList.add("jump")
setTimeout(()=>{
mario.classList.remove("jump")
},500)

}

/*observando se  o mario bateu no tupo */
constloop = setInterval(()=>{
const pipePosition = pipe.offsetLeft;
const marioPosition = windq.getComputedStyle(mario).bottom

if(pipePosition<=100px && pipePosition >0){
    pipe.style.animation ="none";
    pipe.style.left = `${pipePosition}px`;
}

},10)

document.addEventListener("keydown",jump)