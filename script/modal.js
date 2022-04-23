const modalBtn = document.querySelector('.modal__button')
const modalWindow = document.querySelector('.modal')
const modalInner = document.querySelector('.modal__inner')
const buyBtn = document.querySelector('.course__button')

modalBtn.addEventListener('click', () => {
   modalWindow.style.display = 'flex'
})

buyBtn.addEventListener('click', () => {
   modalWindow.style.display = 'flex'
})

const closeBtn = document.createElement('span')

closeBtn.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
modalInner.style.position = 'relative'
closeBtn.style.position = 'absolute'
closeBtn.style.top = '3rem'
closeBtn.style.right = '3rem'
closeBtn.style.fontSize = '4rem'
closeBtn.style.color = 'black'
closeBtn.style.cursor = 'pointer'

modalInner.appendChild(closeBtn)


modalWindow.addEventListener('click', e => {
   const modalContent = e.target.closest('.modal__inner')

   !modalContent ? modalWindow.style.display = '' : console.log('Тык')
})

closeBtn.addEventListener('click', () => {
   modalWindow.style.display = ''
})