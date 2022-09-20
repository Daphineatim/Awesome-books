const booksList = document.querySelector('.books__list');
const addBtn = document.querySelector('#submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const KEY = 'BOOKS_LIST';
let BooksObject = [];

class Books {
  constructor() {
    if (JSON.parse(localStorage.getItem(KEY)) != null) {
      this.BooksObject = JSON.parse(localStorage.getItem(KEY));
    } else {
      this.BooksObject = [];
    }
  }

  add(book, author) {
    this.BooksObject.push({
      id: this.BooksObject.length,
      title: book.value,
      author: author.value,
    });
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BooksObject));
  }

  remove(element) {
    const { id } = element.dataset;
    element.parentElement.remove();
    this.BooksObject.splice(this.BooksObject.findIndex((item) => item.id === parseInt(id, 10)), 1);
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BooksObject));
  }
}
function loadContent() {
  booksList.innerHTML = '';
  BooksObject.forEach((obj) => {
    booksList.innerHTML += `<div class="book-container">
    <div class="text">
    <h4 class="text-1">"${obj.title}" &nbsp</h4>
    <h3 class="text-1">${obj.author}</h3>
    </div>
    <button type="button" onclick="removeBook(this)" class="btn" data-id="${obj.id}">Remove</button>
      </div>
<hr>`;
  });
}
function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem(KEY)) != null) {
    BooksObject = JSON.parse(localStorage.getItem(KEY));
    loadContent();
  }
}
const books = new Books();
function addBook() {
  books.add(book, author);
  checkLocalStorage();
  loadContent();
  book.value = '';
  author.value = '';
  booksList.parentElement.classList.remove('hide');
  author.parentElement.parentElement.classList.add('hide');
}
/* eslint-disable */
function removeBook(element) {
    books.remove(element);
}
/* eslint-enable */
addBtn.addEventListener('click', addBook);
document.addEventListener('DOMContentLoaded', checkLocalStorage);
