


document.getElementById("btn").addEventListener('click', (e)=> {
    e.preventDefault()
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const tel = document.getElementById("tel")
    const servicos = document.getElementById("servicos")
    const mensagem = document.getElementById("mensagem")

    if(nome.value == ""){
        nome.classList.toggle("focusErro")
        nome.focus()
    }
    else if(email.value == ""){
        email.classList.toggle("focusErro")
        email.focus()
    }
    else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
        email.classList.toggle("focusErro")
        email.focus()
    }
    else if(tel.value == ""){
        tel.classList.toggle("focusErro")
        tel.focus()
    }
    else if(servicos.value == ""){
        servicos.classList.toggle("focusErro")
        servicos.focus()
    }
    else if(mensagem.value == ""){
        mensagem.classList.toggle("focusErro")
        mensagem.focus()
    }
    else{        
        nome.value = ""
        email.value = ""
        tel.value = ""
        servicos.value = ""
        mensagem.value = ""
        document.getElementById("msgSuces").innerHTML = "Mensagem enviada com sucesso!"
        setTimeout(()=>{ 
            document.getElementById("msgSuces").innerHTML = ""
        }, 3000);
            
    }
})

