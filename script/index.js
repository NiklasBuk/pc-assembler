const contents = document.querySelectorAll('.program-line__content')

contents.forEach((el, arr) => {
   const title = el.querySelector('.program-line__title')
   const descr = el.querySelector('.program-line__descr')
   
   title.addEventListener('click', () => {
      const activeDescr = document.querySelectorAll('.program-line__descr.active')

      activeDescr.forEach(act => {
         act.classList.remove('active')
         descr.classList.toggle('active')
      })

   })

})
