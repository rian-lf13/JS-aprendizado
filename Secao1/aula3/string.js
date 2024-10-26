//              0123456789...
let varString= "Meu nome é \"Rian\"";//Uma barra e caractere adiciona um caractere ao texto.

// console.log(varString.charAt(5));
console.log(varString.replace('Meu', 'Seu'));//Replace= muda a palavra que você deseja.

console.log(varString.slice(11,17));//Slice= mostra os caracteres de acordo com o número que deseja.

console.log(varString.charAt(5));//Ìndica o elemento da posição de cada número indicado.

console.log(varString.concat(' ', 'e', ' ', 'o', ' ', 'seu'));//Faz a concatenação de valores, porém, é mais fácil utilizar template.string.

console.log(varString.indexOf('Rian', 5));//Diz onde começa o índice que a palavra está localizada. É importante escrever igual ao texto.

console.log(varString.lastIndexOf('e', 2));// Começa de trás para frente  a localizar a palavra.

console.log(varString.search(/u/g));// Encontra o índice que deseja. Uso da flag (g)
console.log(varString.length);//Mostra o tamanho da string.

console.log(varString.toUpperCase);//Mostra o texto em maiúsculo.

console.log(varString.slice(3, 8));// Serve para fatear o texto.

console.log(varString.split(' ', 1));// Divide o texto.

console.log(varString.toLowerCase);//Texto em letras minúsculas.