let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", gurdarNota)
})

function gurdarNota(evento) {
    let nota = evento.target.innerText

   localStorage.setItem("nota", nota)
}