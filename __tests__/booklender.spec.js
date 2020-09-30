const {Library, LibraryUser, Book} = require('../booklender')

let myLib
let JavaTextBook = new Book("Java", 2, "John Doe")
let physics = new Book("new school physics", 29, "John Doe")
let chemistry = new Book("new school chemistry", 24, "John Doe")
let mathematics = new Book("New General Mathematics", 21, "John Doe")
let Biology = new Book("Essential Biology", 2776, "John Doe")

let numberOfBooks = undefined
beforeAll(() => {
    myLib = new Library()
})

describe("library system test suite", () => {

    it("user registration test case", () => {
        const user1 = new LibraryUser()
        myLib.registerUser(user1)
        expect(myLib.libraryUsers.length).toBeGreaterThan(0)
    })

    it("adding book(s) to library test case", () => {

        
        myLib.addBook(JavaTextBook)
        myLib.addBook(physics)
        myLib.addBook(chemistry)
        myLib.addBook(mathematics)
        myLib.addBook(Biology)
        numberOfBooks = myLib.bookStore.length

        expect(myLib.availableBooks.length).toBeGreaterThan(0)
        expect(myLib.availableBooks.length).toBeLessThan(6)
    })

    test("lending book(s) to users test case", () => {
        myLib.lendBook(mathematics)
        myLib.lendBook(JavaTextBook)
        expect(myLib.availableBooks.length).toBeLessThan(numberOfBooks)
        expect(myLib.rentedBooks).toContain(JavaTextBook, mathematics)
    })
})

