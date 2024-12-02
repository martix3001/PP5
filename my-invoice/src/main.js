var customerList = [];
var nextCustomerId = 1; // Counter unique IDs
var editingIndex = null; // Keeps track of the customer being edited
    
    
function editCustomer(index) {
    // Load customer data into the form for editing
    const customer = customerList[index];
    editingIndex = index; // Store the index of the customer being edited

    document.getElementById('NazwaFirmy').value = customer.NazwaFirmy;
    document.getElementById('NIP').value = customer.NIP;
    document.getElementById('Miasto').value = customer.Miasto;
    document.getElementById('Ulica').value = customer.Ulica;
    document.getElementById('NumerDomu').value = customer.NumerDomu;
    document.getElementById('NumerMieszkania').value = customer.NumerMieszkania || '';
    document.getElementById('KodPocztowy').value = customer.KodPocztowy;
    document.getElementById('Uwagi').value = customer.Uwagi;
    document.getElementById('Branza').value = customer.Branza;
    document.getElementById('Aktywny').checked = customer.Aktywny;

    document.getElementById('formularzKlienta').style.display = "block";
    document.getElementById("customer-list").style.display = 'none';
}

function zapiszDane(event) {
    // Block refresh
    event.preventDefault();

    const formularzKlienta = {
        id: editingIndex !== null ? customerList[editingIndex].id : nextCustomerId++, // Preserve ID if editing
        
        NazwaFirmy: document.getElementById('NazwaFirmy').value,
        NIP: document.getElementById('NIP').value,
        Miasto: document.getElementById('Miasto').value,
        Ulica: document.getElementById('Ulica').value,
        NumerDomu: document.getElementById('NumerDomu').value,
        NumerMieszkania: document.getElementById('NumerMieszkania').value || null,
        KodPocztowy: document.getElementById('KodPocztowy').value,
        Uwagi: document.getElementById('Uwagi').value,
        Branza: document.getElementById('Branza').value,
        Aktywny: document.getElementById('Aktywny').checked
    };

    if (editingIndex !== null) {
        // Update existing customer
        customerList[editingIndex] = formularzKlienta;
        editingIndex = null; // Reset after editing
    } else {
        // Add new customer
        customerList.push(formularzKlienta);
    }

    console.log(customerList);
    resetForm();
    showList();
}

function resetForm() {
        document.getElementById('formularzKlienta').reset(); // czyści pola
        document.querySelectorAll('#formularzKlienta input, #formularzKlienta select, #formularzKlienta textarea').forEach(function (element) {
            element.removeAttribute('disabled'); // odblokowuje
        });
    }

function wstawDane() {
        document.getElementById('NazwaFirmy').value = "CD Project Red";
        document.getElementById('NIP').value = "123123123";
        document.getElementById('Miasto').value = "Valem";
        document.getElementById('Ulica').value = "Długa";
        document.getElementById('NumerDomu').value = "03";
        document.getElementById('NumerMieszkania').value = "9";
        document.getElementById('KodPocztowy').value = "05-501";
        document.getElementById('Uwagi').value = "Wiedźmini";
        document.getElementById('Branza').value = "IT";
        document.getElementById('Aktywny').checked = true;

        document.querySelectorAll('input, select, textarea').forEach(function (element) {
            element.setAttribute('disabled', false);
        });

    }

    function showForm() {
        document.getElementById('formularzKlienta').style.display = "block";
        document.getElementById("customer-list").style.display = 'none';
        resetForm();
    }

    function showList() {
    document.getElementById('formularzKlienta').style.display = "none";
    document.getElementById("customer-list").style.display = 'block';

    let ul = document.getElementById('customer-list-data');
    ul.innerHTML = ''; // Clear the current list

    customerList.forEach((customer, index) => {
        ul.innerHTML += `<li class="list-group-item">
            <strong>${customer.NazwaFirmy}</strong> (ID: ${customer.id}, NIP: ${customer.NIP})<br>
            Miasto: ${customer.Miasto}, Ulica: ${customer.Ulica} ${customer.NumerDomu}${customer.NumerMieszkania ? '/' + customer.NumerMieszkania : ''}<br>
            Kod pocztowy: ${customer.KodPocztowy}<br>
            Uwagi: ${customer.Uwagi}<br>
            Branża: ${customer.Branza}<br>
            Aktywny: ${customer.Aktywny ? 'Tak' : 'Nie'}<br>
            <button class="btn btn-secondary mt-2" onclick="editCustomer(${index})">EDIT</button>
        </li>`;
    });
}