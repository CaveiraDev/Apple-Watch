let imagemVisualizacao = document.getElementById('imagem-visualizacao');
let tituloProduto = document.getElementById('titulo-produto');
let nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}
const azulInverso ={
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const meiaNoite = {
   nome:'Meia-noite',
   pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta:'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverso, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm']

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
corSelecionada = 1;


function trocarImagem (){

    const idOpcaoSelecionado = document.querySelector('[name= "opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionado.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada +'.jpeg'
}

function trocarTamanho(){
    const idOpcaoSelecionado = document.querySelector('[name= "opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionado.charAt(0);
    // mudar o texto
    tituloProduto.innerText = 'Pulseira loop esportiva '+ opcoesCores[corSelecionada].nome.toLowerCase() +' para caixa de '+opcoesTamanho[tamanhoSelecionado];
    //mudar o tamanho da imagem
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    }else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocarCor(){
    const idOpcaoSelecionado = document.querySelector('[name= "opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionado.charAt(0);
    //atualizar cor selecionada
    tituloProduto.innerText = 'Pulseira loop esportiva '+ opcoesCores[corSelecionada].nome.toLowerCase()  +' para caixa de '+opcoesTamanho[tamanhoSelecionado];
    //troca titulo da pagina


    //titulo nome da cor 
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;

    //trocar imagens das miniaturas exibidas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta +'/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta +'/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta +'/imagem-2.jpeg';
    //trocar imagens do relogio
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada +'.jpeg'

}