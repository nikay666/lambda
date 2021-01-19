export const form = () => {
    const form =  document.querySelector('form')
    const popup = document.querySelector('.popup')
    const name = popup.querySelector('.popup__name')
    const date = popup.querySelector('.popup__date')
    const select = popup.querySelector('.popup__select')
    popup.classList.remove('show')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = fetFormData(form)
        form.reset()
        showPopup(data, popup, name, date, select)
    })
}

function fetFormData(form){
    const data = Object.fromEntries(new FormData(form).entries())
    console.log(data)
    return data 
}

function  showPopup(data, popup, name, date, select){
    const formatter = formatDate()

    data.name && (name.textContent = `, ${data.name}!`)
    data.date && (date.textContent = ` for ${formatter.format(new Date(data.date))}`)
    data.select && (select.textContent = ` for ${data.select} people` )
        
    popup.classList.add('show')

    setTimeout(() => {
        popup.classList.remove('show')
    }, 6000)
}

function formatDate(){
    return  new Intl.DateTimeFormat("en",{
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
