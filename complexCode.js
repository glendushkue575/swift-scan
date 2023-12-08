/*
 * Filename: complexCode.js
 * Description: This code is a complex implementation of a virtual store management system.
 * It includes features like user authentication, product inventory management, order processing, and reporting.
 * Author: [Your Name]
 */

// Global variables
var currentUser = null;
var productInventory = [];
var orderHistory = [];

// User class
function User(username, password) {
  this.username = username;
  this.password = password;
}

// Product class
function Product(id, name, price, quantity) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Add a product to the inventory
function addProduct(id, name, price, quantity) {
  var product = new Product(id, name, price, quantity);
  productInventory.push(product);
}

// Authenticate user
function authenticate(username, password) {
  // Implementation of user authentication logic
  // ...
  currentUser = new User(username, password);
}

// Process an order
function processOrder(productId, quantity) {
  // Implementation of order processing logic
  // ...
  var product = findProductById(productId);
  if (product) {
    if (product.quantity >= quantity) {
      // Update product quantity
      product.quantity -= quantity;

      // Add order to the history
      orderHistory.push({
        user: currentUser,
        productId: productId,
        quantity: quantity,
        timestamp: new Date()
      });

      console.log("Order processed successfully!");
    } else {
      console.log("Insufficient quantity for the requested product.");
    }
  } else {
    console.log("Product not found.");
  }
}

// Find product by ID
function findProductById(productId) {
  // Implementation of product search logic
  // ...
  for (var i = 0; i < productInventory.length; i++) {
    if (productInventory[i].id === productId) {
      return productInventory[i];
    }
  }
  return null;
}

// Generate report
function generateReport() {
  // Implementation of report generation
  // ...
  console.log("--- Product Inventory Report ---");
  for (var i = 0; i < productInventory.length; i++) {
    console.log("Product: " + productInventory[i].name);
    console.log("Price: $" + productInventory[i].price);
    console.log("Quantity: " + productInventory[i].quantity);
    console.log("-----------------------------");
  }

  console.log("--- Order History Report ---");
  for (var i = 0; i < orderHistory.length; i++) {
    console.log("User: " + orderHistory[i].user.username);
    console.log("Product: " + findProductById(orderHistory[i].productId).name);
    console.log("Quantity: " + orderHistory[i].quantity);
    console.log("Timestamp: " + orderHistory[i].timestamp);
    console.log("---------------------------");
  }
}

// Main program
authenticate("admin", "password123");

addProduct(1, "Laptop", 999.99, 5);
addProduct(2, "Phone", 599.99, 10);
addProduct(3, "Headphones", 99.99, 20);

processOrder(1, 2);
processOrder(1, 1);
processOrder(2, 5);

generateReport();