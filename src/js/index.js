// alert('olá'); exibe um pop-up

// const itemCiclope = document.getElementById('ciclope');
// console.log(itemCiclope);

const personagens = document.querySelectorAll('.personagem');
//console.log(personagens)

//passo 2

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }
        
        
        //passo 3 - verificar se ja existe personagem selecionado, se sim, remover a seleção
        removerSelecaoDoPersonagem();
        
        personagem.classList.add('selecionado');

        //objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        // passo 3 - alterar o nome do personagem
        alterarNomePersonagemSelecionado(personagem);

        //passo 4 - alterar a descrição do personagem
        alterarDescricaoPersonagem(personagem);

    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem'); //ids não tem acentuação
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    //id não precisa de ponto
    //nomePersonagem.innerText = idPersonagem;
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // queryselector sim
    //passo 2- alterar a imagem personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
    //      ^ - concatenar
}

function removerSelecaoDoPersonagem() {
    const personagemselecionado = document.querySelector('.selecionado');
    personagemselecionado.classList.remove('selecionado');
}
// arrow function () => {}
// addEventListener cria um evento que responde ao interagir com o objeto ('mouseenter'
