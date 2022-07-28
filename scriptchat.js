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
     // criaçao de um elemento button e formataçao dele para a funçao editar
    let edit = document.createElement("button")
    edit.innerText = "editar"
    edit.className = "editar"
    edit.addEventListener("click", function(){
        let edited = this.parentElement
        edited.innerHTML = `<textarea name='' id='msg' cols='35' rows='5' placeholder='digite a mensagem...'>${mensagem}</textarea>
                           <button class='editar' id ='save'>salvar alteraçao</button>`
        let save = document.querySelector('#save')
    //    funçao para salvar alteraçao
        save.addEventListener("click", function(){
            mss = document.querySelector('#msg').value
            edited.innerHTML = ''
            edited.innerText = mss
            edited.appendChild(edit)
            edited.appendChild(exc)
            mensagem = mss
        })
    })
    divmsg.appendChild(edit)
    // adicionando a mensagem no historico
    document.body.querySelector(".mensagens").appendChild(divmsg)
}

