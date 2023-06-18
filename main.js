const form = document.querySelector(".quiz-form")
const correctArr = ["B","B","B","A","A"] 
const result = document.querySelector('.result')
form.addEventListener('submit', e =>{
    e.preventDefault()
    let score = 0
    const userAnswer = [e.target.q1.value,e.target.q2.value,e.target.q3.value,e.target.q4.value,e.target.q5.value]
    userAnswer.forEach((item,index)=> { 
          if(item === correctArr[index]){
            score += 20
          }
    })

    result.classList.remove('d-none')
    scrollTo(0,0)
    let i = 0
    let timer = setInterval(() =>{
    result.querySelector('.score').textContent = `${i}%`
    if(i === score){
        clearInterval(timer)
    }else{
        i++
    }
},20)

}) 
