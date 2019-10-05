//initialize dependencies
var mysql = require("mysql");
var inquirer = requirer("inquirer");


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
        name: "Item-id"
    }])
    .then(function (answer){
        console.log("Searching for: " + answer.Item-id);
        promptCustomerForQuantity();
    })

}

//prompt customer for quantity
function promptCustomerForQuantity(){

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