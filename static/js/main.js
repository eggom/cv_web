console.log("")
console.log("-------------------------")
console.log("HOLA. I executed main.js")
console.log("-------------------------")
console.log("")

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
console.log(navMenu)
const navToggle = document.getElementById('nav-toggle')
console.log(navToggle)
const navClose = document.getElementById('nav-close')
console.log(navClose)

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
};


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content")
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')


const q_tabs = Array.from(tabs).slice(0, 2)
const q_tabContents = Array.from(tabContents).slice(0, 2)

q_tabs.forEach(q_tab => {
    q_tab.addEventListener('click', ()=>{
        const q_target = document.querySelector(q_tab.dataset.target)

        q_tabContents.forEach(q_tabContent =>{
            q_tabContent.classList.remove('qualification__active')
        })
        q_target.classList.add('qualification__active')

        q_tabs.forEach(q_tab =>{
            q_tab.classList.remove('qualification__active')
        })
        q_tab.classList.add('qualification__active')
    })
})

/*==================== QUALIFICATION MODAL ====================*/
const modalViews = document.querySelectorAll('.qualification__modal')
const modalBtns = document.querySelectorAll('.qualification__button__modal')
const modalCloses = document.querySelectorAll('.qualification__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=> {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== WORK EXPERIENCE TABS ====================*/
const ws_tabs = Array.from(tabs).slice(2, 6);
const ws_tabContents = Array.from(tabContents).slice(2, 6);

ws_tabs.forEach(ws_tab => {
    ws_tab.addEventListener('click', ()=>{
        const ws_target = document.querySelector(ws_tab.dataset.target)

        ws_tabContents.forEach(ws_tabContent =>{
            ws_tabContent.classList.remove('work_experience__active')
        })
        ws_target.classList.add('work_experience__active')

        ws_tabs.forEach(ws_tab =>{
            ws_tab.classList.remove('work_experience__active')
        })
        ws_tab.classList.add('work_experience__active')
    })
})

/*==================== WORK EXPERIENCE MODAL ====================*/
const ws_modalViews = document.querySelectorAll('.work_experience__modal')
const ws_modalBtns = document.querySelectorAll('.work_experience__button__modal')
const ws_modalCloses = document.querySelectorAll('.work_experience__modal-close')

let ws_modal = function(modalClick){
    ws_modalViews[modalClick].classList.add('ws-active-modal')
}

ws_modalBtns.forEach((ws_modalBtn, i) =>{
    ws_modalBtn.addEventListener('click', () =>{
        ws_modal(i)
    })
})

ws_modalCloses.forEach((ws_modalClose)=> {
    ws_modalClose.addEventListener('click', () =>{
        ws_modalViews.forEach((ws_modalView) =>{
            ws_modalView.classList.remove('ws-active-modal')
        })
    })
})

/*==================== PORTFOLIO SELECTION ====================*/
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio__column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    portfolioRemoveClass(x[i], "portfolio__show");
    if (x[i].className.indexOf(c) > -1) portfolioAddClass(x[i], "portfolio__show");
  }
}

// Show filtered elements
function portfolioAddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
    element.className += " " + arr2[i];
    }
}
}
  
// Hide elements that are not selected
function portfolioRemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
}
element.className = arr1.join(" ");
}
  
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("portfolio__btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("portfolio__active");
    current[0].className = current[0].className.replace(" portfolio__active", "");
    this.className += " portfolio__active";
});
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                navLink.classList.add('active-link')
            }
        } else {
            if (navLink) {
                navLink.classList.remove('active-link')
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
