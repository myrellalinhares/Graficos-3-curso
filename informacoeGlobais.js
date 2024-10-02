const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

console.log(url);
/*função assincrona, espera até que toda a 
requisição seja executada, ou seja,
todos os dados sejam enviadoss*/
async function visualizarInformacoesGlobais(params) {
    //contante que armazena uma repossta  await=espera ////fetch=faz a requisição
    const res = await fetch(url);
    const dados = await res.json();//espera as reposta erem convertidas em JSON
console.log(dados);//visualizar as informações no console
const paragrafo=document.createElement('p');//criar um elemento de parágrafo

paragrafo.classList.add('graficos-container__texto');//adiciona uma clase do CSS ao parágrafo

/*insere o texto "Você sabia que o mundo tem "+total_pessoas_mundo ...*/
paragrafo.innerHTML=`Você sabia que o mundo tem <span> ${pessoasNomundo}bilhões</span> de pessoas 
e que aproximadamente <span>${pessoasConectadas}bilhões</span> estão conectadas em alguma 
rede social e passam em média <span>${horas}</span> horas conectadas.`
//cria a variável "container", seleciona o ID "graficos-container" na section do HTML                              
const container= document.getElementById('graficos-container');
container.appendChild(paragrafo);//Insere o paragrafo dentro do "container"

}
visualizarInformacoesGlobais();//chama a função