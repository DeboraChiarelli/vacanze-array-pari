function evenNumbers(array) {
    // Utilizzo il metodo filter per selezionare solo i numeri pari
    const evenNumbersArray = array.filter(number => number % 2 === 0);

    return evenNumbersArray;
}

const inputArray = [1, 3, 5, 2, 10, 6, 4, 9];
const result = evenNumbers(inputArray);
console.log(result); // Output: [2, 10, 6, 4]

// Creo un elemento paragrafo
const resultParagraph = document.createElement('p');

// Aggiungo l'array come testo al paragrafo
resultParagraph.textContent = `[${result.join(', ')}]`;

// Aggiungo l'elemento paragrafo al corpo del documento
document.body.appendChild(resultParagraph);