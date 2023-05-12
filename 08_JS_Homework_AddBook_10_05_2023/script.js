const library = [];
let inputDate = prompt('Enter book data separate by ";"');
console.log(inputDate);

while (inputDate) {

    // const arr = inputDate.split(';');

    // if ( (arr.length === 4) && (findBook(library, arr[0] === -1))){
    //     const book = new Book(arr[0],arr[1],arr[2],arr[3]);
    //     library.push(book);
    // }

    const [isbn, title, author, year] = inputDate.split(';');
    // if (arr.length !== 4) {
    //     return;
    // };
    if ( inputDate.split(';').length === 4 &&
         isbn &&
         title &&
         author &&
         year &&
         findBook(library, isbn) === -1
        ) {
        const book = new Book(isbn, title, author, year);
        library.push(book);
    }

    inputDate = prompt('Enter book data separate by!! ";"');

}
printLibrary(library);
// 1;2;3;4

function printLibrary(library) {
    // TODO
    for (let i = 0; i < library.length; i++) {
        console.log(library[i].toString());
    }
}

function findBook(library, isbn) {
    // TODO return index of book, if book not exists -1 
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn){
            return i;
        }
        
    }
    return -1;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function() {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}