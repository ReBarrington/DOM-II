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

// middle image
// scale the image with your mouse wheel
const funImg = document.querySelector('.img-content img');

function zoom(event) {
    event.preventDefault();
    let scale = 1;
    scale += event.deltaY * -0.01;
    // Apply scale transform on next line:
    funImg.style.transform = `scale(${scale})`;
}

funImg.addEventListener('wheel', zoom);
// not completely preventing default...

// Select
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);

  // dblclick
  const busImg = document.querySelector('.intro img');
  busImg.addEventListener('dblclick', () => {
      busImg.src="https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
  })
