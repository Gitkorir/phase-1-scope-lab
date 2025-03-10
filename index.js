// Write your solution in this file!
//declare a variable
var customerName = "bob";
// functional scope
function firstName() {
  return window.customerName;
}
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}
// Function to set the bestCustomer
function setBestCustomer() {
  window.bestCustomer = "not bob";
}

// Function to overwrite the bestCustomer
function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}
const leastFavoriteCustomer = "John";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob";
}
