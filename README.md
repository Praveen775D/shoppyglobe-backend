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

## Project Structure

shoppyglobe-backend/
│── config/
│   └── db.js
│── controllers/
│   ├── authController.js
│   ├── productController.js
│   └── cartController.js
│── models/
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
│── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── cartRoutes.js
│── middleware/
│   └── authMiddleware.js
│── .env
│── server.js
│── package.json

---

##  Setup Instructions

1. Clone the repo

```bash id="s2x9lq"
git clone https://github.com/your-username/shoppyglobe-backend.git
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
