const bimestre1= 4;
const bimestre2 = 5;
const bimestre3 = 2;
const bimestre4 =8;

const soma= bimestre1+ bimestre2+ bimestre3+
bimestre4;
const mediaNotas= soma / 4;

const faltaBi1= 12;
const faltaBi2= 2;
const faltaBi3= 4;
const faltaBi4= 0;

const sub= faltaBi1 + faltaBi2 + faltaBi3 + faltaBi4;
const div= (sub / 192) * 100;
const mediaFalt= 100 - div;

if (mediaFalt <= 74.99){
    console.log('Aluno reprovado por falta.')
} else if (mediaFalt >= 75 && mediaFalt <= 100){
    console.log('Aluno aprovado por não faltar.')
}

if (mediaNotas<=5){
    console.log('Aluno reprovado por nota.')
} else if (mediaNotas >= 5.01 && mediaNotas <= 10){
    console.log('Aluno aprovado por nota exigida')
}

console.log('Você foi reprovado por nota')