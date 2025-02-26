document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById('payment');
    inputField.addEventListener('input', calculateTax); 

    const saveButton = document.getElementById('saveButton');
    const viewDataButton = document.getElementById('viewDataButton');
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const savedDataDiv = document.getElementById('savedData');

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
        const input1Values = document.querySelectorAll('.input1');
        const dateValue = document.querySelector('.input[type="date"]').value;

        // Check if required fields are filled
        const areInputsFilled = Array.from(input1Values).every(input => input.value.trim() !== '');
        const isDateFilled = dateValue.trim() !== '';

        if (!areInputsFilled || !isDateFilled) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Prepare the input values to be displayed
        let input1Text = '';
        input1Values.forEach((input, index) => {
            input1Text += `<p>Input ${index + 1}: ${input.value}</p>`;
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
            inputs: Array.from(input1Values).map(input => input.value),
            dateValue
        };

        // Retrieve the existing data from localStorage
        let savedData = JSON.parse(localStorage.getItem('savedData')) || [];

        // Add the new data to the array
        savedData.push(data);

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
            </div>
        `).join('');

        // Show the modal
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

function calculateTax() {
    const inputValue = Number(document.getElementById('payment').value.trim()); 

    // Select all elements to update by their IDs
    const taxCom1 = document.getElementById('tax-com1');
    const taxCom2 = document.getElementById('tax-com2');
    const taxCom3 = document.getElementById('tax-com3');

    const taxFor1 = document.getElementById('tax-for1');
    const taxFor2 = document.getElementById('tax-for2');
    const taxFor3 = document.getElementById('tax-for3');
    const taxFor4 = document.getElementById('tax-for4');
    const taxFor5 = document.getElementById('tax-for5');
    const taxFor6 = document.getElementById('tax-for6');
    const equals = document.getElementById('equals');
    const amnt = document.getElementById('amnt');
    const businessTax = document.getElementById('businessTax');
    const regulatoryFees = document.getElementById('regulatoryFees');
    const assessment = document.getElementById('assessment');
    const uwu = document.getElementById('uwu');

    console.log("User Input:", inputValue); 

    if (inputValue === 3_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "3,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "₱1,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱7,500.00";
        taxFor3.textContent = "₱28,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱19,860.82";
        taxFor6.textContent = "1,500.00";
        equals.textContent = "21,360.82";
        amnt.textContent = "21,360.82";
        businessTax.textContent = "19,860.82";
        regulatoryFees.textContent = "1,500.00";
        assessment.textContent = "21,360.82";
        uwu.textContent = "1,500.00";
    } else if (inputValue === 4_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "4,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "2,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱15,000.00";
        taxFor3.textContent = "₱35,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱25,110.82";
        taxFor6.textContent = "1,500.00";
        equals.textContent = "26,610.82";
        amnt.textContent = "26,610.82";
        businessTax.textContent = "25,110.82";
        regulatoryFees.textContent = "1,500.00";
        assessment.textContent = "26,610.82";
        uwu.textContent = "1,500.00";
    } else if (inputValue === 5_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "5,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "3,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱22,500.00";
        taxFor3.textContent = "₱43,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱30,360.82";
        taxFor6.textContent = "1,500.00";
        equals.textContent = "31,860.82";
        amnt.textContent = "31,860.82";
        businessTax.textContent = "30,360.82";
        regulatoryFees.textContent = "1,500.00";
        assessment.textContent = "31,860.82";
        uwu.textContent = "1,500.00";
    } else if (inputValue === 6_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "6,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "4,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱30,000.00";
        taxFor3.textContent = "₱50,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱35,610.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "38,110.82";
        amnt.textContent = "38,110.82";
        businessTax.textContent = "35,610.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "38,110.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 7_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "7,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "4,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱37,500.00";
        taxFor3.textContent = "₱58,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱40,860.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "43,360.82";
        amnt.textContent = "43,360.82";
        businessTax.textContent = "40,860.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "43,360.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 8_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "8,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "6,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱45,000.00";
        taxFor3.textContent = "₱65,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱46,110.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "48,610.82";
        amnt.textContent = "48,610.82";
        businessTax.textContent = "46,110.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "48,610.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 9_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "9,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "7,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱62,500.00";
        taxFor3.textContent = "₱73,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱51,360.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "53,860.82";
        amnt.textContent = "53,860.82";
        businessTax.textContent = "51,360.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "53,860.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 10_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "10,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "8,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱60,000.00";
        taxFor3.textContent = "₱80,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱56,610.82";
        taxFor6.textContent = "2,500.00";
        equals.textContent = "59,110.82";
        amnt.textContent = "59,110.82";
        businessTax.textContent = "56,610.82";
        regulatoryFees.textContent = "2,500.00";
        assessment.textContent = "59,110.82";
        uwu.textContent = "2,500.00";
    } else if (inputValue === 11_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "11,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "9,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱67,500.00";
        taxFor3.textContent = "₱88,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱61,860.82";
        taxFor6.textContent = "3,000.00";
        equals.textContent = "64,860.82";
        amnt.textContent = "64,860.82";
        businessTax.textContent = "61,860.82";
        regulatoryFees.textContent = "3,000.00";
        assessment.textContent = "64,860.82";
        uwu.textContent = "3,000.00";
    } else if (inputValue === 12_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "12,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "10,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱75,000.00";
        taxFor3.textContent = "₱95,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱67,110.82";
        taxFor6.textContent = "3,000.00";
        equals.textContent = "70,110.82";
        amnt.textContent = "70,110.82";
        businessTax.textContent = "67,110.82";
        regulatoryFees.textContent = "3,000.00";
        assessment.textContent = "70,110.82";
        uwu.textContent = "3,000.00";
    } else if (inputValue === 14_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "14,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "12,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱90,500.00";
        taxFor3.textContent = "₱110,872.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱77,610.82";
        taxFor6.textContent = "3,000.00";
        equals.textContent = "80,610.82";
        amnt.textContent = "80,610.82";
        businessTax.textContent = "77,610.82";
        regulatoryFees.textContent = "3,000.00";
        assessment.textContent = "80,610.82";
        uwu.textContent = "3,000.00";
    } else if (inputValue === 15_000_000) {
        console.log("Condition met: Updating tax values...");
    
        // Update tax computation values
        taxCom1.textContent = "15,000,000";
        taxCom2.textContent = "-2,000,000";
        taxCom3.textContent = "13,000,000";
    
        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱97,500.00";
        taxFor3.textContent = "₱118,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱82,860.82";
        taxFor6.textContent = "3,000.00";
        equals.textContent = "85,860.82";
        amnt.textContent = "85,860.82";
        businessTax.textContent = "82,860.82";
        regulatoryFees.textContent = "3,000.00";
        assessment.textContent = "85,860.82";
        uwu.textContent = "3,000.00";
    } else {
        console.log("Condition not met: Resetting tax values...");
    
        // Reset to default values if input is not 2,000,000 or 3,000,000
        taxCom1.textContent = "0.00";
        taxCom2.textContent = "0.00";
        taxCom3.textContent = "₱ -0.00";
    
        taxFor1.textContent = "₱ 0.00";
        taxFor2.textContent = "₱ -0.00";
        taxFor3.textContent = "₱ 0.00";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱ 0.00";
        taxFor6.textContent = "0.00";
        equals.textContent = "0.00";
    } 
    
}

