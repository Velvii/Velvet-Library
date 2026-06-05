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
    publishingDate:"2000",
    startDate:simpleDate,
    lastDate:simpleDate,
    totalPages:0,
    curPages:0,
    logSelf : function() {
        console.log("---------------------------------------------------")
        console.log(" --This book "+this.title+" was written by "+this.author+" on "+this.publishingDate+"--")
        console.log(" --The user started reading reading this book on "+this.startDate+" and they last read it on "+this.lastDate+". This book is finished: "+this.finished+"--")
        console.log(" --This book has the genre of "+this.genre+" and has a icon of "+this.iconName+".--")
        console.log(" --This book has "+this.totalPages+" and ive read "+this.curPages+" of them.--")
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

export function createBook(title, author, genre, iconName, publishingDate, finished, totalPages) {
    let newBook = books.push({...templateBook});
    booksAmount=books.length;
    books[newBook-1].title = title;
    books[newBook-1].author = author;
    books[newBook-1].genre = genre;
    books[newBook-1].iconName = iconName;
    books[newBook-1].publishingDate = publishingDate;
    books[newBook-1].finished = finished;
    books[newBook-1].totalPages = totalPages;
    if (books[newBook-1].finished){
        books[newBook-1].curPages=books[newBook-1].totalPages
    }
}

createBook("Othello","Shakespeare","romance","bulb","1603",true,160)
createBook("To Kill a Mockingbird","Harper Lee","literary-prose","bookmark","1960",true,281)
createBook("1984","George Orwell","sciFi","eye","1949",true,328)
createBook("Pride and Prejudice","Jane Austen","romance","heart","1813",true,279)
createBook("The Great Gatsby","F. Scott Fitzgerald","literary-prose","crown","1925",true,180)
createBook("Harry Potter and the Sorcerer's Stone","J.K. Rowling","fantasy","read","1997",false,309)
createBook("The Hobbit","J.R.R. Tolkien","fantasy","trees","1937",true,310)
createBook("The Catcher in the Rye","J.D. Salinger","literary-prose","ghost-character","1951",false,214)
createBook("The Lord of the Rings","J.R.R. Tolkien","fantasy","yinyang","1954-1955",false,1178)
createBook("Moby-Dick","Herman Melville","adventure","drop","1851",true,635)
createBook("War and Peace","Leo Tolstoy","historical","awards","1869",true,1225)
createBook("The Alchemist","Paulo Coelho","philosophical","gift","1988",false,208)
createBook("The Da Vinci Code","Dan Brown","mystery","debug","2003",false,489)
createBook("The Girl with the Dragon Tattoo","Stieg Larsson","mystery","girl","2005",false,465)
createBook("The Hunger Games","Suzanne Collins","adventure","games","2008",false,374)
createBook("The Chronicles of Narnia","C.S. Lewis","fantasy","trees","1950-1956",false,768)
createBook("The Fault in Our Stars","John Green","romance","heart","2012",false,313)
createBook("The Kite Runner","Khaled Hosseini","historical","cloud","2003",false,371)
createBook("Crime and Punishment","Fyodor Dostoevsky","crime","box","1866",false,671)
createBook("The Brothers Karamazov","Fyodor Dostoevsky","literary-prose","disc","1880",false,824)
createBook("Don Quixote","Miguel de Cervantes","adventure","bookmark","1605/1615",false,863)
createBook("Alice's Adventures in Wonderland","Lewis Carroll","children","smile","1865",false,201)
createBook("Franny and Zooey","J.D. Salinger","literary-prose","read","1961",false,201)
createBook("The Odyssey","Homer","adventure","bowl","c.8th century BC",false,541)
createBook("Les Misérables","Victor Hugo","drama","music-note","1862",false,1463)
createBook("The Picture of Dorian Gray","Oscar Wilde","literary-prose","camera","1890",false,254)
createBook("The Handmaid's Tale","Margaret Atwood","drama","lock","1985",false,311)
createBook("A Tale of Two Cities","Charles Dickens","historical","calendar-due","1859",false,489)
createBook("Gone with the Wind","Margaret Mitchell","romance","crown","1936",false,1037)
createBook("The Grapes of Wrath","John Steinbeck","literary-prose","trees","1939",false,464)
createBook("Beloved","Toni Morrison","drama","ghost-character","1987",false,324)

