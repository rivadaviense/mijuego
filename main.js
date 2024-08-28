document.addEventListener('DOMContentLoaded', () => {
    // Añadir un event listener a cada columna
    document.querySelectorAll('.column').forEach(div => {
        div.addEventListener('click', () => {
            const image1 = div.getAttribute('data-image1');
            const image2 = div.getAttribute('data-image2');
            
            Swal.fire({
                title: 'BOCA VS RIVER',
                html: `
                    <div style="display: flex; justify-content: center; flex-wrap: wrap;">
                        <img src="${image1}" class="alert-image" onclick="selectImage('${div.id}', '${image1}')">
                        <img src="${image2}" class="alert-image" onclick="selectImage('${div.id}', '${image2}')">
                    </div>
                `,
                showConfirmButton: false,
                showCancelButton: false,
                customClass: {
                    popup: 'swal2-popup-custom'
                }
            });
        });
    });
});

// Función para seleccionar la imagen y actualizar el div
function selectImage(divId, imageUrl) {
    // Encuentra el div correspondiente por id y actualiza la imagen
    const div = document.getElementById(divId);
    const img = div.querySelector('img');
    img.src = imageUrl;
    img.classList.add('container-image'); // Añade la clase con el tamaño de 150px por 150px

    // Cierra la alerta
    Swal.close();
}

// Estilo CSS para la alerta personalizada y la imagen dentro del contenedor
const style = document.createElement('style');
style.textContent = `
    .swal2-popup-custom {
        width: 1200px; /* Ajusta el ancho según sea necesario */
        height: 700px;
        text-align: center; /* Centra el texto y los contenidos */
    }
    .swal2-html-container .alert-image {
        width: 500px; /* Ancho de las imágenes dentro de la alerta */
        height: 500px; /* Altura de las imágenes dentro de la alerta */
        object-fit: cover; /* Asegura que la imagen se ajuste correctamente */
        margin: 10px; /* Espaciado alrededor de las imágenes */
        cursor: pointer; /* Cambia el cursor al pasar sobre la imagen */
    }
    .container-image {
        width: 150px; /* Ancho de las imágenes dentro del contenedor */
        height: 150px; /* Altura de las imágenes dentro del contenedor */
        object-fit: cover; /* Ajusta la imagen para que se mantenga bien proporcionada */
    }
`;
document.head.append(style);
