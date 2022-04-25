const sendForm = () => {

   const form = document.querySelector('.modal')
   const formBtn = document.querySelectorAll('.modal__button')[1]

   formBtn.setAttribute('type', 'submit')
   
   form.onsubmit = e => {
      e.preventDefault()
      
      const text = document.querySelector('input[type=text]')
      const tel = document.querySelector('input[type=tel]')
      const email = document.querySelector('input[type=email]')

      const sendData = {
         name: text.value,
         phone: tel.value,
         email: email.value,
      }

      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(sendData),
         headers: {
         'Content-type': 'application/json; charset=UTF-8',
         },
      })
      .then(response => {
         if (response.ok) {
            return response.json()
         } else {
            alert(`HTTP Error: ${response.status}`)
         }
      })
      .then(data => console.log(data))
      .catch (err => alert(`Server returns error: ${err}`)
      )
      .finally(() => form.reset())
   }

}

sendForm()