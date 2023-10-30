let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let item = document.getElementById("item");

const move = () => {
  let priceVal = Number(price.value);
  let quantityVal = Number(quantity.value);
  let itemVal = item.value;

  let budgetStuff = JSON.parse(localStorage.getItem("budgetStuff")) || [];

  if (
    itemVal &&
    !isNaN(quantityVal) &&
    quantityVal !== "" &&
    !isNaN(priceVal) &&
    priceVal !== ""
  ) {
    let totalExpense = quantityVal * priceVal;
    budgetStuff.push({ itemVal, quantityVal, priceVal, totalExpense });
    localStorage.setItem("budgetStuff", JSON.stringify(budgetStuff));

    window.location.href = "budget2.html";
    displayExpenses();
    remainingBudget();

    item.value = "";
    quantity.value = "";
    price.value = "";
  } else if (
    itemVal == "" ||
    isNaN(quantityVal) ||
    quantityVal == "" ||
    !isNaN(priceVal) ||
    priceVal == ""
  ) {
    alert("Fill In All The Fields");
  }
};
