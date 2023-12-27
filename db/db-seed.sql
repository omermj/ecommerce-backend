-- Insert into users
INSERT INTO users (username, email, password) VALUES 
('admin', 'admin@example.com', '$2b$12$Y.wvpKZZ9MvzzX8vHLxiX.YR8QEXG7e1fd2ACFOaFPhg0e0vyPvNy'),
('user1', 'user1@example.com', '$2b$12$Y.wvpKZZ9MvzzX8vHLxiX.YR8QEXG7e1fd2ACFOaFPhg0e0vyPvNy'),
('user2', 'user2@example.com', '$2b$12$Y.wvpKZZ9MvzzX8vHLxiX.YR8QEXG7e1fd2ACFOaFPhg0e0vyPvNy');

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
  ARRAY['#FF3333', '#0023FF']),
('Product2', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product3', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product4', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product5', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product6', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product7', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product8', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product10', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product11', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product12', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product13', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product14', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product15', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product16', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product17', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product18', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product19', 1, 'Description2', true, 1, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product20', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product21', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product22', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product23', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product24', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product25', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product26', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product27', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product28', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product29', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product30', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product31', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product32', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product33', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product34', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product35', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product36', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']),
('Product37', 2, 'Description2', false, 2, 'image2', 200.00, false, 
  ARRAY['#1ED544', '#FFF300']);


-- Insert into orders
INSERT INTO orders (username, address) VALUES 
('user1', 'Address1'),
('user2', 'Address2'),
('user2', 'Address3');

-- Insert into orders_products
-- Assuming orders_products table has columns order_id, product_id
INSERT INTO orders_products (order_id, product_id, product_color, quantity) 
VALUES 
  (1, 1, '#FF3333', 1),
  (1, 2, '#1ED544', 2),
  (2, 1, '#FF3333', 1),
  (2, 2, '#1ED544', 2),
  (3, 1, '#FF3333', 1),
  (3, 2, '#1ED544', 2);

