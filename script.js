
function digitarTitulo(elemento) {                             // ativa o titlo


        const arrayTexto = elemento.innerHTML.split(``);           // guarda o título e separa por letras com espaço ``
        elemento.innerHTML = ``;                                  // elemento é igual a "" espaço
        arrayTexto.forEach((letra, i) => {                         // fizemos o loop com forEach e declaramos as variáveis 
            setTimeout(() => {                                    // criamos uma função nativa do js que fica ativando constantemente
                elemento.innerHTML += letra;                   // vai adicionando e não trocando os valores
            }, 125 * i);
        });

}

const titulo = document.querySelector(".digitando");        //chamamos o nosso título 

digitarTitulo(titulo);                             // chamamos a nossa função


// Menu para tela mobile

function menuMobile() {

    const ativaMenu = document.querySelector(`.fa-bars`);
    const navMenu = document.querySelector("header .navegacao-primaria");

    ativaMenu.addEventListener("click", () => {
        ativaMenu.classList.toggle("fa-x");
        navMenu.classList.toggle("ativado");
    });
}

menuMobile();

// Slide show no Resumo das ExperiÊncias e Acedêmico

function resumo() {

    const divExperiencia = document.querySelectorAll('.experiencia_conteudo div');
    const liExperiencia = document.querySelectorAll('.experiencia_conteudo ul li');

    const divEducacao = document.querySelectorAll('.educacao_conteudo div');
    const liEducacao = document.querySelectorAll('.educacao_conteudo ul li');

    divExperiencia[0].classList.add('ativo');
    divEducacao[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    liEducacao[0].classList.add('ativo');

    function slideShow(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });

        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });

        divExperiencia[index].classList.add('ativo')
        liExperiencia[index].classList.add('ativo')
    }

    function slideShow2(index) {
        divEducacao.forEach((div) => {
            div.classList.remove('ativo');
        });

        liEducacao.forEach((botao) => {
            botao.classList.remove('ativo');
        });

        divEducacao[index].classList.add('ativo')
        liEducacao[index].classList.add('ativo')
    }

    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index)
        });
    });

    liEducacao.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index)
        });
    });

} 

resumo();
