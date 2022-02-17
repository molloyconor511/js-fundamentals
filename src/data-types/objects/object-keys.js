// do not edit this section
const book = {
  name: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  category: "Programming",
  isbn: {
    isbn10: "9780132350884",
    isbn13: "978-0132350884",
  },
  publisher: "Prentice Hall",
};

// TODO: write code in this section to pass the tests. You will need to add new code
// as well as modify some of the existing code

// Set this to the book name
const name = book.name;

// Set this to the isbn 10 value
const isbn10 = book.isbn.isbn10;

//Set this to the book category name
const bookCategory = book.category;

//Set this to the book pages number
const bookPages = book.pages;

//Set this to the ISBN 13 value
const isbn13 = book.isbn.isbn13;

// Do not edit this exported object
module.exports = {
  name: name,
  isbn10: isbn10,
  book: book,
};
