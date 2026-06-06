let chicken = document.querySelector('.chicken');

chicken.addEventListener('click', function(){
    anime({
        targets: chicken,
        rotate: '+=360',
        duration: 300,
        easing: 'easeInOutBounce'
    });
});

let rectangles = document.querySelectorAll('.rectangle')

rectangles.forEach(rectangle => {
    rectangle.addEventListener('mouseenter', function() {
        anime({
            targets: rectangle,
            width: '520px',
            height: '200px',
            duration: 500
        })
    })
})

rectangles.forEach(rectangle => {
    rectangle.addEventListener('mouseleave', function() {
        anime({
            targets: rectangle,
            width: '500px',
            height: '190px',
            duration: 500
        })
    })
})

let foods = document.querySelectorAll('.food')

foods.forEach(food => {
    food.addEventListener('mouseenter', function() {
        anime({
            targets: food,
            width: '300px',
            duration: 500
        })
    })
})

foods.forEach(food => {
    food.addEventListener('mouseleave', function() {
        anime({
            targets: food,
            width: '200px',
            duration: 500
        })
    })
})

let video = document.querySelector('.video')

video.addEventListener('mouseenter', function(){
    anime({
        targets: video,
        width: '520px',
        duration: 500
    })
})

video.addEventListener('mouseleave', function(){
    anime({
        targets: video,
        width: '500px',
        duration: 500
    })
})