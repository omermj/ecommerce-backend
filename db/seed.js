import fs from "fs";
import pgp from "pg-promise";
import { DB_NAME, DB_USER, DB_HOST, DB_PASSWORD, DB_PORT } from "../config.js";

// Create connection to database
const db = pgp()({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : null,
});

// Read JSON data
const products = JSON.parse(
  fs.readFileSync("sample-data/products.json", "utf8")
).data;
const companies = JSON.parse(
  fs.readFileSync("sample-data/companies.json", "utf8")
).data;
const categories = JSON.parse(
  fs.readFileSync("sample-data/categories.json", "utf8")
).data;
const users = JSON.parse(
  fs.readFileSync("sample-data/users.json", "utf8")
).data;
const orders = JSON.parse(
  fs.readFileSync("sample-data/orders.json", "utf8")
).data;

// Map data to SQL insert statements
const productsInsertData = products.map((p) => ({
  id: p.id,
  title: p.attributes.title,
  company_id: p.attributes.company,
  description: p.attributes.description,
  featured: p.attributes.featured,
  category_id: p.attributes.category,
  image: p.attributes.image,
  price: p.attributes.price,
  shipping: p.attributes.shipping,
  colors: p.attributes.colors,
}));

const companiesInsertData = companies.map((c) => ({
  id: c.id,
  name: c.name,
}));

const categoriesInsertData = categories.map((c) => ({
  id: c.id,
  name: c.name,
}));

const usersInsertData = users.map((u) => ({
  username: u.username,
  email: u.email,
  password: u.password,
}));

const ordersInsertData = orders.map((o) => ({
  id: o.id,
  username: o.username,
  name: o.name,
  address: o.address,
}));

const orderProductsInsertData = orders.flatMap((o) => {
  return o.products.map((item) => ({
    order_id: o.id,
    product_id: item.id,
    quantity: item.quantity,
    product_color: item.color,
  }));
});

// Insert data into table
const productsInsert = pgp().helpers.insert(
  productsInsertData,
  [
    "id",
    "title",
    "company_id",
    "description",
    "featured",
    "category_id",
    "image",
    "price",
    "shipping",
    "colors",
  ],
  "products"
);

const companiesInsert = pgp().helpers.insert(
  companiesInsertData,
  ["id", "name"],
  "companies"
);

const categoriesInsert = pgp().helpers.insert(
  categoriesInsertData,
  ["id", "name"],
  "categories"
);

const usersInsert = pgp().helpers.insert(
  usersInsertData,
  ["username", "email", "password"],
  "users"
);

const ordersInsert = pgp().helpers.insert(
  ordersInsertData,
  ["id", "username", "name", "address"],
  "orders"
);

const orderProductsInsert = pgp().helpers.insert(
  orderProductsInsertData,
  ["order_id", "product_id", "quantity", "product_color"],
  "orders_products"
);

//

// Execute query
async function seedData() {
  try {
    await db.none(companiesInsert);
    console.log("Companies table seeded!");
    await db.none(categoriesInsert);
    console.log("Categories table seeded!");
    await db.none(productsInsert);
    console.log("Products table seeded!");
    await db.none(usersInsert);
    console.log("Users table seeded!");
    await db.none(ordersInsert);
    console.log("Orders table seeded!");
    await db.none(orderProductsInsert);
    console.log("Order products table seeded!");
  } catch (err) {
    console.log(`Error seeding data table: ${err}`);
  } finally {
    // Close the connection
    pgp().end();
  }
}

// Call the function
seedData();
