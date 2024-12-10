/*
Operadores lógicos
&& -> and -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> or -> ou -> Somente uma expressão precisa ser verdadeira para retornar true
! -> NOT -> não -> Representa negação. Ex.: se o resultado de console.log retornar(!true), vai retornar como FALSE
*/

const expressaoAnd = true && true && true && false;/*exemplo &&*/
const expressaoOr = true || false;/*exemplo ||*/
console.log(expressaoOr||expressaoAnd); 
console.log(!true);/*exemplo de ! */


