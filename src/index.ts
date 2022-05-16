
// ++++++++++ usar para consola +++++
let nombreAlumno: string = "Jose"
let notaPractica: number = 8;
let notaProblemas: number = 10;
let notaTeorica: number = 10;
let notaPracticaFinal: number = 0
let notaProblemasFinal: number = 0 
let notaTeoricaFinal: number = 0

console.log(nombreAlumno)
if (notaPractica <= 10) {
  notaPracticaFinal = (10 * notaPractica) / 100;
  console.log("Su nota practica es: ", notaPracticaFinal);
} if (notaProblemas <= 10) {
  notaProblemasFinal = (50 * notaProblemas) / 100;
  console.log("Su nota de problemas es: ", notaProblemasFinal);
} if (notaTeorica <= 10) {
  notaTeoricaFinal = (40 * notaTeorica) / 100;
  console.log("Su nota Teorica es: ", notaTeoricaFinal);
} else {
  console.log("Error");
}

let notaTotal: number =
  notaPracticaFinal + notaProblemasFinal + notaTeoricaFinal;
console.log("Su calificacion final es", notaTotal);
