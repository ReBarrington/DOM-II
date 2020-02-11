// Your code goes here

// H1
const h1 = document.querySelector('h1');
// mouse enter
h1.addEventListener('mouseenter', () => {
    h1.style.transform = 'scale(1.5)';
    h1.style.transition = 'transform 0.3s';
})// mouse leave
h1.addEventListener('mouseleave', () => {
    h1.style.transform = 'scale(1)';
})

// Nav Items
// turns orange when clicked once
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.style.color = 'orange';
    })
})
// turns back to black when mouse over
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'black';
    })
})