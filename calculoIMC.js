const buttonCalcular = document.getElementById("calcular");

function imc() {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const Weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  // só vai calcular se tudo estiver preenchido.
  if (name !== "" && height !== "" && Weight !== "") {
    const valorIMC = (Weight / (height * height)).toFixed(1); //calculo

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "Seu peso esta a baixo do ideal.";
    } else if (valorIMC < 25) {
      classificacao = "Seu peso esta ideal. Parabéns!!!";
    } else if (valorIMC < 30) {
      classificacao = "Você esta levemente acima do peso";
    } else if (valorIMC < 35) {
      classificacao = "Você esta com obesidade grau I";
    } else if (valorIMC < 40) {
      classificacao = "Você esta com obesidade grau II";
    } else {
      classificacao = "Você esta com obesidade grau III. Cuidado!!!";
    }

    result.textContent = `${name} ${classificacao} o seu IMC e ${valorIMC}`;
  } else {
    result.textContent = "preencha todos os campos";
  }
}

buttonCalcular.addEventListener("click", imc);
