function saudacao(nome) {
    console.log(`Boa noite, ${nome}!!!`)//Somente essa linha retornará undefined
    return `Boa noite, ${nome}!!!`;
}

const variavel = saudacao('pessoas');
console.log(variavel);

saudacao('alunos');
saudacao('colaboradores')

function soma(x, y){
    const resultado = x * y;
    const mensagem = `O resultado da soma é: ${resultado}`;
    return mensagem//FIM
}

console.log(soma(15, 2));

function soma(x = 1, y= 1){
    const resultado = x * y;
    const mensagem = `O resultado da soma é: ${resultado}`;
    return mensagem//FIM
}
const resultado= soma(4, 2)
console.log(resultado);

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));

const raizQ = n => n ** 0.5;
    
console.log(raizQ(9));    
console.log(raizQ(16));//Isso é uma função simplificada.