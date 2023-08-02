window.onload=function(){
    let elm = document.getElementsByClassName("main_menu")[0]
    elm.addEventListener('click', function(){
        document.getElementsByTagName('nav')[0].classList.toggle('visible');
    })
}