const saveButton = document.getElementById('saveButton');
const viewDataButton = document.getElementById('viewDataButton');
const retrieveDeletedButton = document.getElementById('retrieveDeletedButton');
const modal = document.getElementById('myModal');
const retrieveModal = document.getElementById('retrieveModal');
const closeModalButtons = document.getElementsByClassName('close');
const savedDataDiv = document.getElementById('savedData');
const deletedDataDiv = document.getElementById('deletedData');

// Firebase Firestore and Initialization (assume you already have Firebase initialized)
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
const db = getFirestore();  // Use your Firestore instance here

// Save button event listener
saveButton.addEventListener('click', async function () {
    // Collect form values (replace these selectors with the correct ones from your HTML)
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

    const inputFields = document.querySelectorAll('.input1');
    const dateValue = document.querySelector('.input[type="date"]').value;

    // Check if required fields are filled
    const areInputsFilled = Array.from(inputFields).every(input => input.value.trim() !== '');
    const isDateFilled = dateValue.trim() !== '';

    if (!areInputsFilled || !isDateFilled) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Prepare the input values
    let inputFieldsText = '';
    inputFields.forEach((input, index) => {
        const label = ['Trade Name', 'Address', 'General Manager', 'Address'][index];
        inputFieldsText += `<p>${label}: ${input.value}</p>`;
    });

    // Create a data object
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

    // Add data to Firestore
    try {
        const docRef = await addDoc(collection(db, "data"), data);
        console.log("Document added with ID: ", docRef.id);
        alert("Data saved successfully!");
        showModal(modal);  // Show the modal after data is saved
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

// View Data Button (this will open the saved data in a modal)
viewDataButton.addEventListener('click', async function () {
    // Retrieve data from Firestore
    try {
        const querySnapshot = await getDocs(collection(db, "data"));
        savedDataDiv.innerHTML = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return `
                <div class="entry shadow">
                    <h4>${data.inputs[0]}</h4>
                    ${data.inputs.map((input, i) => {
                        const label = ['Trade Name', 'Address', 'General Manager', 'Address'][i];
                        return `<p>${label}: ${input}</p>`;
                    }).join('')}
                    <button class="delete-button" data-id="${doc.id}">Delete</button>
                </div>
            `;
        }).join('');

        // Add delete functionality
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', function () {
                const docId = button.getAttribute('data-id');
                deleteDocument(docId);  // Delete the document from Firestore
            });
        });

        showModal(modal);  // Show the modal with the data
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
});

// Function to delete a document from Firestore
async function deleteDocument(docId) {
    try {
        await deleteDoc(doc(db, "data", docId));
        console.log("Document deleted with ID: ", docId);
        alert("Document deleted successfully!");
        viewDataButton.click();  // Refresh the view data modal
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}

// Function to show modals
function showModal(modalElement) {
    modalElement.style.display = "block";
}

// Close modals when clicking on the close button or outside the modal
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
