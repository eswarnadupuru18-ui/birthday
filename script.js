/* ==========================
   ELEMENTS
========================== */

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

const puppy = document.getElementById("puppy");
const startBtn = document.getElementById("startBtn");

const music = document.getElementById("bgMusic");

const hearts = document.querySelector(".hearts");

/* ==========================
   SHOW BUTTON
========================== */

window.onload = () => {

setTimeout(() => {

startBtn.style.display = "inline-block";

startBtn.style.animation = "fadeButton 1s ease";

},5000);

};

/* ==========================
   BUTTON CLICK
========================== */

startBtn.addEventListener("click",()=>{

music.play();

intro.style.display="none";

mainContent.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,350);

/* ==========================
   PHOTO ANIMATION
========================== */

const photos=document.querySelectorAll(".photo");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

}

});

});

photos.forEach(photo=>{

photo.style.opacity="0";

photo.style.transform="scale(.8)";

photo.style.transition="1s";

observer.observe(photo);

});
/* ==========================
   BUTTON ANIMATION
========================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeButton{

from{

opacity:0;

transform:scale(.5);

}

to{

opacity:1;

transform:scale(1);

}

}

`;

document.head.appendChild(style);

/* ==========================
   SPARKLES
========================== */

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.fontSize=(12+Math.random()*18)+"px";

sparkle.style.pointerEvents="none";

sparkle.style.transition="2s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.opacity="0";

sparkle.style.transform="scale(2)";

},100);

setTimeout(()=>{

sparkle.remove();

},2200);

}

setInterval(createSparkle,500);

/* ==========================
   BALLOONS
========================== */

function balloon(){

const b=document.createElement("div");

b.innerHTML="💕";

b.style.position="fixed";

b.style.left=Math.random()*100+"vw";

b.style.bottom="-80px";

b.style.fontSize=(30+Math.random()*20)+"px";

b.style.transition="12s linear";

document.body.appendChild(b);

setTimeout(()=>{

b.style.bottom="110vh";

},100);

setTimeout(()=>{

b.remove();

},13000);

}

setInterval(balloon,3000);

/* ==========================
   FIREWORKS
========================== */

function firework(){

const f=document.createElement("div");

const icons=["✨","💖"];

f.innerHTML=icons[Math.floor(Math.random()*icons.length)];

f.style.position="fixed";

f.style.left=Math.random()*100+"vw";

f.style.top=Math.random()*60+"vh";

f.style.fontSize=(30+Math.random()*20)+"px";

document.body.appendChild(f);

setTimeout(()=>{

f.style.transform="scale(2.2)";

f.style.opacity="0";

},100);

setTimeout(()=>{

f.remove();

},1800);

}

setInterval(firework,2500);

/* ==========================
   AUTO SCROLL
========================== */

let scrolling=false;

startBtn.addEventListener("click",()=>{

setTimeout(()=>{

scrolling=true;

autoScroll();

},2500);

});

function autoScroll(){

if(!scrolling) return;

window.scrollBy({

top:2,

behavior:"auto"

});

if(window.innerHeight+window.scrollY<document.body.scrollHeight){

requestAnimationFrame(autoScroll);

}

}

/* ==========================
   FINAL MESSAGE
========================== */

setTimeout(()=>{

console.log("Happy Birthday Madhu ❤️");

},10000);

/* ==========================
   END
========================== */