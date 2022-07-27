// let primeiros = [1,2,3,];

// let numeros = [...primeiros,4,5,10];

// console.log(numeros);


// ===============

// let pessoa = {
//     nome: 'Ygor',
//     idade: 20,
//     cargo: 'Developer'
// }

// let novaPessoa = {
//     ...pessoa,
//     status:'Ativo',
//     cidade: 'Uberlandia',
//     telefone: 996732472
// }
// console.log(novaPessoa);


// Spred Operator 


// function novoUsuario(info){

//     let dados = {
//         ...info,
//         status:'ativo',
//         inicio: '09/07/2022',
//         codigo: '1212'
//     };
//     console.log(dados);
// }

// novoUsuario({
//     nome: 'Ygor',
//     idade: 20 ,
//     cargo: 'Developer'
// })


// Rest Operator

// function convidados(...nomes){
//     console.log('Seja bem vindo')
//     console.log(nomes);
// }

// convidados('Ygor','Matheus','Yuri')

// Sorteador selecionando numero aleatorio

// function sorteador(...numeros){
//     console.log(numeros);

//     const numerGerado= Math.floor( Math.random() * numeros.length);
//     console.log('O Número gerado foi:',numeros[numerGerado]);
// }

// sorteador(1,2,3,4,5,12,34,5,43,345,53,423,425,435,52,3425,42,34,656,477,64,65423,21)


// MAP = PERCORRER TODO UM ARRAY

// let lista = [
//     1,2,3,4,5,12,34,5,43,345,53,423,425,435,52,3425,42,34,656,477,64,65423,21,
// ]

// lista.map((item, index) => {
//     console.log(`Passando ${item} - - Posção ${index}`)
// })



// REDUCE = O REDUCE BUSCA REDUZIR UM ARRAY 

// let numeros = [10,1,10,2,10,3,10,4,10,5];

// let total = numeros.reduce((acumulador, numero, indice, original)=>{

//     console.log(`${acumulador} - total ate o momento`);
//     console.log(`${numero} - valor atual`);
//     // console.log(`${indice} - indice atual`);
//     // console.log(`${original} - array original`);
//     console.log('=====================');

//     return acumulador += numero;
// })

// console.log("Total do Reduce:",total);


// FIND 
// o primeiro item que encontra ele retorna 

// let listagem = [10,1,10,2,10,3,10,4,10,5, 'jose', 'ygor', 'douga'];

// let busca = listagem.find((item)=>{
//     //condição
//     if(item ==='ygor'){
//         return console.log('item encontrado com sucesso');
//     }
// })

// console.log(busca);



// FILTER

//DEVOLVE TUDO QUE ENCONTRAR COM BASE NA COMPARAÇÃO // SE FOR IGUAL 

// let palavras = ['jose', 'ygor', 'douga', 'Matheus','Yuri','jose', 'ygor', 'douga', 'Matheus'];

// let filtrar = palavras.filter((item)=>{
//     return item === 'ygor';
   
// })

// console.log(filtrar);



// FUNÇÕES ANONIMAS // ARROW FUNCTION

/*
    ()=>{}

    1- OS PARENTESES, QUE É POR ONDE A FUNÇÃO RECEBE OS ARGUMENTOS (ASSIM COMO NAS FUNÇOES TRADICIONAIS)
    2-'SETA' OU 'ARROW' => - RESPONSAVEL PELO NOME ARROW
    3- E AS CHAVES: O VLOCO DE CODIO QUE REPRESENTA O CORPO DA FUÇÃO
 */

// function somar(a,b){
//     let total = a + b;
//     return console.log(total);
// }

// // somar(10,30);

// let subtrair = (valor1, valor2) =>{
//     let total = valor1 - valor2;
//     console.log(total)
// }

// subtrair(150,90);

// let numeros = [1,2,3,4,5,12,34,5,43,345,53,423,425,435,52,3425,42,34,656,477,64,65423,21,];

// numeros.map((item)=>{
//     console.log(item);
// })


// casesensitive -- 

// INCLUDES 

// let nomes = [ 'jose', 'ygor', 'douga', 'Matheus','Yuri'];



// if(nomes.includes("ygor")){
//     console.log("Esta na lista")
// }
// else{
//     console.log('Nao esta na lista')
// }


// STARTSWITH
// let nome = 'Ygor';

// console.log(nome.startsWith("Y"))


// ENDSWITH

// let nome = 'Ygor';

// console.log(nome.endsWith("or"))


// COMO CONSUMIR UMA API E UTILIZAR NO HTML