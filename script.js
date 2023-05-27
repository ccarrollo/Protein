// Food items database
const foodItems = [
  { name: 'Salmon', calories: 400, protein: 32 },
  { name: 'Syntha Protein Bar', calories: 230, protein: 20 },
  { name: 'Ground Chicken (1 lb)', calories: 680, protein: 88 },
  { name: 'Carton of Egg Whites', calories: 250, protein: 50 },
  { name: 'Greek Yogurt (3/4 cup)', calories: 230, protein: 6 },
  { name: 'Kirkland Chewy Bar', calories: 190, protein: 10 },
  { name: 'Kirkland Protein Bar', calories: 170, protein: 21 }
];

// Initialize variables for totals and selected food items
let totalCalories = 0;
let totalProtein = 0;
const selectedFoodItems = [];

// Get DOM elements
const caloriesInput = document.getElementById('calories');
const proteinInput = document.getElementById('protein');
const addMealButton = document.getElementById('add-meal-btn');
const resetButton = document.getElementById('reset-btn');
const totalCaloriesSpan = document.getElementById('total-calories');
const totalProteinSpan = document.getElementById('total-protein');
const foodListContainer = document.getElementById('food-list-container');
const customFoodInput = document.getElementById('custom-food');

// Add event listener to the "Add Meal" button
addMealButton.addEventListener('click', function() {
  const calories = parseInt(caloriesInput.value);
  const protein = parseInt(proteinInput.value);

  // Update totals
  totalCalories += calories;
  totalProtein += protein;

  // Update display
  totalCaloriesSpan.textContent = totalCalories;
  totalProteinSpan.textContent = totalProtein;

  // Reset input fields
  caloriesInput.value = '';
  proteinInput.value = '';

  // Add the selected food item to the list
  const selectedFoodItem = customFoodInput.value;
  if (selectedFoodItem) {
    selectedFoodItems.push(selectedFoodItem);
    displaySelectedFoodItems();
    customFoodInput.value = '';
  }
});

// Add event listener to the "Reset" button
resetButton.addEventListener('click', function() {
  // Reset totals and selected food items
  totalCalories = 0;
  totalProtein = 0;
  selectedFoodItems.length = 0;

  // Update display
  totalCaloriesSpan.textContent = totalCalories;
  totalProteinSpan.textContent = totalProtein;
  displaySelectedFoodItems();
});

// Function to add a food item to the meal
function addFoodItem(foodName) {
  const foodItem = foodItems.find(item => item.name === foodName);

  if (foodItem) {
    // Update totals
    totalCalories += foodItem.calories;
    totalProtein += foodItem.protein;

    // Update display
    totalCaloriesSpan.textContent = totalCalories;
    totalProteinSpan.textContent = totalProtein;

    // Add the selected food item to the list
    selectedFoodItems.push(foodName);
    displaySelectedFoodItems();
  }
}

// Function to display the selected food items
function displaySelectedFoodItems() {
  foodListContainer.innerHTML = '';

  if (selectedFoodItems.length > 0) {
    const foodList = document.createElement('ul');
    selectedFoodItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      foodList.appendChild(listItem);
    });
    foodListContainer.appendChild(foodList);
  }
}
