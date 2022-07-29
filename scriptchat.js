let vez = 1
function addMensage(){
   let mensagem = document.querySelector(".mensagearea").value
   if (mensagem === ''){
        window.alert('digite uma mensagem')
   }else{
        document.querySelector(".mensagearea").value = ''
        // criaçao de elmentos div que servem como caixa da mensagem e passando a mensagem digitada pelo usuario
        let divmain = document.createElement("div")
        divmain.className = "divmain"
        let divmsg = document.createElement("div")
        divmsg.className = "divmensagem"
        divmsg.innerText = mensagem
        // criaçao de um elemento button e implementaçao da funçao excluir
        let exc = document.createElement("button")
        exc.innerText = "Excluir"
        exc.className = "excluir"
        exc.addEventListener("click", function(){
            let excluted = this.parentElement
            excluted.parentElement.remove()
        })  
        divmsg.appendChild(exc)
        // criaçao de um elemento button e implementaçao da funçao editar
        let edit = document.createElement("button")
        edit.innerText = "Editar"
        edit.className = "editar"
        edit.addEventListener("click", function(){
            let edited = this.parentElement
            edited.innerHTML = `<textarea name='' id='msg' cols='35' rows='5' placeholder='digite a mensagem...'>${mensagem}</textarea>
                            <button class='editar' id ='save'>salvar alteraçao</button> <button class='excluir' id ='cancel'>cancelar</button>`
            // funçao para cancelar a ediçao
            let cancel = document.querySelector('#cancel')
            cancel.addEventListener('click', function(){
                edited.innerHTML = ''
                edited.innerText = mensagem
                edited.appendChild(edit)
                edited.appendChild(exc)
            })
            // funçao para salvar alteraçao
            let save = document.querySelector('#save')    
 
            save.addEventListener("click", function(){
                mss = document.querySelector('#msg').value
                if(mss === ''){
                    window.alert('digite uma mensagem')
                }else{
                    edited.innerHTML = ''
                    edited.innerText = mss
                    edited.appendChild(edit)
                    edited.appendChild(exc)
                    mensagem = mss
                }
            })
        })
        divmsg.appendChild(edit)
        // adicionando a mensagem no historico
        divmain.appendChild(divmsg)
        document.body.querySelector(".mensagens").appendChild(divmain)
    }
}