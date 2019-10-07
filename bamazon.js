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
        promptCustomerForItem();

    })
}

//prompt the user for a product id
function promptCustomerForItem() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        inquirer
            .prompt([{
                type: "input",
                message: "What is the ID of the item you are searching for?",
                name: "itemID"
            },
            {
                type: "input",
                message: "How many would you like to buy?",
                name: "amount"
            }])
            .then(function (answer) {
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].id === parseInt(answer.itemID)) {
                        chosenItem = results[i];
                    }
                }
                if (chosenItem.stock_quantity < parseInt(answer.amount)) {
                    console.log("Insufficient quantity!")
                    loadProducts();
                }
                else {
                    var newQuantity = chosenItem.stock_quantity - parseInt(answer.amount);
                    var totalCost = chosenItem.price * answer.amount;
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: newQuantity
                            },
                            {
                                id: answer.itemID
                            }

                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Thank you for your purchase! Your total cost was " + totalCost);
                            checkIfShouldExit();
                        }
                    );
                }
            })
    })
}

//check to see if user wants to exit or continue (optional)
function checkIfShouldExit() {
    inquirer
        .prompt(
            {
                type: "list",
                message: "Would you Like to continue shopping?",
                choices: ["Yes", "No"],
                name: "shopPrompt"
            })
        .then(function (answer) {
            if (answer.shopPrompt === "Yes") {
                console.log("------------------------------");
                console.log("Loading Product List...");
                console.log("------------------------------");
                loadProducts()
            }
            else {
                connection.end();
            }
        })
}