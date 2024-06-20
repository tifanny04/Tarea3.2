function fakeServerRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ data: "Datos simulados del servidor" });
            } else {
                reject("Error al obtener datos del servidor");
            }
        }, 2000);
    });
}

async function fetchData() {
    try {
        const response = await fakeServerRequest();
        console.log("Respuesta exitosa:", response);
    } catch (error) {
        console.error("Ocurrió un error:", error);
    } finally {
        console.log("Solicitud completada (éxito o error)");
    }
}

fetchData();
