document.getElementById('calculate').addEventListener('click',()=>{
    // aqui onde é capturado os valores de cada nota
    const grade1=
    parseFloat(document.getElementById('grade1').value);

    const grade2=
    parseFloat(document.getElementById('grade2').value);

    const grade3=
    parseFloat(document.getElementById('grade3').value);

    const grade4=
    parseFloat(document.getElementById('grade4').value);


// aqui onde é verificado se todas as notas foram preenchidas

    if(isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4)){
        alert('Por favor, preencha corretamente todas as suas notas.');
    }

// aqui onde é calculado

    const grades =[grade1, grade2, grade3, grade4];
    const total = grades.reduce((sum, grade)=> sum + grade, 0);
    const average = total / grades.length;

// aqui onde é determinado a situação do aluno

    const resultElement= document.getElementById('result');
    const passingGrade =7;
    const recoveryGrade = 5;

    if(average >= passingGrade){
        resultElement.textContent = `Aprovado com nota média ${average.toFixed(2)}`
        resultElement.className = 'Aprovado'
    } else if (average>= recoveryGrade) {
        resultElement.textContent = `Recuperação com nota média ${average.toFixed(2)}`
        resultElement.className = 'Recuperação'
    } else {
        resultElement.textContent = `Reprovado com nota média ${average.toFixed(2)}`
        resultElement.className = 'Reprovado'
    }
});