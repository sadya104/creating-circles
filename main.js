const button = document.querySelector('button')
let count = 0;


button.addEventListener('click', function (){
    // first grab the parent container
    const box = document.querySelector('.box')
    // create circle
    const circle = document.createElement('div')
    // add a class to it 
    circle.classList.add('circle')
    // style circle 
    circle.style.borderRadius = '40px'
    circle.style.width = '40px'
    circle.style.height = '40px'
    /// add random color to the background of circle
    circle.style.backgroundColor = generateRandomColor()
    /// add it on to the box 
    box.appendChild(circle)
    /// count the times a circle appears
    count++
})


//function to generate colors
function generateRandomColor(){
     return '#' + Math.floor(Math.random()*16777215).toString(16);
}