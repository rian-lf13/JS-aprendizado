//Exercício de fixação

const nomeCompleto='Isabella Santana Melonio';
const idade= 19;
const peso= 54;
const alturaEmM= 1.62;
let imc;
imc = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 2024 - idade;


console.log(`${nomeCompleto} tem ${idade} anos,pesa ${peso} quilos, tem a altura de ${alturaEmM} e seu Ìndice de Massa Corporal é de ${imc}`);

console.log(`${nomeCompleto} nasceu no ano de ${anoNascimento}`)