let vez = 1
function addMensage(){
    // pegando a mensagem digitada pelo usuario e removendo da textarea
    let mensagem = document.querySelector("textarea").value
    document.querySelector("textarea").value = ''
    // criaçao de um elmento div que serve como mensagem e passando a mensagem digitada pelo usuario
    let divmsg = document.createElement("div")
    divmsg.className = "divmensagem"
    divmsg.innerText = mensagem
    // criaçao de um elemento button e formataçao dele para a funçao excluir
    let exc = document.createElement("button")
    exc.innerText = "excluir"
    exc.className = "excluir"
    exc.addEventListener("click", function(){
        let excluted = this.parentElement
        excluted.remove()
    })  
    divmsg.appendChild(exc)
    

    // adicionando a mensagem no historico
    document.body.querySelector(".mensagens").appendChild(divmsg)
}

