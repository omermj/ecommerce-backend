SET TIMEZONE = 'UTC';

CREATE TABLE users (
  username VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  FOREIGN KEY (username) REFERENCES users (username) ON DELETE SET NULL
);

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  company_id INT NOT NULL,
  description TEXT NOT NULL,
  featured BOOLEAN NOT NULL,
  category_id INT NOT NULL,
  image TEXT,
  price NUMERIC NOT NULL,
  shipping BOOLEAN NOT NULL,
  colors VARCHAR(255)[] NOT NULL,
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE SET NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

CREATE TABLE orders_products (
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  product_color VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE carts (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  FOREIGN KEY (username) REFERENCES users (username) ON DELETE CASCADE
);

CREATE TABLE carts_products (
  cart_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  product_color VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

