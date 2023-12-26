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
('Product2', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product3', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product4', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product5', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product6', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product7', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product8', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product10', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product11', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product12', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product13', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product14', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product15', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product16', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product17', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product18', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product19', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product20', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product21', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product22', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product23', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product24', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product25', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product26', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product27', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product28', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product29', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product30', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product31', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product32', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product33', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product34', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product35', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product36', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['Green', 'Yellow']),
('Product37', 2, 'Description2', false, 2, 'image2', 200.00, false, 
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

