const saveButton = document.getElementById('saveButton');
const viewDataButton = document.getElementById('viewDataButton');
const retrieveDeletedButton = document.getElementById('retrieveDeletedButton');
const modal = document.getElementById('myModal');
const retrieveModal = document.getElementById('retrieveModal');
const closeModalButtons = document.getElementsByClassName('close');
const savedDataDiv = document.getElementById('savedData');
const deletedDataDiv = document.getElementById('deletedData');

let deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];

saveButton.addEventListener('click', function () {
    // Capture the values from the h4 elements
    const taxCom1 = document.getElementById('tax-com1').textContent;
    const taxCom2 = document.getElementById('tax-com2').textContent;
    const taxCom3 = document.getElementById('tax-com3').textContent;

    const taxFor1 = document.getElementById('tax-for1').textContent;
    const taxFor2 = document.getElementById('tax-for2').textContent;
    const taxFor3 = document.getElementById('tax-for3').textContent;
    const taxFor4 = document.getElementById('tax-for4').textContent;
    const taxFor5 = document.getElementById('tax-for5').textContent;
    const taxFor6 = document.getElementById('tax-for6').textContent;
    const equals = document.getElementById('equals').textContent;
    const amnt = document.getElementById('amnt').textContent;
    const businessTax = document.getElementById('businessTax').textContent;
    const regulatoryFees = document.getElementById('regulatoryFees').textContent;
    const assessment = document.getElementById('assessment').textContent;
    const uwu = document.getElementById('uwu').textContent;

    // Capture the values from the input fields
    const inputFields = document.querySelectorAll('.input1');
    const dateValue = document.querySelector('.input[type="date"]').value;

    // Check if required fields are filled
    const areInputsFilled = Array.from(inputFields).every(input => input.value.trim() !== '');
    const isDateFilled = dateValue.trim() !== '';

    if (!areInputsFilled || !isDateFilled) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Prepare the input values to be displayed
    let inputFieldsText = '';
    inputFields.forEach((input, index) => {
        const label = ['Trade Name', 'Address', 'General Manager', 'Address'][index]; // New labels
        inputFieldsText += `<p>${label}: ${input.value}</p>`;
    });

    // Create an object to store the data
    const data = {
        taxCom1,
        taxCom2,
        taxCom3,
        taxFor1,
        taxFor2,
        taxFor3,
        taxFor4,
        taxFor5,
        taxFor6,
        equals,
        amnt,
        businessTax,
        regulatoryFees,
        assessment,
        uwu,
        inputs: Array.from(inputFields).map(input => input.value),
        dateValue
    };

    // Retrieve the existing data from localStorage
    let savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    // Add the new data to the beginning of the array
    savedData.unshift(data);

    // Save the updated data array back to localStorage
    localStorage.setItem('savedData', JSON.stringify(savedData));

    // Show a confirmation message
    alert("Data saved successfully!");
});

