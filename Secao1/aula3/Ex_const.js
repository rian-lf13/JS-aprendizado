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

console.log(typeof alturaEmM, alturaEmM)// Typeof = revela qual é o valor de uma variável, se ela é "string", "number", etc...

// Exercício de fixação

let nome = 'Felipe Augusto'
let sobrenome = 'Soares'

let emprego = 'Desenvolvedor WEB'
let empresa = 'Brastemp'
let anoContratacao = 2005

let estadoCivil= 'casado'

let rua = 'Rua Augustino Genaro';
let casaNum = 59;
let cidade = 'Vitória da Conquista'
const estado = 'BA'
const pais= 'Brasil'

console.log(`Meu nome é ${nome} ${sobrenome}. Atualmente sou ${emprego} da ${empresa} desde o ano de ${anoContratacao}.
Sou ${estadoCivil}.
Moro na ${rua}, número ${casaNum} na cidade de ${cidade}/${estado} no ${pais}.`);
