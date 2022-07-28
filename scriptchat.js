let vez = 1
function addMensage(){
    let mensagem = document.querySelector("textarea").value
    document.querySelector("textarea").value = ''
    let divmsg = document.createElement("div")
    divmsg.className = "divmensagem" 
    divmsg.innerHTML = mensagem + `<button class='excluir' id='msg${vez}'>excluir</button><button class='editar'>editar</button>`
    document.body.querySelector(".mensagens").appendChild(divmsg)
    vez ++
}

