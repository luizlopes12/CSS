const mobileNavBar = () =>{
    let mobileMenu = document.querySelector('.mobile-menu')
    let navList = document.querySelector('.nav-list')
    let navLinks = document.querySelectorAll('.nav-link')
    navList.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    navLinks.forEach((link, index) =>{
        link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade .5s ease forwards .${index}s`)
    })
}