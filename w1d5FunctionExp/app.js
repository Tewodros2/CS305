"use strict";

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libraryID: 3245,
    },
];

function findTitles() {
    let titles = [];
    for (let i = 0; i < library.length; i++) {
        titles[i] = library[i].title;
    }
    return titles.sort();
}

function findAuthors() {
    let authores = [];
    for (let i = 0; i < library.length; i++) {
        authores[i] = library[i].author;
    }
    return authores.sort();
}

function findIDs() {
    let ids = [];
    for (let i = 0; i < library.length; i++) {
        ids[i] = library[i].libraryID;
    }
    return ids.sort();
}
function addBook(title, author, libraryID) {
    let book = {};
    book.title = title;
    book.author = author;
    book.libraryID = libraryID;
    library.push(book);

    return book;
}

module.exports = { findAuthors, findIDs, addBook, findTitles };
