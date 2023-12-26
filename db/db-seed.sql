-- Insert into users
INSERT INTO users (username, email, password) VALUES 
('admin', 'admin@example.com', 'password'),
('user1', 'user1@example.com', 'password'),
('user2', 'user2@example.com', 'password');

-- Insert into companies
INSERT INTO companies (name) VALUES 
('Company1'),
('Company2');

-- Insert into categories
INSERT INTO categories (name) VALUES 
('Sofa'),
('Beds');

-- Insert into products
INSERT INTO products (title, company_id, description, featured, category_id, 
  image, price, shipping, colors) VALUES 
('Velvet Sofa', 1, 'Description1', true, 1, 'image1', 100.00, true, 
  ARRAY['Red', 'Blue']),
('Product2', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']);

-- Insert into orders
INSERT INTO orders (username) VALUES 
('user1'),
('user2');

-- Insert into orders_products
-- Assuming orders_products table has columns order_id, product_id
INSERT INTO orders_products (order_id, product_id) VALUES 
(1, 1),
(2, 2);