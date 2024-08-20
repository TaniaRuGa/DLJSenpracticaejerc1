document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para hacer la validación

    // Expresión regular que permite solo letras (mayúsculas y minúsculas) y espacios
    const regex = /^[A-Za-z\s]+$/;

    // Obtener los valores de los campos
    const nombre = document.getElementById('name').value.trim();
    const asunto = document.getElementById('subject').value.trim();
    const mensaje = document.getElementById('message').value.trim();

    // Banderas para validar si todos los campos son correctos
    let isValid = true;

    // Validar campo de nombre completo
    if (!regex.test(nombre)) {
        document.getElementById('errorName').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorName').style.display = 'none';
    }

    // Validar campo de asunto
    if (!regex.test(asunto)) {
        document.getElementById('errorSubject').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorSubject').style.display = 'none';
    }

    // Validar campo de mensaje
    if (!regex.test(mensaje)) {
        document.getElementById('errorMessage').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorMessage').style.display = 'none';
    }

    // Si todo es válido, mostrar mensaje de éxito
    if (isValid) {
        document.getElementById('formSuccess').style.display = 'block';
    }
});
