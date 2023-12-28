-- \echo 'Delete and recreate ecommerce_db_dev db?'
-- \prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE ecommerce_db_dev;
CREATE DATABASE ecommerce_db_dev;
\connect ecommerce_db_dev

\i db-schema.sql
-- \i db-seed.sql


-- \echo 'Delete and recreate ecommerce_db_test db?'
-- \prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE ecommerce_db_test;
CREATE DATABASE ecommerce_db_test;
\connect ecommerce_db_test

\i db-schema.sql
