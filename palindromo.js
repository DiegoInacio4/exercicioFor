const word = prompt("Informe uma palava: ");
let invertedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  invertedWord += word[i];
}

if (word === invertedWord) {
  alert(word + " é um palíndromo!");
} else {
  alert(
    word +
      " não é um palíndromo!\n\n" +
      word +
      " é diferente de " +
      invertedWord
  );
}
