const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

console.log(url);
/*função assincrona, espera até que toda a 
requisição seja executada, ou seja,
todos os dados sejam enviadoss*/
async function visualizarInformacoesGlobais(params) {
    //contante que armazena uma repossta  await=espera ////fetch=faz a requisição
    const res = await fetch(url);
    const dados = await res.json();//espera as reposta erem convertidas em JSON
console.log(dados);//visualizar as imforações no console
const paragrafo=document.createElement('p');//criar um parágrafo
paragrafo.classList.add('graficos-container__texto');//adiciona uma clase do css ao parágrafo
/*insere um texto "Você sabia que o mundo tem " +*/
paragrafo.innerHTML =`Você sabia que o mundo tem ${dados.total_pessoas_mundo}`
}
visualizarInformacoesGlobais();//chama a função