/**
 *@description implementing a typical Book Object using the Constructor design pattern
 *
 * @param {*} title
 * @param {*} ISBN
 * @param {*} author
 */
function Book(title, ISBN, author) {
    this.title = title
    this.ISBN = ISBN
    this.author = author
}

function Observer() {}
Observer.prototype.update = function(books) {

    // console.log("available books after lending");
    // console.log("=======================================\n");

    // books.available.forEach(book => {
    //     console.log(book);
    // })

    // console.log('\n');

    // console.log("rented Book(s)");
    // console.log("=======================================\n");

    // books.rented.forEach(book => {
    //     console.log(book);
    // })

}


function Subject() {
    this.libraryUsers = []
}

Subject.prototype.registerUser = function(user) {
    this.libraryUsers.push(user)
    return this.libraryUsers
}
Subject.prototype.unRegisterUser = function(user) {
    let index = this.libraryUsers.findIndex((u) => user === u)
    if(index > -1) this.libraryUsers.splice(index, 1)
}
Subject.prototype.notify = function(books) {
 
    this.libraryUsers.forEach(user => {
        user.update(books)
    })
}
/**
 *@description implementing a typical Library User object using the observer pattern
 *
 * @class LibraryUser
 * @extends {Observer}
 */
class LibraryUser extends Observer {
    constructor() {
        super()
    }
}
/**
 *@description implementing A typical Library Object using the Observer pattern
 *
 * @class Library
 * @extends {Subject}
 */
class Library extends Subject {
    constructor() {
        super()
        this.bookStore = []
        this.availableBooks, this.rentedBooks = []
    }
    lendBook(book) {

        if(typeof book !== 'object') {
            console.error(`${book} is not a book`)
            return
        }

        this.availableBooks = this.bookStore
        let index = this.bookStore.indexOf(book)
        if(index > -1) {
            this.rentedBooks.unshift(this.availableBooks[index])
            this.availableBooks.splice(index, 1)
        }

        let msg = {
            available: this.availableBooks,
            rented: this.rentedBooks
        }

        this.notify(msg)
    }

    addBook(book) {
        if(typeof book !== 'object') {
            console.error(`${book} is not a book`)
            return
        }
        this.bookStore.push(book)
        this.availableBooks = this.bookStore
    }
}


// let newborrower = new LibraryUser()

// let myLib = new Library()

// let JavaTextBook = new Book("Java", 2, "John Doe")
// let physics = new Book("new school physics", 29, "John Doe")
// let chemistry = new Book("new school chemistry", 24, "John Doe")
// let mathematics = new Book("New General Mathematics", 21, "John Doe")
// let Biology = new Book("Essential Biology", 2776, "John Doe")

// myLib.registerUser(newborrower)

// myLib.addBook(JavaTextBook)
// myLib.addBook(physics)
// myLib.addBook(chemistry)
// myLib.addBook(Biology)


// console.log("Library books");
// console.log("=======================================\n");
// myLib.bookStore.forEach(book => {
//     console.log(book);
// })

// console.log("\n");

// myLib.lendBook(JavaTextBook)
// myLib.lendBook(Biology)

exports.Library = Library
exports.LibraryUser = LibraryUser
exports.Book = Book