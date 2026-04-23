#  ShoppyGlobe Backend API

This is a simple **e-commerce backend project** built using **Node.js, Express, and MongoDB**.
It supports basic features like viewing products, managing a cart, and user authentication using JWT.

---

##  What this project does

* Users can register and login
* Products can be viewed (all or single)
* Logged-in users can:

  * Add items to cart
  * Update quantity
  * Remove items from cart

---
##  Tech Used

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs

---

##  Project Structure

```bash
shoppyglobe-backend/
│
├── config/
│   └── db.js                 # MongoDB connection setup
│
├── controllers/
│   ├── authController.js    # Handles register & login logic
│   ├── productController.js # Handles product APIs
│   └── cartController.js    # Handles cart operations
│
├── models/
│   ├── User.js              # User schema (email, password)
│   ├── Product.js           # Product schema (name, price, etc.)
│   └── Cart.js              # Cart schema (userId, productId, quantity)
│
├── routes/
│   ├── authRoutes.js        # Auth routes (/register, /login)
│   ├── productRoutes.js     # Product routes (/products)
│   └── cartRoutes.js        # Cart routes (/cart)
│
├── middleware/
│   └── authMiddleware.js    # JWT authentication middleware
│
├── .env                     # Environment variables (not uploaded to GitHub)
├── .gitignore               # Ignored files (node_modules, .env)
├── package.json             # Project dependencies & scripts
├── server.js                # Entry point of the application
└── README.md                # Project documentation
```

---

###  Structure Explanation

* **config/** → Database connection setup
* **controllers/** → Business logic for APIs
* **models/** → MongoDB schemas
* **routes/** → API endpoints
* **middleware/** → Authentication logic
* **server.js** → Starts the server and connects everything


##  Setup Instructions

1. Clone the repo

git hub repository
https://github.com/Praveen775D/shoppyglobe-backend

```bash
git clone https://github.com/Praveen775D/shoppyglobe-backend
cd shoppyglobe-backend
```

2. Install dependencies

```bash id="p8w1ks"
npm install
```

3. Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

4. Run the server

```bash
npm run dev
```

---

##  API Endpoints

###  Auth

* POST `/api/register` → Register user
* POST `/api/login` → Login and get token

---

###  Products

* GET `/api/products` → Get all products
* GET `/api/products/:id` → Get single product

---

###  Cart (Protected)

> Requires token in headers

```id="f9n2ld"
Authorization: your_token
```

* POST `/api/cart` → Add item
* PUT `/api/cart/:id` → Update quantity
* DELETE `/api/cart/:id` → Remove item

---

##  How Authentication Works

1. User registers
2. Logs in → gets JWT token
3. Token is used in headers for cart APIs

---

##  Testing

All APIs were tested using ThunderClient.

Test flow:

* Register → Login → Get token
* Fetch products
* Add to cart → Update → Delete

---

##  Screenshots

Include:

* Register API
* Login API (with token)
* Products API
* Cart APIs (Add, Update, Delete)
* MongoDB collections (products, cart, users)

---

##  Notes

* Basic validation is implemented
* Error handling is done using try-catch
* MongoDB Atlas is used for database

---

##  Author

Praveen

---

##  Final Note

This project was built as part of a backend assignment to understand how real-world e-commerce APIs work.
