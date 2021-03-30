const button = document.querySelector('button');
const coin = document.querySelector('.coin');
const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.backdrop');
const currentCoinHeadsImage = document.querySelector('.heads img');
const currentCoinTailsImage = document.querySelector('.tails img');
const [oneEuro, twoEuro] = document.querySelectorAll('.sidebar__navigation__coins');

button.addEventListener('click', () => {
    const flips = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    // coin spin animation
    coin.animate([
        { transform: 'rotateY(0)' },
        { transform: `rotateY(${180 * flips}deg)` }
    ], {
        duration: 1000,
        fill: 'forwards'
    });

    // coin toss animation
    coin.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(0)' }
    ], {
        duration: 1000,
        composite: 'add'
    })
})

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    sidebar.classList.toggle('sidebar--active');
    backdrop.classList.toggle('backdrop--active');
})

backdrop.addEventListener('click', () => {
    closeSidebar();
})

oneEuro.addEventListener('click', () => {
    currentCoinHeadsImage.src = 'images/euro-a-side.png';
    currentCoinTailsImage.src = 'images/euro-b-side.png';
    closeSidebar();
})

twoEuro.addEventListener('click', () => {
    currentCoinHeadsImage.src = 'images/2-euro-a-side.png';
    currentCoinTailsImage.src = 'images/2-euro-b-side.png';
    closeSidebar();
})

const closeSidebar = () => {
    burger.classList.remove('burger--active');
    sidebar.classList.remove('sidebar--active');
    backdrop.classList.remove('backdrop--active');
}