viewDataButton.addEventListener('click', function () {
    // Retrieve the existing data from localStorage
    let savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    // Display the values inside the modal as separate divs
    savedDataDiv.innerHTML = savedData.map((entry, index) => ` 
        <div class="entry shadow">
            <h4>${entry.inputs[0]}</h4>
            ${entry.inputs.map((input, i) => {
                const label = ['Trade Name', 'Address', 'General Manager', 'Address'][i]; // Updated labels
                return `<p>${label}: ${input}</p>`;
            }).join('')}
            <p>Data: ${entry.taxCom1}</p>
            <p>Minus: ${entry.taxCom2}</p>
            <p>Equal: ${entry.taxCom3}</p>
            <p>2,000,000 above: ${entry.taxFor1}</p>
            <p>75% of 1% excess 2,000,000: ${entry.taxFor2}</p>
            <p>Total Tax Assessment: ${entry.taxFor3}</p>
            <p>Multiplied by the Tax: ${entry.taxFor4}</p>
            <p>Business Tax Due: ${entry.taxFor5}</p>
            <p>Add Regulatory fee: ${entry.taxFor6}</p>
            <p>Total Tax & regulatory Fee: ${entry.equals}</p>
            <p>Tax Amount: ${entry.amnt}</p>
            <p>Business Tax: ${entry.businessTax}</p>
            <p>Regulatory Fees: ${entry.regulatoryFees}</p>
            <p>Assessment: ${entry.assessment}</p>
            <p>mMayor's Permit Fee: ${entry.uwu}</p>
            <p>Date Applied: ${entry.dateValue}</p>
            <button class="delete-button" data-index="${index}">Delete</button>
        </div>
    `).join(''); 

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', function () {
            const index = button.getAttribute('data-index');
            const entry = savedData.splice(index, 1)[0];
            deletedData.unshift(entry);  // Add deleted entry to the beginning

            localStorage.setItem('savedData', JSON.stringify(savedData));
            localStorage.setItem('deletedData', JSON.stringify(deletedData));

            viewDataButton.click();
        });
    });

    // Show the modal
    modal.style.display = "block";
});

retrieveDeletedButton.addEventListener('click', function () {
    // Retrieve the existing deleted data from localStorage
    deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];

    // Display the deleted data inside the modal as separate divs
    deletedDataDiv.innerHTML = deletedData.map((entry, index) => `
        <div class="entry shadow">
            <h4>${entry.inputs[0]}</h4>
            ${entry.inputs.map((input, i) => {
                const label = ['Trade Name', 'Address', 'General Manager', 'Address'][i]; // Updated labels
                return `<p>${label}: ${input}</p>`;
            }).join('')}
            <p>Data: ${entry.taxCom1}</p>
            <p>Minus: ${entry.taxCom2}</p>
            <p>Equal: ${entry.taxCom3}</p>
            <p>2,000,000 above: ${entry.taxFor1}</p>
            <p>75% of 1% excess 2,000,000: ${entry.taxFor2}</p>
            <p>Total Tax Assessment: ${entry.taxFor3}</p>
            <p>Multiplied by the Tax: ${entry.taxFor4}</p>
            <p>Business Tax Due: ${entry.taxFor5}</p>
            <p>Add Regulatory fee: ${entry.taxFor6}</p>
            <p>Total Tax & regulatory Fee: ${entry.equals}</p>
            <p>Tax Amount: ${entry.amnt}</p>
            <p>Business Tax: ${entry.businessTax}</p>
            <p>Regulatory Fees: ${entry.regulatoryFees}</p>
            <p>Assessment: ${entry.assessment}</p>
            <p>mMayor's Permit Fee: ${entry.uwu}</p>
            <p>Date Applied: ${entry.dateValue}</p>
            <button class="retrieve-button" data-index="${index}">Retrieve</button>
        </div>
    `).join(''); 

    // Add event listeners for retrieve buttons
    document.querySelectorAll('.retrieve-button').forEach(button => {
        button.addEventListener('click', function () {
            const index = button.getAttribute('data-index');
            const entry = deletedData.splice(index, 1)[0];
            let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
            savedData.unshift(entry);  // Add retrieved entry to the beginning

            localStorage.setItem('savedData', JSON.stringify(savedData));
            localStorage.setItem('deletedData', JSON.stringify(deletedData));

            retrieveDeletedButton.click();
        });
    });

    // Show the modal
    retrieveModal.style.display = "block";
});

// Close the modals when the close button is clicked
Array.from(closeModalButtons).forEach(button => {
    button.addEventListener('click', function () {
        modal.style.display = "none";
        retrieveModal.style.display = "none";
    });
});

// Close the modal when clicking outside of it
window.addEventListener('click', function (event) {
    if (event.target === modal || event.target === retrieveModal) {
        modal.style.display = "none";
        retrieveModal.style.display = "none";
    }
});


