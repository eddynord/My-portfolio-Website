// const nav = document.querySelector('.navigation');
// window.addEventListener('scroll', fixnav) 

// function fixnav() {
//    console.log(window.scrollY, nav.offsetHeight);
// }


const nav = document.querySelector('.navigation');
window.addEventListener('scroll', fixnav) 

function fixnav() {
    if(window.scrollY > nav.offsetHeight + 123 ) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')

    }
}


