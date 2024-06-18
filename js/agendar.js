const properties = [
    {
        name: 'Casa Familiar en Las Condes',
        type: 'Casa',
        city: 'Santiago',
        comuna: 'Las Condes',
        address: 'Calle Las Hualtatas 4500',
        rooms: 3,
        bathrooms: 2,
        ownerName: 'Ana Rodríguez',
        ownerEmail: 'ana.rodriguez@example.com',
        ownerPhone: '+56 9 1111 1111',
        img1: '../assets/casas/casa1/casa1img1.jpeg',
        img2: '../assets/casas/casa1/casa1img2.jpeg',
        img3: '../assets/casas/casa1/casa1img3.jpeg'
    },
    {
        name: 'Departamento Moderno en Ñuñoa',
        type: 'Departamento',
        city: 'Santiago',
        comuna: 'Ñuñoa',
        address: 'Av. Irarrázaval 2100',
        rooms: 2,
        bathrooms: 1,
        ownerName: 'Luis Fernández',
        ownerEmail: 'luis.fernandez@example.com',
        ownerPhone: '+56 9 2222 2222',
        img1: '../assets/casas/casa2/casa2img1.jpeg',
        img2: '../assets/casas/casa2/casa2img2.jpeg',
        img3: '../assets/casas/casa2/casa2img3.jpeg'
    },
    {
        name: 'Casa Espaciosa en Providencia',
        type: 'Casa',
        city: 'Santiago',
        comuna: 'Providencia',
        address: 'Calle Los Leones 1350',
        rooms: 3,
        bathrooms: 2,
        ownerName: 'Carmen Soto',
        ownerEmail: 'carmen.soto@example.com',
        ownerPhone: '+56 9 3333 3333',
        img1: './assets/casas/casa3/casa3img1.jpeg',
        img2: './assets/casas/casa3/casa3img2.jpeg',
        img3: './assets/casas/casa3/casa3img3.jpeg'
    },
    {
        name: 'Casa con Jardín en La Florida',
        type: 'Casa',
        city: 'Santiago',
        comuna: 'La Florida',
        address: 'Calle San José de la Estrella 2500',
        rooms: 3,
        bathrooms: 2,
        ownerName: 'Raúl Pérez',
        ownerEmail: 'raul.perez@example.com',
        ownerPhone: '+56 9 4444 4444',
        img2: './assets/casas/casa4/casa4img2.jpeg',
        img1: './assets/casas/casa4/casa4img3.jpeg',
        img3: './assets/casas/casa4/casa4img4.jpeg'
    },
    {
        name: 'Terreno Tranquilo en Macul',
        type: 'Terreno',
        city: 'Santiago',
        comuna: 'Macul',
        address: 'Calle Los Olmos 1800',
        rooms: 2,
        bathrooms: 1,
        ownerName: 'Beatriz Herrera',
        ownerEmail: 'beatriz.herrera@example.com',
        ownerPhone: '+56 9 5555 5555',
        img1: '../assets/terrenos/terreno1/terreno1img1.jpeg',
        img2: '../assets/terrenos/terreno1/terreno1img2.jpeg',
        img3: '../assets/terrenos/terreno1/terreno1img4.jpeg'
    },
    {
        name: 'Casa en Vitacura',
        type: 'Casa',
        city: 'Santiago',
        comuna: 'Vitacura',
        address: 'Av. Vitacura 6400',
        rooms: 3,
        bathrooms: 2,
        ownerName: 'Pedro Álvarez',
        ownerEmail: 'pedro.alvarez@example.com',
        ownerPhone: '+56 9 6666 6666',
        img1: '../assets/casas/casa5/casa5img1.png',
        img2: '../assets/casas/casa5/casa5img2.png',
        img3: '../assets/casas/casa5/casa5img3.png'
    },
    {
        name: 'Casa en Condominio en Peñalolén',
        type: 'Casa',
        city: 'Santiago',
        comuna: 'Peñalolén',
        address: 'Calle Los Presidentes 1300',
        rooms: 4,
        bathrooms: 2,
        ownerName: 'Gloria Muñoz',
        ownerEmail: 'gloria.munoz@example.com',
        ownerPhone: '+56 9 7777 7777',
        img1: '../assets/casas/casa6/casa6img1.png',
        img2: '../assets/casas/casa6/casa6img2.png',
        img3: '../assets/casas/casa6/casa6img3.png'
    },
    {
        name: 'Casa Amplia en Maipú',
        type: 'Casa',
        city: 'Santiago',
        comuna: 'Maipú',
        address: 'Av. Pajaritos 7100',
        rooms: 3,
        bathrooms: 1,
        ownerName: 'Roberto Díaz',
        ownerEmail: 'roberto.diaz@example.com',
        ownerPhone: '+56 9 8888 8888',
        img1: '../assets/casas/casa7/casa7img1.png',
        img2: '../assets/casas/casa7/casa7img2.png',
        img3: '../assets/casas/casa7/casa7img3.png'
    },
    {
        name: 'Casa con Piscina en Lo Barnechea',
        type: 'Casa',
        city: 'Santiago',
        comuna: 'Lo Barnechea',
        address: 'Calle Raúl Labbé 5200',
        rooms: 6,
        bathrooms: 4,
        ownerName: 'Isabel Ramírez',
        ownerEmail: 'isabel.ramirez@example.com',
        ownerPhone: '+56 9 9999 9999',
        img1: '../assets/casas/casa8/casa8img1.png',
        img2: '../assets/casas/casa8/casa8img2.png',
        img3: '../assets/casas/casa8/casa8img3.png'
    },
    {
        name: 'Terreno Familiar en La Florida',
        type: 'Terreno',
        city: 'Santiago',
        comuna: 'La Florida',
        address: 'Calle San Diego 180',
        rooms: 2,
        bathrooms: 1,
        ownerName: 'Jorge González',
        ownerEmail: 'jorge.gonzalez@example.com',
        ownerPhone: '+56 9 1010 1010',
        img1: '../assets/terrenos/terreno2/terreno2img1.jpeg',
        img2: '../assets/terrenos/terreno2/terreno2img2.jpeg',
        img3: '../assets/terrenos/terreno2/terreno2img3.jpeg'
    }
];


