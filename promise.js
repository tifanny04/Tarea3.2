function fakeServerRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simula éxito o error aleatoriamente
            if (success) {
                resolve({ data: "Datos simulados del servidor" });
            } else {
                reject("Error al obtener datos del servidor");
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Manejo de la promesa
fakeServerRequest()
    .then(response => {
        console.log("Respuesta exitosa:", response);
    })
    .catch(error => {
        console.error("Ocurrió un error:", error);
    })
    .finally(() => {
        console.log("Solicitud completada (éxito o error)");
    });
