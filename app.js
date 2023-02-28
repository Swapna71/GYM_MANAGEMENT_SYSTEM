const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if (navToggle){
    navToggle.addEventListener('click', () => {
navMenu.classList.add("show-menu")
    })
}


if (navClose){

    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}



// remove menu mobile

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', linkAction))



//change background header
const scrollHeader = () => {
     const header = document.getElementById('header')
     this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
    }
window.addEventListener('scroll', scrollHeader);


// TESTIMONIAL SWIPER
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});


// scroll sections active link

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
 const scrollY = window.pageYOffset
 sections.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetHeight - 58;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link');
    }else{
        sectionClass.classList.remove('active-link');
    }
 })
}
 window.addEventListener('scroll', scrollActive)



//  show scroll up
const scrollUp = () => {
const scrollUp = document.getElementById('scroll-up')
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
: scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

//scroll reveal animation

const sr = scrollActive(
    {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    }
)

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program-card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose_-content, .calculate__img`, {origin: 'right'})



// calculate js

const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault()

    if(calculateCm.value === '' || calculateKg.value === ''){
calculateMessage.classList.remove('color-green');
calculateMessage.classList.add('color-red');


calculateMessage.textContent="Fill in the Height and Weight"
   setTimeout(() =>{
    calculateMessage.textContent = ''
   }, 3000)
} else{
const cm = calculateCm.value / 100;
const kg = calculateKg.value;
const bmi = Math.round(kg / (cm*cm))

if(bmi < 18.5){
    calculateMessage.classList.add('color-green');
    calculateMessage.textContent=`Your BMI is ${bmi} and you are skinny`;
    } else if(bmi < 25){
        calculateMessage.classList.add('color-green');
        calculateMessage.textContent=`Your BMI is ${bmi} and you are healthy`
    } else {
        calculateMessage.classList.add('color-green');
        calculateMessage.textContent =`Your BMI is ${bmi} and you are overweight`
    }

    calculateCm.value = ''
    calculateKg.value= ''

    setTimeout(() =>{
        calculateMessage.textContent = ''
    }, 4000)
}
}
calculateForm.addEventListener('submit', calculateBmi);




//EMAIL JS

const  contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const contactUser = document.getElementById('contact-user');

const sendEmail = (e) =>{
    e.preventDefault();

    if(contactUser.value ==='') {
        contactMessage.classList.remove("color-green");
        contactMessage.classList.add('color-red');

        contactMessage.textContent = 'You must enter your email'
   setTimeout(() =>{
    contactMessage.textContent = ''
   }, 3000)
} else {
    emailjs.sendForm('service_7cjg384','template_lgv4mqg','#contact-form','gAYV4fTEC9XWcl5Ek')
.then(() =>{
    contactMessage.classList.add('color-green');
    contactForm.textContent = 'You registered successfully'

    setTimeout(() =>{
        contactMessage.textContent = ''
    }, 3000)
}, (error) => {
    alert('OOPS! SOMETHING HAS FAILED...', error)
})

contactUser.value
}

}

contactForm.addEventListener('submit', sendEmail);