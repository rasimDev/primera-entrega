// Conversor de moneda
// Tasas de conversión
const tasaPesosEuro = 854.51;
const tasaPesosDolar = 798.94;

// Función para realizar la conversión
function convertirMoneda(cantidad, tasa) {
  return cantidad * tasa;
}

// Ciclo para repetir el proceso de conversión
let continuar = true;
while (continuar) {
  // Solicitar al usuario la cantidad y la moneda de origen
  let cantidad = parseFloat(prompt('Ingrese la cantidad a convertir:'));

  let monedaOrigen = prompt(
    'Ingrese la moneda de origen (USD o EUR):'
  ).toUpperCase();

  // Realizar la conversión
  let resultado;
  if (monedaOrigen === 'EUR') {
    resultado = convertirMoneda(cantidad, tasaPesosEuro);
  } else if (monedaOrigen === 'USD') {
    resultado = convertirMoneda(cantidad, tasaPesosDolar);
  } else {
    resultado = 'Moneda de origen no válida.';
  }

  // Mostrar el resultado
  alert(`Resultado de la conversión: ${resultado.toFixed(2)} $`);

  // Preguntar al usuario si desea realizar otra conversión
  let opcion = prompt('¿Desea realizar otra conversión? (S/N):').toUpperCase();
  if (opcion !== 'S') {
    continuar = false;
  }
}

alert('Conversión finalizada.');
