# Paradise Plant Store

This is a small e-commerce web application built with **React** and **Redux**. It showcases houseplants for sale and includes a shopping cart system with full state management.

---

## GitHub Repository

**Public URL:** [Insert your GitHub repo URL here]

---

## Project Overview

**Paradise Plant Store** allows users to browse houseplants grouped into categories, add items to a shopping cart, and view/manage items in the cart. The app is built with React for UI and Redux for state management.

---

## Features

### Landing Page

- Displays a full **background image** representing the company.
- Shows the **company name**: Paradise.
- Includes a **paragraph about the company**.
- Contains a **Get Started button** that links to the product listing page.

### Product Listing Page

- Displays **six unique houseplants**, each with:
  - Thumbnail image
  - Name
  - Price
- Plants are grouped into **at least three categories**.
- Each plant has an **Add to Cart button**:
  - Increases the shopping cart icon count by one when clicked.
  - Becomes visually disabled (greyed out) when the item is already in the cart.
  - Adds the selected plant to the shopping cart.

### Header

- Visible on both the **product listing page** and the **shopping cart page**.
- Contains a **shopping cart icon** displaying the total number of items in the cart.
- Provides navigation between pages.

### Shopping Cart Page

- Displays the **total number of plants** in the cart.
- Shows the **total cost of all items**.
- Each plant in the cart shows:
  - Thumbnail
  - Name
  - Unit price
- Each plant type has:
  - **Increase button** to increment quantity
  - **Decrease button** to decrement quantity
  - **Delete button** to remove the item entirely
- **Checkout button** displays a "Coming Soon" message.
- **Continue Shopping button** links back to the product listing page.

---

## Technologies Used

- **React** – Frontend UI
- **Redux** – State management for cart functionality
- **CSS** – Styling
- **JSON** – Product data

---
