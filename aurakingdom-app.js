button.addEventListener('click', () => {
    const dayWeek = document.getElementById("day").value;
    let hours = document.getElementById("hour").value;
    let hour = parseFloat(hours);
    
    if (dayWeek === 'Segunda' || dayWeek === 'segunda' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Terça-feira
        Horário: ${hour}:00am - Meia-noite
        `)
    
    } else if (dayWeek === 'Segunda' || dayWeek === 'segunda' && hours >= '21:00') {
    
        hour -= 20
        alert(`
        ----[Aura Kingdom]----
        Dia: Terça-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Segunda' || dayWeek === 'segunda' && hours === '00:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Terça-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Segunda' || dayWeek === 'segunda' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Segunda-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Segunda' || dayWeek === 'segunda' && hours === '08:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Terça-feira
        Horário: ${hour}:00pm - Meio-dia
        `)
    
    } else if (dayWeek === 'Segunda' || dayWeek === 'segunda' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Segunda-feira
        Horário: ${hour}:00pm
        `)
        
    } else if (dayWeek === 'Terça' || dayWeek === 'terça' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Quarta-feira
        Horário: ${hour}:00am - Meia-noite
        `)
    
    } else if (dayWeek === 'Terça' || dayWeek === 'terça' && hours >= '21:00') {
    
        hour -= 20
        alert(`
        ----[Aura Kingdom]----
        Dia: Quarta-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Terça' || dayWeek === 'terça' && hours === '00:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Quarta-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Terça' || dayWeek === 'terça' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Terça-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Terça' || dayWeek === 'terça' && hours === '08:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Terça-feira
        Horário: ${hour}:00pm - Meio-dia
        `)
    
    } else if (dayWeek === 'Terça' || dayWeek === 'terça' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Terça-feira
        Horário: ${hour}:00pm
        `)
        
    } else if (dayWeek === 'Quarta' || dayWeek === 'quarta' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Quinta-feira
        Horário: ${hour}:00am - Meia-noite
        `)
    
    } else if (dayWeek === 'Quarta' || dayWeek === 'quarta' && hours >= '21:00') {
    
        hour -= 20
        alert(`
        ----[Aura Kingdom]----
        Dia: Quinta-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Quarta' || dayWeek === 'quarta' && hours === '00:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Quinta-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Quarta' || dayWeek === 'quarta' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Quarta-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Quarta' || dayWeek === 'quarta' && hours === '08:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Quarta-feira
        Horário: ${hour}:00pm - Meio-dia
        `)
    
    } else if (dayWeek === 'Quarta' || dayWeek === 'quarta' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Quarta-feira
        Horário: ${hour}:00pm
        `)
        
    } else if (dayWeek === 'Quinta' || dayWeek === 'quinta' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Sexta-feira
        Horário: ${hour}:00am - Meia-noite
        `)
    
    } else if (dayWeek === 'Quinta' || dayWeek === 'quinta' && hours >= '21:00') {
    
        hour -= 20
        alert(`
        ----[Aura Kingdom]----
        Dia: Sexta-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Quinta' || dayWeek === 'quinta' && hours === '00:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Sexta-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Quinta' || dayWeek === 'quinta' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Quinta-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Quinta' || dayWeek === 'quinta' && hours === '08:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Quinta-feira
        Horário: ${hour}:00pm - Meio-dia
        `)
    
    } else if (dayWeek === 'Quinta' || dayWeek === 'quinta' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Quinta-feira
        Horário: ${hour}:00pm
        `)
        
    } else if (dayWeek === 'Sexta' || dayWeek === 'sexta' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Sábado
        Horário: ${hour}:00am - Meia-noite
        `)
    
    } else if (dayWeek === 'Sexta' || dayWeek === 'sexta' && hours >= '21:00') {
    
        hour -= 20
        alert(`
        ----[Aura Kingdom]----
        Dia: Sábado
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Sexta' || dayWeek === 'sexta' && hours === '00:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Sábado
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Sexta' || dayWeek === 'sexta' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Sexta-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Sexta' || dayWeek === 'sexta' && hours === '08:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Sexta-feira
        Horário: ${hour}:00pm - Meio-dia
        `)
    
    } else if (dayWeek === 'Sexta' || dayWeek === 'sexta' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Sexta-feira
        Horário: ${hour}:00pm
        `)
        
    } else if (dayWeek === 'Sábado' || dayWeek === 'sabado' || dayWeek === 'Sabado' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Domingo
        Horário: ${hour}:00am - Meia-noite
        `)
    
    } else if (dayWeek === 'Sábado' || dayWeek === 'sabado' || dayWeek === 'Sabado' && hours >= '21:00') {
    
        hour -= 20
        alert(`
        ----[Aura Kingdom]----
        Dia: Domingo
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Sábado' || dayWeek === 'sabado' || dayWeek === 'Sabado' && hours === '00:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Domingo
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Sábado' || dayWeek === 'sabado' || dayWeek === 'Sabado' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Sábado
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Sábado' || dayWeek === 'sabado' || dayWeek === 'Sabado' && hours === '08:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Sábado
        Horário: ${hour}:00pm - Meio-dia
        `)
    
    } else if (dayWeek === 'Sábado' || dayWeek === 'sabado' || dayWeek === 'Sabado' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Sábado
        Horário: ${hour}:00pm
        `)
        
    } else if (dayWeek === 'Domingo' || dayWeek === 'domingo' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Segunda-feira
        Horário: ${hour}:00am - Meia-noite
        `)
    
    } else if (dayWeek === 'Domingo' || dayWeek === 'domingo' && hours >= '21:00') {
    
        hour -= 20
        alert(`
        ----[Aura Kingdom]----
        Dia: Segunda-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Domingo' || dayWeek === 'domingo' && hours === '00:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Segunda-feira
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Domingo' || dayWeek === 'domingo' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Domingo
        Horário: ${hour}:00am
        `)
    
    } else if (dayWeek === 'Domingo' || dayWeek === 'domingo' && hours === '08:00') {
    
        hour += 4
        alert(`
        ----[Aura Kingdom]----
        Dia: Domingo
        Horário: ${hour}:00pm - Meio-dia
        `)
    
    } else if (dayWeek === 'Domingo' || dayWeek === 'domingo' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        alert(`
        ----[Aura Kingdom]----
        Dia: Domingo
        Horário: ${hour}:00pm
        `)
    } else {
        alert('Por favor inserir um dia válido!')
    }
})    