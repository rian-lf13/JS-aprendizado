const nome = prompt('Digite seu nome completo:');

document.body.innerHTML+=(`Seu nome é <stron>${nome}<strong/><br />`);
document.body.innerHTML+=(`Seu nome tem ${nome.length} letras<br />`);
document.body.innerHTML+=(`A segunda letra do seu nome é <strong>${nome.charAt(1)}<strong/><br />`);
document.body.innerHTML+=(`O primeiro índice do seu nome com a letra "a", é: ${nome.indexOf('a')}<br />`);
document.body.innerHTML+=(`O último índice do seu nome com a letra "a", é: ${nome.lastIndexOf('a')}<br />`);
document.body.innerHTML+=(`As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`);
document.body.innerHTML+=(`Seu nome e sobrenomes são: ${nome.split(' ')}<br />`);
//É necessário fixar como usar split.
document.body.innerHTML+=(`Seu nome completo em letras maiúsculas: <strong>${nome.toUpperCase()}<strong/><br />`);
document.body.innerHTML+=(`Seu nome completo em letras minúsculas: <strong>${nome.toLowerCase()}<strong/><br />`);
document.body.innerHTML+=(`Essas são as letras entre os índices 3 e 9: ${nome.slice(3, 9)}`)







// document.write('Serve para exibir o texto escrito aqui.'), mas é pouco utilizado.
