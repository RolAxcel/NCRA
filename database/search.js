document.addEventListener("DOMContentLoaded", function () {
    const searchSavedDataInput = document.getElementById('searchSavedData');
    const searchDeletedDataInput = document.getElementById('searchDeletedData');
    const savedDataDiv = document.getElementById('savedData');
    const deletedDataDiv = document.getElementById('deletedData');

    // Function to filter saved data based on search
    function filterSavedData() {
        const searchTerm = searchSavedDataInput.value.toLowerCase();
        let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
        const filteredSavedData = savedData.filter(entry => {
            return entry.inputs[0].toLowerCase().includes(searchTerm);
        });
        displaySavedData(filteredSavedData);
    }

    // Function to filter deleted data based on search
    function filterDeletedData() {
        const searchTerm = searchDeletedDataInput.value.toLowerCase();
        let deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];
        const filteredDeletedData = deletedData.filter(entry => {
            return entry.inputs[0].toLowerCase().includes(searchTerm);
        });
        displayDeletedData(filteredDeletedData);
    }

    // Function to display saved data
    function displaySavedData(data) {
        savedDataDiv.innerHTML = data.map((entry, index) => ` 
            <div class="entry shadow">
                <h4>${entry.inputs[0]}</h4>
                <p>Tax Com1: ${entry.taxCom1}</p>
                <p>Tax Com2: ${entry.taxCom2}</p>
                <p>Tax Com3: ${entry.taxCom3}</p>
                <p>Tax For1: ${entry.taxFor1}</p>
                <p>Tax For2: ${entry.taxFor2}</p>
                <p>Tax For3: ${entry.taxFor3}</p>
                <p>Tax For4: ${entry.taxFor4}</p>
                <p>Tax For5: ${entry.taxFor5}</p>
                <p>Tax For6: ${entry.taxFor6}</p>
                <p>Equals: ${entry.equals}</p>
                <p>Amount: ${entry.amnt}</p>
                <p>Business Tax: ${entry.businessTax}</p>
                <p>Regulatory Fees: ${entry.regulatoryFees}</p>
                <p>Assessment: ${entry.assessment}</p>
                <p>Uwu: ${entry.uwu}</p>
                ${entry.inputs.map((input, i) => `<p>Input ${i + 1}: ${input}</p>`).join('')}
                <p>Date Applied: ${entry.dateValue}</p>
                <button class="delete-button" data-index="${index}">Delete</button>
            </div>
        `).join('');
        addDeleteEventListeners(data);
    }

    // Function to display deleted data
    function displayDeletedData(data) {
        deletedDataDiv.innerHTML = data.map((entry, index) => ` 
            <div class="entry shadow">
                <h4>${entry.inputs[0]}</h4>
                <p>Tax Com1: ${entry.taxCom1}</p>
                <p>Tax Com2: ${entry.taxCom2}</p>
                <p>Tax Com3: ${entry.taxCom3}</p>
                <p>Tax For1: ${entry.taxFor1}</p>
                <p>Tax For2: ${entry.taxFor2}</p>
                <p>Tax For3: ${entry.taxFor3}</p>
                <p>Tax For4: ${entry.taxFor4}</p>
                <p>Tax For5: ${entry.taxFor5}</p>
                <p>Tax For6: ${entry.taxFor6}</p>
                <p>Equals: ${entry.equals}</p>
                <p>Amount: ${entry.amnt}</p>
                <p>Business Tax: ${entry.businessTax}</p>
                <p>Regulatory Fees: ${entry.regulatoryFees}</p>
                <p>Assessment: ${entry.assessment}</p>
                <p>Uwu: ${entry.uwu}</p>
                ${entry.inputs.map((input, i) => `<p>Input ${i + 1}: ${input}</p>`).join('')}
                <p>Date Applied: ${entry.dateValue}</p>
                <button class="retrieve-button" data-index="${index}">Retrieve</button>
            </div>
        `).join('');
        addRetrieveEventListeners(data);
    }

    // Function to add delete event listeners
    function addDeleteEventListeners(savedData) {
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', function () {
                const index = button.getAttribute('data-index');
                const entry = savedData.splice(index, 1)[0];
                let deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];
                deletedData.unshift(entry);  // Add deleted entry to the beginning

                localStorage.setItem('savedData', JSON.stringify(savedData));
                localStorage.setItem('deletedData', JSON.stringify(deletedData));

                filterSavedData();  // Re-filter saved data after deletion
            });
        });
    }

    // Function to add retrieve event listeners
    function addRetrieveEventListeners(deletedData) {
        document.querySelectorAll('.retrieve-button').forEach(button => {
            button.addEventListener('click', function () {
                const index = button.getAttribute('data-index');
                const entry = deletedData.splice(index, 1)[0];
                let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
                savedData.unshift(entry);  // Add retrieved entry to the beginning

                localStorage.setItem('savedData', JSON.stringify(savedData));
                localStorage.setItem('deletedData', JSON.stringify(deletedData));

                filterDeletedData();  // Re-filter deleted data after retrieval
            });
        });
    }

    // Listen to search input events
    searchSavedDataInput.addEventListener('input', filterSavedData);
    searchDeletedDataInput.addEventListener('input', filterDeletedData);

    // Initial display of all data
    filterSavedData();
    filterDeletedData();
});