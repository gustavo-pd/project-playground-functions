// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui

  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  let areatri = 0;
  areatri = (base * height) / 2;
  return areatri;
}


// Desafio 3
function splitSentence(exer3) {
  // seu código aqui

  let frase = exer3;
  let resultado = frase.split(" ");
  return resultado;
}


// Desafio 4
function concatName(exer4) {
  // seu código aqui

  let arrayList = exer4;
  return (arrayList[arrayList.length -1] + ", " + arrayList[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosCorridos = 0;
  pontosCorridos = (wins*3 + ties*1);
  return pontosCorridos;
}

// Desafio 6
function highestCount(exer6) {
  // seu código aqui
  let contador = 0;
  let highValue = exer6[0];
  for(let index = 1; index < exer6.length; index += 1) {
    if (exer6[index] > highValue) {
      highValue = exer6[index];
    }
  }
    for(let index2 = 0; index2 < exer6.length; index2 +=1) {
      if (highValue === exer6[index2])
        contador += 1;
  }
  return contador;
}

// esse foi osso dms

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
