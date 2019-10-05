DROP DATABASE IF EXIST bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR (255) NOT NULL,
department_name VARCHAR (255) NOT NULL,
price DECIMAL (10,2) NOT NULL,
stock_quantity INT (10) NOT NULL,
primary key (id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)

VALUES ("Corvette", "Cars", 50000.89, 5), ("Nerf Gun", "Toys", 12.46, 800), ("Hammock", "Outdoor", 65.34, 32), ("Floor Lamp", "Home", 26.39, 600), ("iPhone", "Electronics", 438.99, 1200), ("Bootcamp", "Education", 10000.99, 20), ("Goodfellas", "VHS Tapes", 12.67, 420), ("Coffee", "Stimulants", 6.79, 5000), ("Beard Oil", "Manscaping", 34.89, 400);