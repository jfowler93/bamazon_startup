//initialize dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");


//initialize the connection variable to sync with a MYSQL database
var connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
})

//create the connection with the server and load the product data
connection.connect(function (err) {

    if (err) {
        console.log("error connect" + err.stack)
    }

    loadProducts()
})
//function to load products from DB
function loadProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err
        //displays items in a table
        console.table(res);

        //then prompt the customer for choice of item
        promptCustomerForItem(res);

    })
}

//prompt the user for a product id
function promptCustomerForItem(){
    
    inquirer
    .prompt([{
        type: "input",
        message: "What is the ID of the item you are searching for?",
        name: "id"
    }])
    .then(function (answer){
        connection.query("SELECT * FROM products WHERE ?"
        [{
            id: answer.id
        }], 
        function (err, res) {
            if (err) throw err;
        console.log("Searching for: " + answer.id);
        promptCustomerForQuantity();
    })
    })
}

//prompt customer for quantity
function promptCustomerForQuantity(){
    inquirer
    .prompt([{
        type: "input",
        message: "How many would you like to purchase?",
        name: "quantity"
    }])
    .then(function (answer){
        if(stock_quantity < answer.quantity){
            console.log("Insufficient quantity!");
            loadProducts()
        }
        else{
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                {
                    stock_quantity: answer.quantity
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + "Thank You For Your Purchase!");
                    loadProducts();
                    
                }
                ])
        }
    })

}

//purchase function to buy desired item
function makePurchase(){

}

//check the inventory to see if the user choice exists in inventory
function checkInventory(){

}

//check to see if user wants to exit or continue (optional)
function checkIfShouldExit(){

}