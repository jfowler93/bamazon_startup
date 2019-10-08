# Bamazon Startup

Bamazon allows a customer to selct an item by a unique ID and purchase a certain amount as long as the stock is available. It takes commands from the terminal and outputs the desired information accordingly. It uses node so that you can run it in the terminal and not a browser.

## Technologies in Use
- NODE
- Javascript

## NPM Packages in Use
- [mysql](https://www.npmjs.com/package/mysql)
- [inquirer](https://www.npmjs.com/package/inquirer)
- [chalk](https://www.npmjs.com/package/chalk)

## How to Use Bamazon
### Initialize Bamazon
![Bamazon Start](https://media.giphy.com/media/kelrATLfCr6epY5u6p/giphy.gif)

- The user types "node bamazon.js" into the terminal.
- This loads a console table containing the products for sale as well as their price and stock quantity.
- Once the table is loaded, the user is prompted to select an item by corresponding ID.

### Make a Purchase
![Bamazon Purchase](https://media.giphy.com/media/jVHwFBcwtk2Yips5rw/giphy.gif)

- The user types the ID that corresponds with the desired product and hits enter.
- This then prompts the user to enter the quantity they would like to purchse.
- If the stock quantity of the product chosen is lower than the desired amount, an insufficient quantity message appears.
- If there is sufficient stock quantity, a message tells the user how much they spent, then prompts them to ask if they would like to continue shopping or exit.
- In addition to that, the database is updated with the new stock quantity after the user makes a purchase.
  
### Continue Shopping
![Continue Shopping](https://media.giphy.com/media/UWVmVXhhQCExNrDB4Z/giphy.gif)

- If the user selects yes, the table loads and they can run through the previous processes again.
  
### Leave Bamazon
![Bamazon Quit](https://media.giphy.com/media/mEQRBk5Zd4dKvnT6XU/giphy.gif)

- If the user selects no when prompted to continue shopping, the connection ends.

## Author
Joshua Fowler
