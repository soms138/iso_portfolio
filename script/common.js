const header_txt = document.querySelector('.header_wrap')
const section = document.querySelectorAll('.section')
const navBtn = document.querySelector('.nav_t > li > a')
const navLine = document.querySelectorAll('.nav_t > li > a > span')
const nav_open = document.querySelector('.nav_open_wrap')
const menu = document.querySelectorAll('.menu')
const cursor = document.querySelector('#mouse')
const circle = cursor.getBoundingClientRect();
const intro = document.querySelector('.intro_wrap')
const aTag = document.querySelector('a')

let boolean = true

function section_event(a){
    section[a].style.transition = 'all 0.3s linear'
    window.addEventListener('scroll',function(){
        if(window.pageYOffset > section[a].offsetTop-500){
            section[a].style.opacity = '1'
            section[a].style.transform = 'translateY(0%)'
        }else{
            section[a].style.opacity = '0'
            section[a].style.transform = 'translateY(10%)'
        }
    })
}
section_event(0)
section_event(1)
section_event(2)
section_event(3)
section_event(4)
section_event(5)

navBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(boolean == true){
        navLine[0].style.transform = 'translateY(8.2px) rotate(45deg)'
        navLine[2].style.transform = 'translateY(-8.2px) rotate(-45deg)'
        navLine[1].style.display = 'none'
        nav_open.style.transform = 'translateY(0)';
        function menuEvent(a){
            menu[a].addEventListener('click',function(){
                nav_open.style.transform = 'translateY(-100%)';
                navLine[0].style.transform = 'translateY(0) rotate(0)'
                navLine[2].style.transform = 'translateY(0) rotate(0)'
                navLine[1].style.display = 'block'
                nav_open.style.transform = 'translateY(-100%)';
            })
        }
        menuEvent(0)
        menuEvent(1)
        menuEvent(2)
        menuEvent(3)
        menuEvent(4)
        
        boolean = false
    }else{
        navLine[0].style.transform = 'translateY(0) rotate(0)'
        navLine[2].style.transform = 'translateY(0) rotate(0)'
        navLine[1].style.display = 'block'
        nav_open.style.transform = 'translateY(-100%)';

        boolean = true
    }
})

header_txt.style.transition = 'all 0.3s linear'

window.addEventListener('scroll',function(){
    if(window.pageYOffset > section[0].offsetTop+200){
        header_txt.style.backgroundColor = 'rgb(34, 34, 34, 0.7)'
        header_txt.style.backdropFilter = 'blur(5px)'
        header_txt.style.borderBottom = 'solid 1px rgb(255, 255, 255, 0.3)'
    }else{
        header_txt.style.backgroundColor = 'rgb(255, 255, 255, 0)'
        header_txt.style.backdropFilter = 'blur(0)'
        header_txt.style.borderBottom = 'solid 1px rgb(255, 255, 255, 0)'
    }
})