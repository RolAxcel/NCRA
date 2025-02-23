document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById('payment');
    inputField.addEventListener('input', calculateTax); 
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

    console.log("User Input:", inputValue); 

    if (inputValue === 2_000_000) {
        console.log("Condition met: Updating tax values...");

        // Update tax computation values
        taxCom1.textContent = "4,000,000";
        taxCom2.textContent = "2,000,000";
        taxCom3.textContent = "2,000,000";

        // Update tax formula values
        taxFor1.textContent = "₱20,872.60";
        taxFor2.textContent = "₱7,500.00";
        taxFor3.textContent = "₱28,372.60";
        taxFor4.textContent = "x 70%";
        taxFor5.textContent = "₱19,860.82";
        taxFor6.textContent = "1,500.00";
        equals.textContent = "21,360.82";
    } else {
        console.log("Condition not met: Resetting tax values...");

        // Reset to default values if input is not 2,000,000
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