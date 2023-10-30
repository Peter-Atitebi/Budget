let expenseList = document.getElementById("expense-list");
let remainingBudget = document.getElementById("remaining-budget");
let budgetStuff = JSON.parse(localStorage.getItem("budgetStuff"));

const displayExpenses = () => {
  expenseList.innerHTML = "";
  budgetStuff.forEach((expense, index) => {
    let card = `
  
    <div class = "card" style = "background-color: skyblue">
    <div class="card-body">
  
  
                            <h2 class="card-title" style = "text-transform: uppercase; color: blue; font-weight: 650; letter-spacing: 5px; text-align: center">${expense.itemVal}</h2>
       <p class="card-quantity">Quantity: ${expense.quantityVal}</p>
                            <p id="card-price">Price: $${expense.priceVal}</p>
         <p class="card-total">Total Expense: $${expense.totalExpense}</p>
          <button class= "btn btn-danger" onclick="deleteExpense(${index})">Delete</button>
         <button class= "btn btn-success" onclick="editExpense(${index})">Edit</button>
     </div>
     </div>
                    `;
    expenseList.innerHTML += card;
  });
};

const updateRemainingBudget = () => {
  let initial = 300000;
  let totalExpenses = budgetStuff.reduce(
    (total, expense) => total + expense.totalExpense,
    0
  );
  let remaining = initial - totalExpenses;
  remainingBudget.innerHTML = `${remaining} of $${initial}`;
};

const deleteExpense = (index) => {
  budgetStuff.splice(index, 1);
  localStorage.setItem("budgetStuff", JSON.stringify(budgetStuff));
  displayExpenses();
  updateRemainingBudget();
};

const editExpense = (index) => {
  let newPrice = prompt("Enter New Price");
  let newQuantity = prompt("Enter New Quantity");
  let newItem = prompt("Enter New Item");
  let newExpense = newQuantity * newPrice;

  budgetStuff[index] = {
    itemVal: newItem,
    quantityVal: newQuantity,
    priceVal: newPrice,
    totalExpense: newExpense,
  };

  localStorage.setItem("budgetStuff", JSON.stringify(budgetStuff));
  displayExpenses();
  updateRemainingBudget();
};

displayExpenses();
updateRemainingBudget();
