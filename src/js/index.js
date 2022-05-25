/* Objetivo 1 -   Quando passar o mouse por cima do personagem selecionado  temos que trocar a classe selecionado dele.

OBJETIVO 2- QUANDO PASSAR O MOUSE EM CIMA DO PESSONAGME A IMAGEM DO PERSONAGEM GRANDE PRECISA SER TROCADA.
*/

/* Objetivo 1 -   Quando passar o mouse por cima do personagem selecionado  temos que trocar a classe selecionado dele.*/

const personagens= document.querySelectorAll('.personagem')

personagens.forEach((personagem => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
        if(idSelecionado==='ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')


        

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src =`./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;

        
    })
}))