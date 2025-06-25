
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// animasi cursor 

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: null, y: null };

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 5; i++) {
    particlesArray.push(new Particle());
  }
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 3;
    this.speedY = (Math.random() - 0.5) * 3;
    this.alpha = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 0.02;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(216, 106, 255, ${this.alpha})`;
    ctx.shadowColor = "#ab3ef4";
    ctx.shadowBlur = 10;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

let particlesArray = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    if (particlesArray[i].alpha <= 0) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}

animate();


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('.section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - document.querySelector(".l-header").offsetHeight;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav__link").forEach(link => {
    link.classList.remove("active-link");
  });

  if (currentSectionId) {
    const activeLink = document.querySelector(`.nav__link[href="#${currentSectionId}"]`);
    if (activeLink) {
      activeLink.classList.add("active-link");
    }
  }

  // Tangani scroll paling atas untuk home
  if (scrollY < 200) {
    document.querySelectorAll(".nav__link").forEach(link => link.classList.remove("active-link"));
    document.querySelector('.nav__link[href="#home"]').classList.add("active-link");
    
  }
}



window.addEventListener("scroll", scrollActive);
window.addEventListener("load", scrollActive); 

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const typingEl = document.getElementById("typing-text");
const text = "Endru Aidil";
let index = 0;
let isDeleting = false;

function typeEffect() {
  typingEl.textContent = text.substring(0, index);

  if (!isDeleting) {
    if (index < text.length) {
      index++;
      setTimeout(typeEffect, 150);
    } else {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // tunggu sebelum mulai hapus
    }
  } else {
    if (index > 0) {
      index--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = false;
      setTimeout(typeEffect, 500); // tunggu sebelum mulai ketik lagi
    }
  }
}

window.addEventListener("load", typeEffect);

// skill animasi 


