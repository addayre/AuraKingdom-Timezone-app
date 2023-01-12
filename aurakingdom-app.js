//força usuario a escolher o minuto :00 (ZERO)
const timeInput = document.getElementById('hour');
    timeInput.addEventListener('input', (e) => {
        let hour = e.target.value.split(':')[0]
        e.target.value = `${hour}:00`
    })

//ativamento da função ao clikar no botão 'converter'
button.addEventListener('click', () => {
    //recebe o valor do input txt
    let select = document.querySelector('#select').value
    //recebe o valor do input time
    let hours = document.getElementById("hour").value;
    //tranforma o valor string em um número flutuante (decimal)
    let hour = parseFloat(hours);
    
    //condicional para cada dia da semana. Verifica se o dia e a hora corresponde a escolha feita pelo usuário,
    //caso corresponder, calcula o fuso horário [(GMT+1) + 4 horas comparado com o nosso] e é feita a apresentação dos valores na tela.
    if (select === 'Segunda-feira' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        //retorna o resultado para o HTML, desse modo, exibindo para o usuário
        document.querySelector('#return').innerHTML = "Dia: Terça-feira" + "<br>" +  "Horário: " + hour + ":00am — Meia-noite"
    
    } else if (select === 'Segunda-feira' && hours >= '21:00') {
    
        hour -= 20
        document.querySelector('#return').innerHTML = "Dia: Terça-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Segunda-feira' && hours === '00:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Terça-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Segunda-feira' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Segunda-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Segunda-feira' && hours === '08:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Segunda-feira" + "<br>" +  "Horário: " + hour + ":00pm — Meio-dia"
    
    } else if (select === 'Segunda-feira' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        document.querySelector('#return').innerHTML = "Dia: Segunda-feira" + "<br>" +  "Horário: " + hour + ":00pm"
        
    } else if (select === 'Terça-feira' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        document.querySelector('#return').innerHTML = "Dia: Quarta-feira" + "<br>" +  "Horário: " + hour + ":00am — Meia-noite "
    
    } else if (select === 'Terça-feira' && hours >= '21:00') {
    
        hour -= 20
        document.querySelector('#return').innerHTML = "Dia: Quarta-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Terça-feira' && hours === '00:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Quarta-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Terça-feira' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Terça-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Terça-feira' && hours === '08:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Terça-feira" + "<br>" +  "Horário: " + hour + ":00pm — Meio-dia"
    
    } else if (select === 'Terça-feira' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        document.querySelector('#return').innerHTML = "Dia: Terça-feira" + "<br>" +  "Horário: " + hour + ":00pm"
        
    } else if (select === 'Quarta-feira' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        document.querySelector('#return').innerHTML = "Dia: Quinta-feira" + "<br>" +  "Horário: " + hour + ":00am — Meia-noite"
    
    } else if (select === 'Quarta-feira' && hours >= '21:00') {
    
        hour -= 20
        document.querySelector('#return').innerHTML = "Dia: Quinta-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Quarta-feira' && hours === '00:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Quinta-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Quarta-feira' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Quarta-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Quarta-feira' && hours === '08:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Quarta-feira" + "<br>" +  "Horário: " + hour + ":00pm — Meio-dia"
    
    } else if (select === 'Quarta-feira' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        document.querySelector('#return').innerHTML = "Dia: Quarta-feira" + "<br>" +  "Horário: " + hour + ":00pm"
        
    } else if (select === 'Quinta-feira' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        document.querySelector('#return').innerHTML = "Dia: Sexta-feira" + "<br>" +  "Horário: " + hour + ":00am — Meia-noite"
    
    } else if (select === 'Quinta-feira' && hours >= '21:00') {
    
        hour -= 20
        document.querySelector('#return').innerHTML = "Dia: Sexta-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Quinta-feira' && hours === '00:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Sexta-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Quinta-feira' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Quinta-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Quinta-feira' && hours === '08:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Quinta-feira" + "<br>" +  "Horário: " + hour + ":00pm — Meio-dia"
    
    } else if (select === 'Quinta-feira' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        document.querySelector('#return').innerHTML = "Dia: Quinta-feira" + "<br>" +  "Horário: " + hour + ":00pm"
        
    } else if (select === 'Sexta-feira' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        document.querySelector('#return').innerHTML = "Dia: Sábado" + "<br>" +  "Horário: " + hour + ":00am — Meia-noite"
    
    } else if (select === 'Sexta-feira' && hours >= '21:00') {
    
        hour -= 20
        document.querySelector('#return').innerHTML = "Dia: Sábado" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Sexta-feira' && hours === '00:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Sábado" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Sexta-feira' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Sexta-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Sexta-feira' && hours === '08:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Sexta-feira" + "<br>" +  "Horário: " + hour + ":00pm — Meio-dia"
    
    } else if (select === 'Sexta-feira' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        document.querySelector('#return').innerHTML = "Dia: Sexta-feira" + "<br>" +  "Horário: " + hour + ":00pm"
        
    } else if (select === 'Sábado' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        document.querySelector('#return').innerHTML = "Dia: Domingo" + "<br>" +  "Horário: " + hour + ":00am — Meia-noite"
    
    } else if (select === 'Sábado' && hours >= '21:00') {
    
        hour -= 20
        document.querySelector('#return').innerHTML = "Dia: Domingo" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Sábado' && hours === '00:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Domingo" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Sábado' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Sábado" + "<br>" +  "Horário: " + hour + ":00am"

    } else if (select === 'Sábado' && hours === '08:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Sábado" + "<br>" +  "Horário: " + hour + ":00pm — Meio-dia"
    
    } else if (select === 'Sábado' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        document.querySelector('#return').innerHTML = "Dia: Sábado" + "<br>" +  "Horário: " + hour + ":00pm"

    } else if (select === 'Domingo' && hours === '20:00') {
    
        hour -= 20
        hour += 12
        document.querySelector('#return').innerHTML = "Dia: Segunda-feira" + "<br>" +  "Horário: " + hour + ":00am — Meia-noite"
    
    } else if (select === 'Domingo' && hours >= '21:00') {
    
        hour -= 20
        document.querySelector('#return').innerHTML = "Dia: Segunda-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Domingo' && hours === '00:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Segunda-feira" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Domingo' && hours > '00:00' && hours < '08:00') {  
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Domingo" + "<br>" +  "Horário: " + hour + ":00am"
    
    } else if (select === 'Domingo' && hours === '08:00') {
    
        hour += 4
        document.querySelector('#return').innerHTML = "Dia: Domingo" + "<br>" +  "Horário: " + hour + ":00pm — Meio-dia"
    
    } else if (select === 'Domingo' && hours > '08:00' && hours < '20:00') {
    
        hour += 4
        hour -= 12
        document.querySelector('#return').innerHTML = "Dia: Domingo" + "<br>" +  "Horário: " + hour + ":00pm"

    //caso o usuário não escolha nenhum dia, aparecerá esse erro:
    } else if (select === '') {
        document.querySelector('#return').innerHTML = "Por favor escolha uma data!"
    //caso o usuário não escolha um horário, aparecerá esse erro:
    } else {
        document.querySelector('#return').innerHTML = "Por favor escolha um horário!"
    }
})    