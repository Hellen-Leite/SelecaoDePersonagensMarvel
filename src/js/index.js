const personagens= document.querySelectorAll('.personagem')

personagens.forEach((personagem)=>{
    personagem.addEventListener('mouseenter', ()=>{

        const idPersonagem = personagem.attributes.id.value
        if(idPersonagem==='ultron') return

        removerSelecaoDoPersonagem()

        personagem.classList.add('selecionado')

        trocarImagemSelecionada(personagem)


        trocarNomeDoPersonagemSelecionado(personagem)

    })
})
function trocarNomeDoPersonagemSelecionado(personagem) {
    const nomePersonagem = document.querySelector('.nome-do-personagem')
    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function trocarImagemSelecionada(personagem) {
    const personagemGrande1 = document.getElementById('personagem-jogador-1')
    const idPersonagem = personagem.attributes.id.value

    personagemGrande1.src = `src/imagens/${idPersonagem}.png`
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

