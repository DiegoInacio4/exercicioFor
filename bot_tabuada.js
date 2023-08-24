let number = parseFloat(prompt("Escolha um número: "));
let resultado = "";

for (let indice = 1; indice <= 20; indice++) {
  resultado +=
    " -> " + number + " * " + indice + " = " + number * indice + "\n";
}

alert("Resultado da tabuada de: " + number + "\n\n" + resultado);
