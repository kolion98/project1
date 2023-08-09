let layoutImgs = document.getElementsByClassName('layout');

for(let img of layoutImgs) {
    img.addEventListener('mouseover', function(){

        for(let i = 0; i < layoutImgs.length; i++) {
            layoutImgs[i].style.border='';
        }
        this.style.border = '2px solid red';
        let main_view = document.getElementById('view');
        main_view.setAttribute("src", this.src);
        main_view.setAttribute("alt", this.alt);
    });
}