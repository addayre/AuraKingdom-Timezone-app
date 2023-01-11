button.addEventListener('click', () => {
const dayWeek = document.getElementById("day").value;
let hours = document.getElementById("hour").value;
let hour = parseFloat(hours);

if (dayWeek === 'Segunda' && hours === '20:00') {

    hour -= 20
    hour += 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Terça-feira
    Horário: ${hour}:00am - Meia-noite
    `)

} else if (dayWeek === 'Segunda' && hours >= '21:00') {

    hour -= 20
    alert(`
    ----[Aura Kingdom]----
    Dia: Terça-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Segunda' && hours === '00:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Terça-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Segunda' && hours > '00:00' && hours < '08:00') {  

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Segunda-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Segunda' && hours === '08:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Terça-feira
    Horário: ${hour}:00pm - Meio-dia
    `)

} else if (dayWeek === 'Segunda' && hours > '08:00' && hours < '20:00') {

    hour += 4
    hour -= 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Segunda-feira
    Horário: ${hour}:00pm
    `)
    
} else if (dayWeek === 'Terça' && hours === '20:00') {

    hour -= 20
    hour += 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Quarta-feira
    Horário: ${hour}:00am - Meia-noite
    `)

} else if (dayWeek === 'Terça' && hours >= '21:00') {

    hour -= 20
    alert(`
    ----[Aura Kingdom]----
    Dia: Quarta-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Terça' && hours === '00:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Quarta-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Terça' && hours > '00:00' && hours < '08:00') {  

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Terça-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Terça' && hours === '08:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Terça-feira
    Horário: ${hour}:00pm - Meio-dia
    `)

} else if (dayWeek === 'Terça' && hours > '08:00' && hours < '20:00') {

    hour += 4
    hour -= 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Terça-feira
    Horário: ${hour}:00pm
    `)
    
} else if (dayWeek === 'Quarta' && hours === '20:00') {

    hour -= 20
    hour += 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Quinta-feira
    Horário: ${hour}:00am - Meia-noite
    `)

} else if (dayWeek === 'Quarta' && hours >= '21:00') {

    hour -= 20
    alert(`
    ----[Aura Kingdom]----
    Dia: Quinta-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Quarta' && hours === '00:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Quinta-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Quarta' && hours > '00:00' && hours < '08:00') {  

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Quarta-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Quarta' && hours === '08:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Quarta-feira
    Horário: ${hour}:00pm - Meio-dia
    `)

} else if (dayWeek === 'Quarta' && hours > '08:00' && hours < '20:00') {

    hour += 4
    hour -= 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Quarta-feira
    Horário: ${hour}:00pm
    `)
    
} else if (dayWeek === 'Quinta' && hours === '20:00') {

    hour -= 20
    hour += 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Sexta-feira
    Horário: ${hour}:00am - Meia-noite
    `)

} else if (dayWeek === 'Quinta' && hours >= '21:00') {

    hour -= 20
    alert(`
    ----[Aura Kingdom]----
    Dia: Sexta-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Quinta' && hours === '00:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Sexta-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Quinta' && hours > '00:00' && hours < '08:00') {  

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Quinta-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Quinta' && hours === '08:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Quinta-feira
    Horário: ${hour}:00pm - Meio-dia
    `)

} else if (dayWeek === 'Quinta' && hours > '08:00' && hours < '20:00') {

    hour += 4
    hour -= 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Quinta-feira
    Horário: ${hour}:00pm
    `)
    
} else if (dayWeek === 'Sexta' && hours === '20:00') {

    hour -= 20
    hour += 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Sábado
    Horário: ${hour}:00am - Meia-noite
    `)

} else if (dayWeek === 'Sexta' && hours >= '21:00') {

    hour -= 20
    alert(`
    ----[Aura Kingdom]----
    Dia: Sábado
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Sexta' && hours === '00:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Sábado
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Sexta' && hours > '00:00' && hours < '08:00') {  

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Sexta-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Sexta' && hours === '08:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Sexta-feira
    Horário: ${hour}:00pm - Meio-dia
    `)

} else if (dayWeek === 'Sexta' && hours > '08:00' && hours < '20:00') {

    hour += 4
    hour -= 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Sexta-feira
    Horário: ${hour}:00pm
    `)
    
} else if (dayWeek === 'Sábado' && hours === '20:00') {

    hour -= 20
    hour += 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Domingo
    Horário: ${hour}:00am - Meia-noite
    `)

} else if (dayWeek === 'Sábado' && hours >= '21:00') {

    hour -= 20
    alert(`
    ----[Aura Kingdom]----
    Dia: Domingo
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Sábado' && hours === '00:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Domingo
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Sábado' && hours > '00:00' && hours < '08:00') {  

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Sábado
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Sábado' && hours === '08:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Sábado
    Horário: ${hour}:00pm - Meio-dia
    `)

} else if (dayWeek === 'Sábado' && hours > '08:00' && hours < '20:00') {

    hour += 4
    hour -= 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Sábado
    Horário: ${hour}:00pm
    `)
    
} else if (dayWeek === 'Domingo' && hours === '20:00') {

    hour -= 20
    hour += 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Segunda-feira
    Horário: ${hour}:00am - Meia-noite
    `)

} else if (dayWeek === 'Domingo' && hours >= '21:00') {

    hour -= 20
    alert(`
    ----[Aura Kingdom]----
    Dia: Segunda-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Domingo' && hours === '00:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Segunda-feira
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Domingo' && hours > '00:00' && hours < '08:00') {  

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Domingo
    Horário: ${hour}:00am
    `)

} else if (dayWeek === 'Domingo' && hours === '08:00') {

    hour += 4
    alert(`
    ----[Aura Kingdom]----
    Dia: Domingo
    Horário: ${hour}:00pm - Meio-dia
    `)

} else if (dayWeek === 'Domingo' && hours > '08:00' && hours < '20:00') {

    hour += 4
    hour -= 12
    alert(`
    ----[Aura Kingdom]----
    Dia: Domingo
    Horário: ${hour}:00pm
    `)
}
})



