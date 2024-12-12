
/* 
- O else if pode ser usado várias vezes
- É preciso avaliar de forma lógica antes de criar essas condições 
- É possivel utilizar o if sozinho, mas desde que seja usado da maneira correta
*/

// const hora = 12.20 ;

// if(hora >= 0 && hora <=4.59 ){
//     console.log('Boa madrugada!');
// } else  if(hora >= 5 && hora <= 11.59){
//      console.log('Bom dia!');
// } else if(hora >= 12 && hora <= 17.59) {
//     console.log('Boa tarde!');
// } else if(hora >= 18 && hora <= 23.59 ){
//     console.log('Boa noite!');
// } else if (hora > 24){
//     console.log('Horário não existente');
// }




/* Pode-se usar condições somente com if e else  */
// const tenhoGrana= true;

// if(tenhoGrana){
//     console.log('Vou sair da casa dos meus pais');
// } else {
//     console.log('Não posso sair da casa dos meus pais');
// }

// const numero = 25;

// if (numero >=0 && numero <= 15){
//     console.log('Esse número está entre 0 e 15.');
// } else if (numero >=16 && numero <= 20){
//     console.log('Esse número está entre 16 e 20');
// } else {
//     console.log('Esse número não está entre nenhum de nossos números.')
// }

const idade= 19;
const nome= 'Isabella';


if(idade == 19 && nome == 'Isabella'){
    console.log('É a minha namorada!!!!!!!!!')
} else if (nome == 'Valentina' && idade == 20 ){
    console.log('Não é a minha namorada')
} else {
    console.log('É um completo desconhecido')
}

