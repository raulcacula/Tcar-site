
let gtr = document.querySelector('.nismo-gtr-img')
//let back = document.querySelector('.back-gtr')//

window.addEventListener('scroll' , function(){
    let value = window.scrollY
    gtr.style.top = 400 + value * -0.5 + '%'
    back.style.zoom = 400 + value * -0.5 + '%'
})

var meca = document.getElementById('meca')
var mecaMain = document.querySelector('#mecaMain')
var mecaMain2 = document.querySelector('#mecaMain2')
var mecaMain3 = document.querySelector('#mecaMain3')

function mecaClick(){
    if(meca = mecaMain.style.display  == 'block',
       meca = mecaMain2.style.display == 'block',
       meca = mecaMain3.style.display == 'block'){
         mecaMain.style.display = 'none'
         mecaMain2.style.display = 'none'
         mecaMain3.style.display = 'none'
    }else{
        bmwMain.style.display = 'none'
        bmwMain2.style.display = 'none'
         bmwMain3.style.display = 'none'
        nissanMain.style.display = 'none'
        nissanMain2.style.display = 'none'
        nissanMain3.style.display = 'none'

        audiMain.style.display = 'none'
        audiMain2.style.display = 'none'
        audiMain3.style.display = 'none'

        mecaMain.style.display = 'block'
        mecaMain2.style.display = 'block'
        mecaMain3.style.display = 'block'
    }
}

var audi = document.getElementById('audi')
var audiMain = document.querySelector('#audiMain')
var audiMain2 = document.querySelector('#audiMain2')
var audiMain3 = document.querySelector('#audiMain3')

function audiClick(){
    if(audi = audiMain.style.display == 'block',
     audi = audiMain2.style.display == 'block',
     audi = audiMain3.style.display == 'block'){
        
        audiMain.style.display = 'none'
        audiMain2.style.display = 'none'
        audiMain3.style.display = 'none'
    }else{
        bmwMain.style.display = 'none'
        bmwMain2.style.display = 'none'
         bmwMain3.style.display = 'none'

        nissanMain.style.display = 'none'
        nissanMain2.style.display = 'none'
        nissanMain3.style.display = 'none'

        mecaMain.style.display = 'none'
         mecaMain2.style.display = 'none'
         mecaMain3.style.display = 'none'

        audiMain.style.display = 'block'
        audiMain2.style.display = 'block'
        audiMain3.style.display = 'block'
    }
}

var nissan =  document.getElementById('nissan')
var nissanMain = document.getElementById('nissanMain')
var nissanMain2 = document.getElementById('nissanMain2')
var nissanMain3 = document.getElementById('nissanMain3')

function nissanClick(){
    if(nissan = nissanMain.style.display == 'block',
    nissan = nissanMain2.style.display == 'block',
    nissan = nissanMain3.style.display == 'block'){
       
       nissanMain.style.display = 'none'
       nissanMain2.style.display = 'none'
       nissanMain3.style.display = 'none'
   }else{
    bmwMain.style.display = 'none'
    bmwMain2.style.display = 'none'
     bmwMain3.style.display = 'none'

       mecaMain.style.display = 'none'
        mecaMain2.style.display = 'none'
        mecaMain3.style.display = 'none'

        audiMain.style.display = 'none'
        audiMain2.style.display = 'none'
        audiMain3.style.display = 'none'

       nissanMain.style.display = 'block'
       nissanMain2.style.display = 'block'
       nissanMain3.style.display = 'block'
   }
}

var bmw = document.getElementById('bmw')
var bmwMain = document.getElementById('bmwMain')
var bmwMain2 = document.getElementById('bmwMain2')
var bmwMain3 = document.getElementById('bmwMain3')
function bmwClick(){
    if(bmw = bmwMain.style.display == 'block',
    bmw = bmwMain2.style.display == 'block',
    bmw = bmwMain3.style.display == 'block'){
       
       bmwMain.style.display = 'none'
      bmwMain2.style.display = 'none'
       bmwMain3.style.display = 'none'
   }else{
    nissanMain.style.display = 'none'
    nissanMain2.style.display = 'none'
    nissanMain3.style.display = 'none'
    
       mecaMain.style.display = 'none'
        mecaMain2.style.display = 'none'
        mecaMain3.style.display = 'none'

        audiMain.style.display = 'none'
        audiMain2.style.display = 'none'
        audiMain3.style.display = 'none'

       bmwMain.style.display = 'block'
       bmwMain2.style.display = 'block'
       bmwMain3.style.display = 'block'
   }
}

var libera = document.getElementById('liberar')
var login = document.querySelector('.login')
var close = document.getElementById('close')
function Libera(){
    if(libera = login.style.display = 'block'){
        bars.style.display = 'none'
    }
}

function  Fechar(){
    if(close = login.style.display = 'none'){
        login.style.transform = `translateX(${100}px)`
        bars.style.display = 'block'
    }
}
close.addEventListener('click',Fechar)

var items = document.querySelector('.items-container')
var bars = document.querySelector('.burger-container')


function menuShow(){
    if(items.style.display == 'block'){
        items.style.display = 'none'
        bars.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }else{

        bars.innerHTML = '<i class="fa-solid fa-angle-up"></i>'
        items.style.display = 'block'
    }
}

bars.addEventListener('click',menuShow)