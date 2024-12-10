/* Avalição de curto circuito */
/* 
&&->false && true -> false "o valor mesmo"
||-> true || false -> vai retornar "o valor verdadeiro"

FALSY: valores que são considerados como falso 
false(literal)
0
'', "", ``
null / undefined
NaN
*/

// console.log('Luiz' && NaN && 'Maria'); /* Nesse exemplo de AND é retornado o valor em false */

// function falaOi(){
//     return 'Oi';

// }

// let vaiExecutar = undefined;/* retornaria qualquer considerado falso Ex.: 0, undefined etc...  */

// console.log(vaiExecutar && falaOi()); /* Exemplo de curto
// circuito, pois, não houve a necessidade de usar if / else. */

// console.log(0 || false || null ||"Luiz Otávio" || true); /* retornou o valor considerado verdadeiro "Luiz Otávio", mesmo sabendo que existe um outro valor verdadeiro, mas ele só precisa achar um valor que seja considerado TRUE para confirmar e acabar a expressão. */


// let corUsuario = null;/* Se o valor aqui fosse vermelho, seria retonado "vermelho, pois é o primeiro valor TRUE."  */
// let corPadrao = corUsuario || 'preto'; 

// console.log(corPadrao);

const a= 0;
const b= null;
const c= 'false';
const d= false; /* Correto. Esse é o valor real de false */
const e= NaN;

console.log(a||b||c||d||e);
