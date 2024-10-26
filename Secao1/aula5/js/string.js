const nome = prompt('Digite seu nome completo:');

document.body.innerHTML+=(`Seu nome é ${nome}<br />`);
document.body.innerHTML+=(`Seu nome tem ${nome.length} letras<br />`);
document.body.innerHTML+=(`A segunda letra do seu nome é ${nome.charAt(1)}<br />`);






// document.write('Serve para exibir o texto escrito aqui.'), mas é pouco utilizado.
