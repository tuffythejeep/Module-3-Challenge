// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

const employees = []

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
while (true) {
  const firstName = prompt("Enter the employee's first name (or type 'stop' to finish):");
  if (firstName.toLowerCase() === "stop") {
    break;
    }
    // the above will capture the employee's first name
  
  const lastName = prompt("Enter the employee's last name:");
  // the above will capture the employee's last name

  const salaryInput = prompt("Enter the employee's salary (numeric value please):");
  const salary = isNaN(parseFloat(salaryInput)) ? 0 : parseFloat(salaryInput);
  // the above will capture the employee's salary

  const employee = {
    firstName,
    lastName,
    salary,
  };

    employees.push(employee);
  }
  return employee;
};

const allEmployees = collectEmployees ();
console.log(allEmployees);

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randInt = Math.random() * employeesArray.length;
  console.log(
    `Congrats to ${employeesArray[randInt].firstName} ${employeesArray[randInt].lastName} for being selected as the random winner`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
