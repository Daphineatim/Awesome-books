document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addBook);
})

let books = [];
const addBook = (ev) => {
    ev.preventDefault();
    let book = {
        id: Date.now(),
        title: document.getElementById('book').value,
        author: document.getElementById('author').value,
    }
    books.push(book);
    document.forms[0].reset();

    // storing to the local storage
    localStorage.setItem('BookList', JSON.stringify(books));
}

//for showing the list of books
const list = window.localStorage.getItem('BookList');
const bList = document.getElementsByClassName('bookLists');
function loadContent() {
    bList.innerHTML = '';
    books.forEach((obj) => {
      bList.innerHTML += `<div class="book-container">
                      <div class="book">
                        <h4 class="text-1">"${obj.title}"</h4>
                        <h3 class="text-1">by ${obj.author}</h3>
                      </div>
                      <button type="button" onclick="removeBook(this)" class="btn" data-id="${obj.id}">Remove</button>
                  </div>`;
    });
  }
