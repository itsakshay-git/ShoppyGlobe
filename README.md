# ShoppyGlobe - E-commerce Web App

ShoppyGlobe is a modern e-commerce web app built with React, Redux, and Swiper.js. It provides a seamless shopping experience with product browsing, cart management, and a responsive UI that adjusts across devices. The app includes a top product carousel, search functionality, category filters, and more.

# Live Demo

[https://e.vercel.app/](https://shoppy-globe-five.vercel.app/)

# Git Repository

https://github.com/itsakshay-git/ShoppyGlobe

![Screenshot 2025-04-03 233509](https://github.com/user-attachments/assets/d99775aa-9c54-4ac4-82bd-0176c1db59b4)

![Screenshot 2025-04-03 233550](https://github.com/user-attachments/assets/2a065b20-8502-432c-bc15-9066092539bc)


## Features

- **Product Browsing**: View products in various categories, including beauty, fragrances, groceries, and more.
- **Search Functionality**: Easily search for products by title.
- **Category Filters**: Filter products based on categories such as beauty, groceries, fragrances, etc.
- **Product Details**: View detailed information about products, including description, rating, price, and stock availability.
- **Add to Cart**: Add products to the cart and manage cart items.
- **Toast Notifications**: Displays success/error messages after actions like adding items to the cart.
- **Responsive Design**: The UI adjusts to different screen sizes and devices.
- **Swiper Carousel**: A dynamic top product carousel for showcasing popular items.
- **Redux for State Management**: Used for managing the state of the cart and toast notifications.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For global state management.
- **Swiper.js**: For creating a responsive and interactive product carousel.
- **CSS Modules**: For styling components.
- **React Router**: For handling routing between pages.
- **Custom Hooks**: For fetching product data and managing state.
- **Toast Notifications**: To show messages like "Product added to cart" and errors.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/itsakshay-git/shoppyglobe
   ```
2. Navigate to the project folder:
   ```sh
   cd shoppyglobe
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

## Folder Structure

```
src/
│── assets/                  # Folder to store all static assets like images, icons, etc.
│   ├── icons/              # Folder for storing icon assets (e.g., images, buttons, etc.)
│   ├── images/             # Folder for product images or other static images used in the app.
│
│── components/             # Contains all React components (UI elements and logic for the app)
│   ├── Cart/               # Cart component (handles displaying cart items and total price)
│   ├── CartItem/           # Component for displaying individual cart items
│   ├── Footer/             # Footer component (used at the bottom of every page)
│   ├── Header/             # Header component (includes navigation, logo, etc.)
│   ├── MiniNav/            # Mini navigation component navigation for small screen.
│   ├── Navbar/             # Main navigation bar component (contains links to pages)
│   ├── NotFound/           # Not Found page (404 page displayed when no page is found)
│   ├── ProductDetail/      # Component displaying detailed info for a selected product
│   ├── ProductItem/        # Component to represent individual product items in a list
│   ├── ProductList/        # Component for listing all products (with filters and search)
│   ├── Spinner/            # Spinner component for showing a loading animation
│   ├── Toast/              # Toast notification component (displays success/error messages)
│   ├── TopProducts/        # Component for showcasing top-selling products in a carousel
│
│── pages/                   # Folder containing the main pages of the app
│   ├── Checkout/           # Checkout page for finalizing purchases
│   │   ├── Checkout.jsx    # JSX for Checkout page
│   │   ├── Checkout.css    # Styles for the Checkout page
│   ├── Home.jsx            # Home page that displays featured products and categories
│
│── Redux/                   # Redux state management files
│   ├── cartSlice.js         # Redux slice for managing the cart state
│   ├── checkoutSlice.js     # Redux slice for managing the checkout state
│   ├── toastSlice.js        # Redux slice for managing the toast notification state
│   ├── store.js             # Redux store setup and integration
│
│── App.css                  # Global styles that apply throughout the entire app
│── App.jsx                  # Root component that renders the whole app structure

```

## How It Works

### Product List Page:

- Displays a list of products that can be filtered by category and searched by title.
- Each product is rendered as a ProductItem, which shows the title, price, rating, and "Add to Cart" button.

### Product Detail Page:

- Shows detailed information for each product, including description, rating, shipping details, and availability.
- Users can add the product to their cart from this page.

### Top Product Carousel:

- The TopProduct component uses Swiper.js to create a responsive carousel displaying popular products.
- The carousel is set to autoplay, with custom navigation controls.

### Cart:

- Users can view the cart, add products to it, and see the total quantity of items in the cart.
- Cart management is handled with Redux, ensuring that cart data persists across components.

### Toast Notifications:

- A toast notification appears when a product is successfully added to the cart, using the Toast component.
