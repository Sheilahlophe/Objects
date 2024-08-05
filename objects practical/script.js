// Book constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Author constructor function
function Author(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.books = [];
}

// Add addBook method to Author prototype
Author.prototype.addBook = function(book) {
    this.books.push(book);
};

// Create author instances
let author1 = new Author('Sheila', 'Hlophe');
let author2 = new Author('Lwazi', 'Mnotho');

// Create book instances
let book1 = new Book('1994', 'Sheila Hlophe', 1990);
let book2 = new Book('Book of life', 'Sheila Hlophe', 1990);
let book3 = new Book('The true meaning of life', 'Lwazi Mnotho', 1992);

// Add books to authors
author1.addBook(book1);
author1.addBook(book2);
author2.addBook(book3);

// Function to display authors and their books
function displayAuthors(authors) {
    authors.forEach(author => {
        console.log(`Author: ${author.firstName} ${author.lastName}`);
        console.log('Books:');
        author.books.forEach(book => {
            console.log(` - ${book.title} (${book.year})`);
        });
        console.log(''); // Add a blank line for better readability
    });
}

// Create an array of authors
let authors = [author1, author2];

// Display the authors and their books
displayAuthors(authors);
