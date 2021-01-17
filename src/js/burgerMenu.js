export const burgerMenu = () => {
    const headerMenu = document.querySelector('.header__nav')
    const btnClose = headerMenu.querySelector('.btn-close')
    const toggleMenu = document.querySelector('.btn-hamburger')
    const activeCls = 'active'
    const isOpen = 'isOpen'

    toggleMenu.addEventListener('click', () => {
        headerMenu.classList.add(activeCls)
        toggleMenu.classList.add(isOpen)
    })
    btnClose.addEventListener('click', () => {
        headerMenu.classList.remove(activeCls)
        toggleMenu.classList.remove(isOpen)

    })

    headerMenu.classList.remove(activeCls)
    toggleMenu.classList.remove(isOpen)
}
