const myLibrary = []; 
let bookEntriesDisplay = document.getElementById("bookEntriesDisplay"); 

function Book(title, genre, pages, read) {
    this.title = title;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, genre, pages, read);
    myLibrary.push(newBook);
    bookGrid();
}

function bookGrid() {
    bookEntriesDisplay.innerHTML = "";
    myLibrary.forEach(book => {
        for (let detail in book) {
            let info = document.createElement("p");
            info.textContent = `${detail}: ${book[detail]}`;
            bookEntriesDisplay.appendChild(info);
        }
    });
}