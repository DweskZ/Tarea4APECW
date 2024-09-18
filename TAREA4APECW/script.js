/**
 * Función que realiza las operaciones matemáticas entre dos números.
 * Los números se ingresan a través de los inputs en la página HTML.
 * Se realizan 5 operaciones en total (suma, resta, multiplicación, división y módulo).
 */
function realizarOperaciones() {
    // Obtener los valores de los inputs y convertirlos a números de punto flotante
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Variable que contendrá el resultado final en formato HTML
    let resultado = '';
    
    // Validación para comprobar que los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        // Si no son números, se muestra un mensaje de error
        resultado = 'Por favor, ingresa ambos números correctamente.';
    } else {
        // Bucle de 5 iteraciones para realizar las diferentes operaciones
        for (let i = 1; i <= 5; i++) {
            switch(i) {
                case 1:
                    // Primera iteración: Suma
                    resultado += `Iteración ${i}: Suma: ${num1} + ${num2} = ${num1 + num2}<br>`;
                    break;
                case 2:
                    // Segunda iteración: Resta
                    resultado += `Iteración ${i}: Resta: ${num1} - ${num2} = ${num1 - num2}<br>`;
                    break;
                case 3:
                    // Tercera iteración: Multiplicación
                    resultado += `Iteración ${i}: Multiplicación: ${num1} * ${num2} = ${num1 * num2}<br>`;
                    break;
                case 4:
                    // Cuarta iteración: División (con manejo de división por cero)
                    if (num2 !== 0) {
                        resultado += `Iteración ${i}: División: ${num1} / ${num2} = ${num1 / num2}<br>`;
                    } else {
                        resultado += `Iteración ${i}: División: No se puede dividir por cero<br>`;
                    }
                    break;
                case 5:
                    // Quinta iteración: Módulo
                    resultado += `Iteración ${i}: Módulo: ${num1} % ${num2} = ${num1 % num2}<br>`;
                    break;
            }
        }
    }

    // Mostrar el resultado dentro del div con id 'resultado'
    document.getElementById('resultado').innerHTML = resultado;
}
