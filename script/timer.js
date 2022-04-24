const timerHours = document.querySelector('.timer__hours')
const timerMinutes = document.querySelector('.timer__minutes')
const timerSeconds = document.querySelector('.timer__seconds')
const timerDays = document.querySelector('.timer__days')

let interval

const daysArr = ['день', 'дня', 'дней']
const hoursArr = ['час', 'часа', 'часов']
const minutesArr = ['минута', 'минуты', 'минут']
const secondsArr = ['секунда', 'секунды', 'секунд']

const numWord = (value, words) => {
   value = Math.abs(value) % 100

   const lastNum = value % 10

   if (value > 10 && value < 20) return words[2]
   if (lastNum > 1 && lastNum < 5) return words[1]
   if (lastNum === 1) return words[0]
   return words[2]
}

const updateTimer = () => {
   const date = new Date()
   const dateDeadline = new Date('27 june 2022').getTime()
   const timeRemain = (dateDeadline - date) / 1000

   const days = Math.floor(timeRemain / 60 / 60 / 24)
   const hours = Math.floor((timeRemain / 60 / 60) % 24)
   const minutes = Math.floor((timeRemain / 60) % 60)
   const seconds = Math.floor(timeRemain % 60)

   const formatHours = hours < 10 ? '0' + hours : hours
   const formatMinutes = minutes < 10 ? '0' + minutes : minutes
   const formatSeconds = seconds < 10 ? '0' + seconds : seconds

   timerHours.textContent = formatHours
   timerMinutes.textContent = formatMinutes
   timerSeconds.textContent = formatSeconds
   timerDays.textContent = days

   timerDays.nextElementSibling.textContent = numWord(days, daysArr)
   timerHours.nextElementSibling.textContent = numWord(hours, hoursArr)
   timerMinutes.nextElementSibling.textContent = numWord(minutes, minutesArr)
   timerSeconds.nextElementSibling.textContent = numWord(seconds, secondsArr)

   if (timeRemain <= 0) {
      clearInterval(interval)
      timerDays.textContent = '0'
      timerHours.textContent = '0'
      timerMinutes.textContent = '0'
      timerSeconds.textContent = '0'

      timerDays.style.color = 'tomato'
      timerHours.style.color = 'tomato'
      timerMinutes.style.color = 'tomato'
      timerSeconds.style.color = 'tomato'
   }
}

updateTimer()
interval = setInterval(updateTimer, 500)