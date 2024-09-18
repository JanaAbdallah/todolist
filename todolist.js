// Initialize the TodoList from localStorage or set as an empty array if no data is found
let TodoList = JSON.parse(localStorage.getItem('TodoList')) || [];

// Call the render function on page load
renderTodoList();

// Add event listener for pressing Enter key
document.querySelector('.js-name-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {  // Check if Enter key is pressed
    addTodo();  // Call the addTodo function when Enter is pressed
  }
});

// Function to render the todo list to the page
function renderTodoList() {
  let todolistHTML = '';  // Initialize an empty string to hold the HTML content

  // Loop through the TodoList array and generate HTML for each item
  for (let i = 0; i < TodoList.length; i++) {
    const todo = TodoList[i].name;
    const date = TodoList[i].date;

    const html = `
      <div>${todo}</div>
      <div>${date}</div>
      <button onclick="
        removeTodo(${i});
      " class="Deletebutton">Delete</button>
    `;

    todolistHTML += html;  // Accumulate the HTML content
  }

  console.log(todolistHTML);  // Debug log to check the generated HTML
  document.querySelector('.js-todo-list').innerHTML = todolistHTML;  // Render on the page
}

// Function to add a new todo
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');  // Get the name input field
  const dateElement = document.querySelector('.js-date-input');  // Get the date input field

  const name = inputElement.value;  // Get the value entered by the user
  const date = dateElement.value;   // Get the selected date

  if (name && date) {  // Only add if both name and date are provided
    TodoList.push({ name: name, date: date });  // Add the new todo with date
    localStorage.setItem('TodoList', JSON.stringify(TodoList));  // Save the updated list to localStorage
    console.log(TodoList);  // Debug log to check the updated list
    inputElement.value = '';  // Clear the input field
    dateElement.value = '';   // Clear the date input field

    renderTodoList();  // Re-render the todo list with the updated list
  } else {
    alert("Please provide both the todo name and date.");  // Show an alert if either field is empty
  }
}

// Function to remove a todo item
function removeTodo(index) {
  // Remove the todo item at the specified index
  TodoList.splice(index, 1);
  localStorage.setItem('TodoList', JSON.stringify(TodoList));  // Save the updated list to localStorage
  renderTodoList();  // Re-render the todo list with the updated list
}

