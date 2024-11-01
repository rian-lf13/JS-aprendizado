// Exercício: calculadora de raiz quadrada

let num= 15;
const raizQuadrada= Math.sqrt(num);
const mensagem= `A raiz quadrada de ${num} é ${raizQuadrada}`

console.log(mensagem);

// Exercício arredondamento de número

const numeroDecimal = 44.7;
const numeroArredondado = Math.round(numeroDecimal);
const resul = `O número ${numeroDecimal} arredondado é ${numeroArredondado}.`;

console.log(resul);

// Exercício calculadora de desconto

const precoOriginal = 150;
const descontoPorcentagem = 15;
const valorDesconto =(precoOriginal * descontoPorcentagem) / 100;
const precoFinal = precoOriginal - valorDesconto;
const mensagem2 = `O preço original era R$${precoOriginal}, com um desconto de ${valorDesconto}%, o valor final do produto é ${precoFinal.toFixed(2)}`;

console.log(mensagem2);
