light = 1
let rectangle = document.querySelectorAll('.rectangle')

function change_theme() {
    if(light == 1){
        document.body.style.background = 'rgb(32,32,32)'
        document.body.style.color = 'white'
        rectangle.forEach(rectangle => {
            rectangle.style.boxShadow =
                "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px";
        });
        light = 0
    }
    else{
        document.body.style.background = 'white'
        document.body.style.color = 'black'
        rectangle.forEach(rectangle => {
        rectangle.style.boxShadow =
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
        });
        light = 1
    }
}

let change_theme_btn = document.querySelector('.switch-theme')
change_theme_btn.addEventListener('click', change_theme)