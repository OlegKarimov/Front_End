const library = [];
const bookData = document.querySelector("#book");
const printLibraryBtn = document.querySelector("#printLibrary"); 
const infoEl = document.querySelector("#info"); 
const booksContainer = document.querySelector(".books");
const formBlock = document.querySelector(".block-form");


const isValidItems = (inputValue) => {
  const arr = inputValue.split(";");
  if (arr.length !== 4) return false;
  
  for (let i = 0; i< arr.length; i++) {
    if (!arr[i].trim()) {
      return false;
    }
  }
  return true;
}


formBlock.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputDate = bookData.value;
  
  if (!isValidItems(inputDate)) {
    infoEl.innerText = "Введены не корректные данные, попробуйте ещё раз 👎";
    infoEl.classList.add("red");
    bookData.value = "";
    return;
  }
  
  const [isbn, title, author, year] = inputDate.split(";");
  
  const book = new Book(isbn, title, author, year);
  addBook(book);
  printLibrary(library);
  
});


function addBook(book) {
  if (findBook(library, book.isbn).length) {
    infoEl.innerText = "Такая книга уже есть";
    infoEl.classList.add("red");
    return false;
  };
  
  library.push(book)
  infoEl.innerText = "Книга добавлена 👍";
  infoEl.classList.remove("red");
  bookData.value = "";
}

function printLibrary(library) {
  if (!library.length) return;
  
  let list = booksContainer.querySelector(".list");
  if (!list) {
    list = document.createElement("ul");
    list.classList = "list row row-cols-1 row-cols-md-4 g-4";
  }
  
  const elements = library.reduce((acc, item) => acc + `
      <li class="col">
        <div class="card h-100">
          <img src="https://placehold.co/600x400" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title text-center">${item.title}</h5>
            <ul class="list-group">
              <li class="list-group-item">ISBN: ${item.isbn}</li>
              <li class="list-group-item">Author: ${item.author}</li>
              <li class="list-group-item">Year of publishing: ${item.year}</li>
            </ul>
          </div>
        </div>
      </li>`, "");
  
  list.innerHTML = elements;
  booksContainer.innerHTML = "";
  let title = booksContainer.querySelector(".books__title");
  if (!title) {
    title = document.createElement("h2");
    title.classList = "text-success text-center fs-2";
    title.innerText = "Список книг";
  }
  booksContainer.append(title);
  booksContainer.append(list);
}

function findBook(library, isbn) {
    return library.filter(item => item.isbn === isbn);
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
