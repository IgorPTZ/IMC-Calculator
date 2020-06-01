async function calcularImc() {
    console.log("OK!!");

    let peso = parseFloat( document.getElementById('peso').value.replace(',', '.') );
    let altura = parseFloat( document.getElementById('altura').value.replace(',', '.'));

    validar(peso, altura);

    let imc = peso / (altura * altura);
    console.log('Imc: ' + imc);
    
    let resultado = document.getElementsByTagName('p')[0];

    if(imc >= 16.0 && imc < 17.0) {
        resultado.innerHTML = '<h2>Seu IMC:' + imc.toFixed(2) +'</br>Você possui magreza leve e precisa ganhar peso. Seu estado pode gerar problemas sérios de saude, procure um medico</h2>';
    }
    else if(imc >= 17.0 && imc < 18.5) {
        resultado.innerHTML = '<h2>Seu IMC:' + imc.toFixed(2) +'</br>Você possui magreza leve e precisa ganhar peso. Seu estado pode gerar problemas sérios de saude, procure um medico</h2>';
    }
    else if(imc >= 18.5 && imc < 25.0) {
        resultado.innerHTML = '<h2>Seu IMC:' + imc.toFixed(2) +'</br>Parabéns você está dentro do seu peso ideal</h2>';
    }
    else if(imc >= 25 && imc < 30.0) {
        resultado.innerHTML = '<h2>Seu IMC:' + imc.toFixed(2) +'</br>Você possui sobrepeso e precisa perder peso. Seu estado pode gerar problemas sérios de saude, procure um medico</h2>';
    }
    else if(imc >= 30 && imc < 35.0) {
        resultado.innerHTML = '<h2>Seu IMC:' + imc.toFixed(2) +'</br>Você possui obesidade grau I e precisa perder peso. Seu estado pode gerar problemas sérios de saude, procure um medico</h2>'
    }
    else if(imc >= 35 && imc < 40.0) {
        resultado.innerHTML = '<h2>Seu IMC:' + imc.toFixed(2) +'</br>Você possui obesidade grau II e precisa perder peso. Seu estado pode gerar problemas sérios de saude, procure um medico</h2>';
    }
    else if (imc >= 40.0) {
        resultado.innerHTML = '<h2>Seu IMC:' + imc.toFixed(2) +'</br>Você possui obesidade grau II e precisa perder peso. Seu estado pode gerar problemas sérios de saude, procure um medico</h2>';
    }
}

function validar(peso, altura) {
    console.log(peso);
    console.log(altura);

    if(isNaN(peso) && isNaN(altura)) {
        let resultado = document.getElementsByTagName('p')[0];
        resultado.innerHTML = '<h2>Os valores dos campos peso e altura não são válidos!</h2>';
    }
    else if(isNaN(peso)) {
        let resultado = document.getElementsByTagName('p')[0];
        resultado.innerHTML = '<h2>O valor do campo peso não é válido!</h2>';
    }
    else if(isNaN(altura)) {
        let resultado = document.getElementsByTagName('p')[0];
        resultado.innerHTML = '<h2>O valor do campo altura não é válido!</h2>';
    }
}