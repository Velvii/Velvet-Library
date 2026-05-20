export let books = []

console.log("Program Started")
let currentDate = new Date()
let simpleDate = currentDate.toLocaleDateString("en-us")
let booksAmount = 0;
let Userinput = "";

// Main Books Array

let genres = [
    "crime", // #4c2a65
    "romance", // #b734ae
    "fantasy", // #328fba
    "sciFi", // #38968f
    "adventure", // #657f4b
    "mystery", // #26232f
    "horror", // #3a1d11
    "comedy", // #cb8b2c
    "literary-prose", // #1b694d
    "poetry", // #513347
    "drama", // #711818
    "historical", // #584533
    "children", // #efe872
    "philosophical", // #abe44f
    "religious", // #cf4699
    "graphic-novel", // #ad1b5d
]

function returnRandomGenre(){
    return genres[Math.floor(Math.random() * genres.length)];
}

// https://css.gg/icon/smile-upside credit these guys for icons

let templateBook = {
    title:"",
    author:"",
    genre:"",
    iconName:"",
    finished:false,
    publishingDate:simpleDate,
    startDate:simpleDate,
    lastDate:simpleDate,
    logSelf : function() {
        console.log("---------------------------------------------------")
        console.log(" --This book "+this.title+" was written by "+this.author+" on "+this.publishingDate+"--")
        console.log(" --The user started reading reading this book on "+this.startDate+" and they last read it on "+this.lastDate+". This book is finished: "+this.finished+"--")
        console.log(" --This book has the genre of "+this.genre+" and has a icon of "+this.iconName+".--")
        console.log("---------------------------------------------------")
    },
    giveTitle : function() {
        return this.title;
    },
    giveAuthor : function() {
        return this.author;
    },
    giveGenre : function() {
        return this.genre;
    },
    giveIconName : function() {
        return this.iconName;
    },
    givestartDate : function() {
        return this.startDate;
    },
    givelastDate : function() {
        return this.lastDate;
    },
}

function createBook(title, author, genre, iconName, publishingDate, finished) {
    let newBook = books.push({...templateBook});
    booksAmount=books.length;
    books[newBook-1].title = title;
    books[newBook-1].author = author;
    books[newBook-1].genre = genre;
    books[newBook-1].iconName = iconName;
    books[newBook-1].publishingDate = publishingDate;
    books[newBook-1].finished = finished;
}

createBook("Othello","Shakespeare","romance","bulb",simpleDate,true)
// Additional sample books (icon names updated to match assets/book-icons filenames)
createBook("To Kill a Mockingbird","Harper Lee","literary-prose","bookmark",simpleDate,true)
createBook("1984","George Orwell","sciFi","eye",simpleDate,true)
createBook("Pride and Prejudice","Jane Austen","romance","heart",simpleDate,true)
createBook("The Great Gatsby","F. Scott Fitzgerald","literary-prose","crown",simpleDate,true)
createBook("Harry Potter and the Sorcerer's Stone","J.K. Rowling","fantasy","read",simpleDate,false)
createBook("The Hobbit","J.R.R. Tolkien","fantasy","trees",simpleDate,true)
createBook("The Catcher in the Rye","J.D. Salinger","literary-prose","ghost-character",simpleDate,false)
createBook("The Lord of the Rings","J.R.R. Tolkien","fantasy","yinyang",simpleDate,false)
createBook("Moby-Dick","Herman Melville","adventure","drop",simpleDate,true)
createBook("War and Peace","Leo Tolstoy","historical","awards",simpleDate,true)
books.forEach((book) => book.logSelf())
