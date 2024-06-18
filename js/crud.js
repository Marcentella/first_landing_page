// crud.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('propertyForm');
    const propertyTable = document.getElementById('propertyTable').getElementsByTagName('tbody')[0];
    let properties = [];
    let currentEditIndex = null;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addOrUpdateProperty();
    });

    function addOrUpdateProperty() {
        const property = {
            propertyName: document.getElementById('propertyName').value,
            propertyType: document.getElementById('propertyType').value,
            city: document.getElementById('city').value,
            commune: document.getElementById('commune').value,
            address: document.getElementById('address').value,
            ownerName: document.getElementById('ownerName').value,
            ownerEmail: document.getElementById('ownerEmail').value,
            ownerPhone: document.getElementById('ownerPhone').value
        };

        if (currentEditIndex !== null) {
            properties[currentEditIndex] = property;
            currentEditIndex = null;
        } else {
            properties.push(property);
        }

        renderTable();
        clearForm();
    }

    function renderTable() {
        propertyTable.innerHTML = '';

        properties.forEach((property, index) => {
            const row = propertyTable.insertRow();

            row.insertCell().textContent = property.propertyName;
            row.insertCell().textContent = property.propertyType;
            row.insertCell().textContent = property.city;
            row.insertCell().textContent = property.commune;
            row.insertCell().textContent = property.address;
            row.insertCell().textContent = property.ownerName;
            row.insertCell().textContent = property.ownerEmail;
            row.insertCell().textContent = property.ownerPhone;

            const actionsCell = row.insertCell();
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.className = 'btn btn-warning btn-sm';
            editButton.onclick = () => editProperty(index);
            actionsCell.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.className = 'btn btn-danger btn-sm ml-2';
            deleteButton.onclick = () => deleteProperty(index);
            actionsCell.appendChild(deleteButton);
        });
    }

    function editProperty(index) {
        const property = properties[index];
        document.getElementById('propertyName').value = property.propertyName;
        document.getElementById('propertyType').value = property.propertyType;
        document.getElementById('city').value = property.city;
        document.getElementById('commune').value = property.commune;
        document.getElementById('address').value = property.address;
        document.getElementById('ownerName').value = property.ownerName;
        document.getElementById('ownerEmail').value = property.ownerEmail;
        document.getElementById('ownerPhone').value = property.ownerPhone;

        currentEditIndex = index;
    }

    function deleteProperty(index) {
        properties.splice(index, 1);
        renderTable();
    }

    function clearForm() {
        form.reset();
        currentEditIndex = null;
    }
});



