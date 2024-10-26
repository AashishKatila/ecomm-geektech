# Ecommerce Project
- A responsive ecommerce built with React JS + Vite and Tailwind-CSS. Add cart items, remove and checkout features available as well as filter and search operations.

# Features
- Responsive design using Tailwind-CSS and React
- Static data from data.js
- Filter and search functionality.
- Customized notifications.

# Technologies Used
    React - JS framework for developing website.
    Tailwind CSS - Utility-first CSS framework for styling.
    React-toastify - For customized notifications

# Project Structure
```
src
├── pages
│   ├── Cart.jsx              // Displays items added to cart
│   ├── Home.jsx              // Home page of ecommerce
│   ├── ProductDetail.jsx     // Show detail of individual items 
│   └── Shop.jsx              // Displays items available in the shop
│
├── components
│   ├── Navbar.jsx             // Navbar with authentication logic
│   ├── Label.jsx              // Label component
│   └── Filter.jsx             // Filter component
│
├── context
│   └── CartContext.jsx        // Context to manage cart items
│
└── data
    └── data.js                // Dummy data for shop

```

# Setup Instructions
1. Clone the repository
```
    git clone https://github.com/AashishKatila/ecomm-geektech.git
    cd ecomm-geektech
```
2. Install dependencies
```
    npm install
```
3. Run the development server:
```
    npm run dev
```

Open http://localhost:5173 with your browser to open the app.