function renderProperties(properties) {
    const propertyList = document.getElementById('propertyList');
    propertyList.innerHTML = '';

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'card property-card';
        propertyCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${property.name}</h5>
                <p class="card-text">
                    <strong>Tipo:</strong> ${property.type}<br>
                    <strong>Ciudad:</strong> ${property.city}<br>
                    <strong>Comuna:</strong> ${property.comuna}<br>
                    <strong>Dirección:</strong> ${property.address}<br>
                    <strong>Dormitorios:</strong> ${property.rooms}<br>
                    <strong>Baños:</strong> ${property.bathrooms}<br>
                    <strong>Propietario:</strong> ${property.ownerName}<br>
                    <strong>Email:</strong> ${property.ownerEmail}<br>
                    <strong>Teléfono:</strong> ${property.ownerPhone}
                </p>
                <img src="${property.img1}" alt="Imagen de la propiedad" id="casaimg">
                <img src="${property.img2}" alt="Imagen de la propiedad" id="casaimg">
                <img src="${property.img3}" alt="Imagen de la propiedad" id="casaimg">
                <button class="btn btn-success agenda-button" data-toggle="modal" data-target="#agendaModal">Agendar Visita</button>
            </div>
        `;
        propertyList.appendChild(propertyCard);
    });

    document.querySelectorAll('.agenda-button').forEach(button => {
        button.addEventListener('click', () => {
            openModal();
        });
    });
}

function filterProperties() {
    const tipoPropiedad = document.getElementById('tipoPropiedad').value;
    const comuna = document.getElementById('comuna').value.toLowerCase();

    const filteredProperties = properties.filter(property => {
        return (tipoPropiedad === '' || property.type === tipoPropiedad) &&
        (comuna === '' || property.comuna.toLowerCase().includes(comuna));
    });

    renderProperties(filteredProperties);
}

document.getElementById('filterButton').addEventListener('click', filterProperties);


renderProperties(properties);

function openModal() {
    const modal = new bootstrap.Modal(document.getElementById('agendaModal'));
    modal.show();
}


document.getElementById('agendaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('successMessage').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);


    const modalElement = document.getElementById('agendaModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();

    document.getElementById('agendaForm').reset();
});