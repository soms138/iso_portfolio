const header = document.querySelector('header')
const header_txt = document.querySelector('.header_wrap')
const home = document.querySelector('.header_wrap a')
const section = document.querySelectorAll('.section')
const menuBtn = document.querySelector('.nav > li > a')
const nav_open = document.querySelectorAll('.menu > span')
const body = document.querySelector('body,html')
const cursor = document.querySelector('#mouse')
const circle = cursor.getBoundingClientRect();
const intro = document.querySelector('.intro_wrap')

let boolean = true

header.style.transition = 'all 0.3s linear'

window.addEventListener('scroll',function(){
    if(window.pageYOffset > section[1].offsetTop-100){
        header.style.backgroundColor = 'rgb(255, 255, 255, 0.2)'
        header.style.borderBottom = 'rgb(255, 255, 255, 0.8)'
        cursor.style.cursor = 'auto'
    }else{
        header.style.backgroundColor = 'rgb(255, 255, 255, 0)'
        header.style.borderBottom = 'rgb(255, 255, 255, 0)'
        cursor.style.cursor = 'none'
    }
})

// header.style.transition = 'all 0.3s linear'

// window.addEventListener('scroll',function(){
//     if(window.pageYOffset > section[1].offsetTop-100){
//         header_txt.children[0].style.color = '#fff'
//         header_txt.children[2].style.color = '#fff'
//         home.style.backgroundImage = 'url(../images/icon/ico_home_w.png)'
//     }else{
//         header_txt.children[0].style.color = '#000'
//         header_txt.children[2].style.color = '#000'
//         home.style.backgroundImage = 'url(../images/icon/ico_home.png)'
//     }
// })

// window.addEventListener('scroll',function(){
//     if(window.pageYOffset > section[1].offsetTop-400){
//         menuBtn.children[0].style.backgroundColor = 'rgba(255, 255, 255,1)'
//         menuBtn.children[1].style.backgroundColor = 'rgba(255, 255, 255,1)'
//         menuBtn.children[2].style.backgroundColor = 'rgba(255, 255, 255,1)'
//     }else{
//         menuBtn.children[0].style.backgroundColor = 'rgba(0, 0, 0,1)'
//         menuBtn.children[1].style.backgroundColor = 'rgba(0, 0, 0,1)'
//         menuBtn.children[2].style.backgroundColor = 'rgba(0, 0, 0,1)'
//     }
// })

// function section_event(a){
//     section[a].style.transition = 'all 0.3s linear'
//     window.addEventListener('scroll',function(){
//         if(window.pageYOffset > section[a].offsetTop-500){
//             menuBtn.children[0].style.backgroundColor = 'rgba(255, 255, 255,1)'
//             menuBtn.children[1].style.backgroundColor = 'rgba(255, 255, 255,1)'
//             menuBtn.children[2].style.backgroundColor = 'rgba(255, 255, 255,1)'
//         }else{
//             menuBtn.children[0].style.backgroundColor = 'rgba(0, 0, 0,1)'
//             menuBtn.children[1].style.backgroundColor = 'rgba(0, 0, 0,1)'
//             menuBtn.children[2].style.backgroundColor = 'rgba(0, 0, 0,1)'
//         }
//     })
// }
// section_event(1)

// window.addEventListener('mousemove',function(e){
//     cursor.style.left = `${e.clientX}px` // X축
//     cursor.style.top = `${e.clientY}px` // Y축
// })

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        duration: 0.2,
        left: e.pageX - circle.width/2,
        top: e.pageY- circle.height/2
    });
});

cursor.style.transition = 'all 0.3s linear'

intro.addEventListener('mouseover',function(){
    cursor.style.width = '400px'
    cursor.style.height = '400px'
})
intro.addEventListener('mouseout',function(){
    cursor.style.width = '100px'
    cursor.style.height = '100px'
})