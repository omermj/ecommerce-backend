# Ecommerce API

Ecommerce API is a robust backend framework designed to power a feature-rich 
shopping website. Leveraging REST principles, developers can seamlessly 
implement an ecommerce solution with ease.

## ✨ User Flow and Features
- **Authentication:** Ecommerce backend utilizes JWT for secure user 
  authentication and authorization. Upon login, users are issued a token, 
  which must be included in request headers for protected routes.

- **Categories and Companies:** Products can be categorized and assigned to 
  specific companies (manufacturers), providing a structured organization for 
  the ecommerce platform.

- **Product Filters:** Dynamically filter products by category, company, price, 
  etc. through dynamic SQL queries and request parameters, enhancing the 
  flexibility of data retrieval.

- **Sorting:** Easily sort products using different mechanisms during server 
  requests, allowing for a customized browsing experience.

- **Search Functionality:** Quickly locate products by searching through titles,
  providing users with a convenient and efficient way to find what they're 
  looking for.

- **Shopping Cart:** Products can be added to the shopping cart, with the cart 
  data persisting in the database. User carts are retrievable through user 
  login, while guest user carts are managed using a cartId stored as a cookie.

- **Order Placement:** Seamlessly place orders using the cart items data, 
  facilitating a smooth and intuitive checkout process.

## 📱 Tech Stack
- Framework: Express.js on Node.js
- Database: PostgreSQL
- Authentication: JWT
- Password Hasing: Bcrypt
- Backend Form Validation: JSON Web Schema
- API Calls: Axios

## 🌎 Frontend React App - Wood-Studio
Explore the frontend react app named Wood-Studio [here](https://github.com/omermj/wood-studio). This frontend app seamlessly integrates with the API, creating an end-to-end ecommerce platform


## ⚙️ Installation instructions
### 1. Clone the repo
- Fork the repo and then clone to your local machine:

  `$ git clone https://github.com/omermj/ecommerce-backend.git`

### 2. Install dependencies
- Navigate into the project directory:

  `$ cd ecommerce-backend`

- run installation command:
  
  `$ npm install`

### 3. Initialize the database
- Install PostgreSQL.
- Modify database user and password in `config.js` file.
- Navigate into db directory"
  
    `$ cd db`

- Initialize the database:
  
    `$ psql < db-init.sql`

- Seed the database with sample data:
  
    `$ node seed.js`


### 4. Run the App
- Start the backend server:
  
  `$ npm run dev`


Now you're all set! By default server runs on http://localhost:3001.

Feel free to contribute, report issues, or provide feedback. Happy coding! 🚀