const calcular = document.getElementById('calcular');

function calculoIMC() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && peso !== '' && peso !== '') {
        
        const vImc = (peso / (altura * altura)).toFixed(3);

        let classificação = '';
        
        if(vImc <= 18.5) {
            classificação = 'magreza'
        } else if (vImc > 18.5 && vImc <= 24.9) {
            classificação = 'normalidade'
        } else if (vImc >= 25 && vImc <= 29.9) {
            classificação = 'sobrepeso'
        } else if (vImc >= 30 && vImc <= 39.9) {
            classificação = 'obesidade'
        } else if (vImc >= 40) {
            classificação = 'obesidade grave'
        }

        resultado.textContent = `${nome} seu imc é ${vImc} e você está esta em situação de: ${classificação}`;
    } else {
        resultado.textContent = 'Campos vazios';
    }
}

calcular.addEventListener('click', calculoIMC);