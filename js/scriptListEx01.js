
// let list = ['Computador', 'Telefone', 'Mouse', 'Teclado' ];

// console.log('listando os produtos:', list);

// // quantidade
// console.log('Quantidade:',list.length);
// //

// //tirando mouse
// console.log('Tirando produto Mouse: ', list.filter(p => p !== 'Mouse'));

// //

// list.map((item, index)=>{

//     console.log(`Passando ${item} - - Posção ${index}`)

// })


// const busca = list.find(p => p === 'Computador')
    
//     if (busca) {
//        console.log('Encontrado', busca);
//     } else {
//         console.log('Produto não encontrado');     

//     }

//    list.splice(1,1);
//     console.log('Meus Produtos: ',list);
    



// const listNum = [ 1,3,5,7,0,9];

// console.log('Ordenados:',listNum.sort());

// console.log('removido',listNum.sort());

// console.log('Nova ordem',listNum.reverse());

// listNum.push(8);
// console.log(listNum);


// let hoje = '17/07/2019';
// const [dia, mes, ano] = hoje.split('/');

// console.log('Dia: ' + dia);
// console.log('Mes: ' + mes);
// console.log('Ano: ' + ano);

const array = [
    {nome:'', preco:'26.55', desconto: 0.2},
    {nome:'', preco:'150', desconto: 0.2},
    {nome:'', preco:'200', desconto: 0.2},
    {nome:'', preco:'350.99', desconto: 0.2},
    {nome:'', preco:'199.99', desconto: 0.2},
    {nome:'', preco:'2.22', desconto: 0.2},
    {nome:'', preco:'999.999', desconto: 0.2}

]



function apliarDesconto(produto){
    return produto.preco * (1 - produto.desconto)
}

const result = array.map(apliarDesconto)
console.log(result)