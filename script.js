const restaurantName = "Spooky Bites";
let isOpen = true;

let customerName = "";
let mealPrice = 0;
let quantity = 1;
let total = 0;

const prices = {
  "Spider Pizza": 150,
  "Pumpkin Pasta": 180,
  "Ghost Burger": 120
};
const status = document.getElementById("status");
const result = document.getElementById("result");

function toggleRestaurantStatus() {
  isOpen = !isOpen;
  displayStatus();
}
document.getElementById("restaurantStatusBtn")
.addEventListener("click", toggleRestaurantStatus);

function displayStatus() {
  status.textContent = isOpen
    ? "We are OPEN!" 
    : "We are CLOSED!";
}

function placeOrder() {
  customerName = document.getElementById("customer").value.trim();
  const selectedMeal = document.getElementById("meal").value;
  quantity = Number(document.getElementById("quantity").value);

  if (!customerName) {
    result.textContent = "Please enter your name first!";
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    result.textContent = "Please enter a valid quantity.";
    return;
  }

  if (!isOpen) {
    result.textContent = "Sorry! The restaurant is closed.";
    return;
  }

  if (customerName) {
  const userConfirmed = confirm(
    "Confirm your order of " + quantity + " " + selectedMeal + "(s), worth ₱" + (prices[selectedMeal] * quantity) + "?"
  );

  if (userConfirmed) {
    mealPrice = prices[selectedMeal];
    total = mealPrice * quantity;

    result.textContent =
      "Thank you, " + customerName + "! Your order: " +
      quantity + " " + selectedMeal + "(s). Total: ₱" +
      total + " | Discount: ₱" +
      (total >= 300 ? total * 0.1 : 0) + 
      " | Final Total: ₱" + (total - (total >= 300 ? total * 0.1 : 0)) + 
      ". Recommendation: Add another spooky treat!";
    console.log("User continued");
  } else {
    result.textContent = "Order canceled.";
    console.log("User canceled");
  }
  }
}

function showMenuMessage() {
  alert("Welcome to " + restaurantName + "! Choose your spooky meal.");
}
displayStatus();

document.getElementById("orderBtn")
  .addEventListener("click", placeOrder);

document.querySelector('a[href="#menu"]')
  .addEventListener("click", showMenuMessage);

function showMenuMessage() {
  alert("Welcome to " + restaurantName + "! Choose your spooky meal.");
}

function showGreeting() {
  const customerName = document.getElementById("customer").value.trim();
  if (customerName) {
    alert("Hello, " + customerName + "! Have a spooky evening at " + restaurantName + "!");
  } else {
    alert("Please enter your name first!");
  }
}
document.getElementById("greetingBtn")
  .addEventListener("click", showGreeting);
