const header_txt = document.querySelector('.header_wrap')
const section = document.querySelectorAll('.section')
const navBtn = document.querySelector('.nav_t > li > a')
const navLine = document.querySelectorAll('.nav_t > li > a > span')
const nav_open = document.querySelector('.nav_open_wrap')
const menu = document.querySelectorAll('.menu')
const cursor = document.querySelector('#mouse')
const circle = cursor.getBoundingClientRect();
const intro = document.querySelector('.intro_wrap')

let boolean = true


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
        header_txt.style.borderBottom = 'solid 1px rgb(255, 255, 255, 0.3)'
    }else{
        header_txt.style.backgroundColor = 'rgb(255, 255, 255, 0)'
        header_txt.style.borderBottom = 'solid 1px rgb(255, 255, 255, 0)'
    }
})

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