//           0123456789...
// const nome ='Luiz Henrique'
// const alunosA = ['Otávio', 'Luisa', 'Gabriela', 'Caio', 'Henrique'];/*Nesse momento
// temos um Array*/ 

// //               0          1           2          3           4         ...
const alunosB= ['Rodrigo', 'Isabella', 'Gabriel', 'Fernando', 'Daniela'];

console.log(typeof alunosA);//Será objeto.
console.log(alunosA instanceof Array);//Retorna se é array ou não.

delete alunos[2];// apaga o índice desejado, porem, fica um índice vazio.
console.log(alunosB);

const removido = alunosB.shift();//pop remove o ultimo e shift o primeiro.
console.log(removido);
console.log(alunosB)

alunosA.pop(); // remove o último elemento.
console.log(alunosA);

alunosA.unshift('Raissa');// Adiciona mais um elemnto no ínicio.
console.log(alunosA);

alunosA.push('Kaique'); //Adiciona mais um elemento a variável no fim.
console.log(alunosA);
console.log(alunosA.length);

alunosA[2]= 'Larissa';// Para editar o índice dentro da variável.
alunosA[5]= 'Júlio';//Cria mais um índice
console.log(alunosA);

console.log(alunosB);
console.log(alunosA[4]);//O número entra [] serve para mostrar o que está em cada índice.

Exercício de fixação

const nomeEstra = ['Irineu', 'Jubiscreudo', 'Fotocópia'];
const adicionado= nomeEstra.unshift('Quinaldo')
console.log(nomeEstra);