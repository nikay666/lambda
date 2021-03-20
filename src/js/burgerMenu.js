export const burgerMenu = () => {
    const headerMenu = document.querySelector('.header__nav')
    const btnClose = headerMenu.querySelector('.btn-close')
    const toggleMenu = document.querySelector('.btn-hamburger')
    const links = headerMenu.querySelectorAll('.nav__link')
    const activeCls = 'active'
    const isOpen = 'isOpen'


    toggleMenu.addEventListener('click', () => {
        headerMenu.classList.add(activeCls)
        toggleMenu.classList.add(isOpen)
    })
    links.forEach(link => {
        link.addEventListener('click', () => {
            removeClass()
        })
    })
    
    btnClose.addEventListener('click', () => {
        removeClass()
    })

    headerMenu.classList.remove(activeCls)
    toggleMenu.classList.remove(isOpen)


    function removeClass(){
        headerMenu.classList.remove(activeCls)
        toggleMenu.classList.remove(isOpen)
    }
}

