// Ciclos en JavaScript

// while
let texto;
let i = 0;

while (i <= 10) {
  texto = "El número es " + i;
  i++;
  console.log(texto);
}

// do...while
let suma = 0;

do {
  // Ejecuta el código al menos una vez
  console.log("El número =: " + suma);
  suma++;
} while (suma <= 5); // Esta condición está hecha para que se ejecute solo una vez

// for
// Repite un bloque de código un número determinado de veces
// for(inicialización; condición; incremento)
for (let contador = 0; contador < 4; contador++) {
  console.log("La cuenta va en: " + contador);
}

// break
for (let cont = 0; cont < 10; cont++) {
  if (cont === 5) {
    break; // Interrumpe el ciclo cuando el contador es 5
  }
  console.log("La cuenta va en: " + cont);
}
