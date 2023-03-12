/* 
    Mudar imagem de fundo ao clicar no botão

    passo 1 - pegar elementos no HTML

    passo 2 - identificar clique no botão

    passo 3 - desmarcar botão selecionado anterios

    passo 4 - marcar o botão selecionado

    passo 5 esconder imagem de fundo do botão anterior

    passo 6 - fazer aparecer a imagem do botão clicado

*/

// passo 1 - pegar elementos no HTML
const botoesCarrossel = document.querySelectorAll('.botao');
const imageList = document.querySelectorAll('.imagem');

// passo 2 - identificar clique no botão
botoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {

        // passo 3 - desmarcar botão selecionado anterios
        desmarcarBotaoSelecionado();

        // passo 4 - marcar o botão selecionado
        botao.classList.add('selecionado');

        // passo 5 esconder imagem de fundo do botão anterior
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem do botão clicado
        imageList[i].classList.add('ativa')
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
