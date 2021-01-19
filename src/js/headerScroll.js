export const headerScroll = () => {
    const header = document.querySelector('.header')
    const clsScroll = 'scroll'
    header.classList.remove(clsScroll) 

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 600 ){
            header.classList.add(clsScroll) 
        }
        if(window.pageYOffset < 600 ){
            header.classList.remove(clsScroll) 
        }
    })
}