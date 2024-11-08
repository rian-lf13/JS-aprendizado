/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint e symbol). 
*/

// let a = 'Eu';
// let b = a; //cópia, nada foi alterado 
// console.log(a, b);

// let a = 'Irineu'
// a = 'Rogerin do Queró'/*Os valores não foram alterados,
// o valor da linha 9 deixou de ser irineu 
// para a linha 10 se tornar Rogerin do Queró  */
// console.log(a)


// /*
// Referência (Mutáveis) - arrays, object , function
// */

// let a = [1,2,3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);// apontam para o mesmo valor na memória.

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(a, b, c);

const pessoa = {
    nome: 'Ruiz',
    sobrenome: 'Diaz'
};
const pessoa1 = {...pessoa};

pessoa.nome = 'Carlos';
console.log(pessoa, pessoa1);