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

- The user types "node liri.js concert-this <artist/band name>" into the terminal
- The concert search method then makes a request to the bandsintown API based on the argument passed in by the user.
- Once results are populated, they are console logged and appended to the log.txt file.

### Make a Purchase
![Bamazon Purchase](https://media.giphy.com/media/jVHwFBcwtk2Yips5rw/giphy.gif)

- The user types "node liri.js movie-this <movie name>" into the terminal
- The movie search method then makes a request to the OMDB API based on the argument passed in by the user.
- Once results are populated, they are console logged and appended to the log.txt file.
  
### Continue Shopping
![Continue Shopping](https://media.giphy.com/media/UWVmVXhhQCExNrDB4Z/giphy.gif)

- The user types "node liri.js spotify-this-song <song title>" into the terminal
- The spotify search method then makes a request to the spotify API based on the argument passed in by the user.
- Once results are populated, they are console logged and appended to the log.txt file.
- If the user does not specify a song, "The Sign" by Ace of Base is console legged and appended to the log.txt file.
  
### Leave Bamazon
![Bamazon Quit](https://media.giphy.com/media/mEQRBk5Zd4dKvnT6XU/giphy.gif)

- The user types "node liri.js do-what-it-says" into the terminal
- The doWhatItSays function then reads the random.text file and outputs the data in the console log as well as appending it to the log.txt.

## Author
Joshua Fowler
