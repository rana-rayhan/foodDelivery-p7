# Fresh vegetable 🥕

A MERN food and grocery delivery shop. Browse fresh vegetables, fruits, pizza, burgers, cakes and more, filter by category, open a product, add items to your cart and manage your order. Admins can add new products and manage users.

## Features

- **Home:** "Free Delivery" hero, featured products and a sliding **Fresh Vegetables** row
- **Category filter:** fruits, vegetables, ice cream, dosa, fast food, cake, pizza
- **Product page:** image, category, price, description, Buy / Add Cart, and related products
- **Cart** (Redux Toolkit): add items, change quantity with + / −, remove items, live **Total Qty** and **Total Price** summary, cart count badge in the header
- **Accounts:** sign up with a profile picture, log in, view and edit your profile; passwords hashed with bcrypt
- **Admin** (by admin email): add new products with image upload, see and manage the user list
- Toast messages (react-hot-toast) and a responsive Tailwind layout

## Tech stack

**Frontend** (`frontend/`)
- React 18, React Router
- Redux Toolkit
- Tailwind CSS (with tailwind-scrollbar), React Bootstrap
- Axios, react-icons, react-hot-toast, date-fns

**Backend** (`backend/`)
- Node.js and Express
- MongoDB with Mongoose
- bcrypt, multer, cors, dotenv

## Getting started

### 1. Requirements

- Node.js 18 or newer
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 2. Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```bash
PORT=4000
DB_LINK=your_mongodb_connection_string
```

Start it:

```bash
npm run dev
```

The API runs on `http://localhost:4000`. (Without `PORT` it uses 3000, which clashes with the React dev server.)

### 3. Frontend

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```bash
REACT_APP_API_URL=http://localhost:4000
REACT_APP_ADMIN_EMAIL=admin@example.com
```

The user who logs in with `REACT_APP_ADMIN_EMAIL` sees the **New Products** and **User List** links in the profile menu.

Start it:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route          | Page                          |
| -------------- | ----------------------------- |
| `/`            | Home                          |
| `/manu`        | Product page / all products   |
| `/about`       | About                         |
| `/contact`     | Contact                       |
| `/cart`        | Cart                          |
| `/login`       | Login                         |
| `/signup`      | Sign up                       |
| `/profile`     | Your profile                  |
| `/new-product` | Add a product (admin)         |
| `/users`       | User list (admin)             |
| `/singleUser`  | User details (admin)          |
| `/edituser`    | Edit a user                   |

## API

| Method   | Route           | What it does      |
| -------- | --------------- | ----------------- |
| `GET`    | `/product`      | Get all products  |
| `POST`   | `/product`      | Add a product     |
| `POST`   | `/user/signup`  | Create an account |
| `POST`   | `/user/login`   | Log in            |
| `GET`    | `/user`         | Get all users     |
| `GET`    | `/user/:id`     | Get a user        |
| `PUT`    | `/user/:id`     | Update a user     |
| `DELETE` | `/user/:id`     | Delete a user     |

## Project structure

```
frontend/src/
├── App.js                 # Routes
├── app/store.js           # Redux store
├── components/
│   ├── Layouts/Heders.js  # Header with nav, cart badge and user menu
│   └── Redux/             # Product (cart) and user slices
├── hooks/                 # useLogin, useSignup, useProduct, useUsers
├── Pages/
│   ├── Main/              # Home, Menu, Cart, About, Contact, Error
│   ├── Products/          # Product cards, filter, cart rows, add product
│   └── Auth/              # Login, Signup, Profile, Users, EditUser
├── Utility/               # Image to base64
└── assest/                # Product images

backend/
├── index.js               # Server start
├── app.js                 # Express app and routes
├── config/db.js           # MongoDB connection
├── models/                # User and Product
├── controllers/           # User and product logic
└── routes/                # /user and /product
```

## Scripts

| Folder      | Command         | What it does         |
| ----------- | --------------- | -------------------- |
| `backend/`  | `npm run dev`   | Start with nodemon   |
| `frontend/` | `npm start`     | Start the dev server |
| `frontend/` | `npm run build` | Build for production |
