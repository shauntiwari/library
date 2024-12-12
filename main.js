const myLibrary = [];

function Book(title, author, pages, read){
    //the Book object constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    //add one or more Books to the myLibrary array
    const bookToAdd = new Book(title, author, pages, read);
    myLibrary.push(bookToAdd);
}

function displayBooks(){
    //loops through the myLibrary array and displays each book on the page
    for(let i = 0; i < myLibrary.length; i++){
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";
        
        const bookData = document.createElement("div");
        bookData.className = "bookData";

        const bookButtons = document.createElement("div");
        bookButtons.className = "bookButtons";
        
        const bookDataTitle = document.createElement("h4");
        bookDataTitle.className = "title";
        bookDataTitle.textContent = myLibrary[i].title;

        const bookDataAuthor = document.createElement("p");
        bookDataAuthor.className = "author";
        bookDataAuthor.textContent = myLibrary[i].author;
        
        const bookDataPages = document.createElement("p");
        bookDataPages.className = "pages";
        bookDataPages.textContent = `${myLibrary[i].pages} pages`;

        const bookDataRead = document.createElement("p");
        bookDataRead.className = "readOrNot";
        const readStatus = myLibrary[i].read ? "Read" : "Not Read";
        bookDataRead.textContent = readStatus;
        
        const bookButtonsToggle = document.createElement("button");
        bookButtonsToggle.className = "toggleRead";
        bookButtonsToggle.textContent = "Toggle Un/Read";
        
        const bookButtonsDelete = document.createElement("button");
        bookButtonsDelete.className = "delete";
        bookButtonsDelete.textContent = "Delete";

        // append divs now
        bookData.appendChild(bookDataTitle);
        bookData.appendChild(bookDataAuthor);
        bookData.appendChild(bookDataPages);
        bookData.appendChild(bookDataRead);

        bookButtons.appendChild(bookButtonsToggle);
        bookButtons.appendChild(bookButtonsDelete);

        bookCard.appendChild(bookData);
        bookCard.appendChild(bookButtons);
        bookCard.id = `item ${i}`;
        document.getElementById("libraryStart").appendChild(bookCard);
    }
}

// Test logic by adding some books to array, then display the books
addBookToLibrary('Book1', 'Author1', 200, true);
addBookToLibrary('Book2', 'Author2', 300, false);
addBookToLibrary('Book3', 'Author3', 160, false);
addBookToLibrary('Book4', 'Author4', 240, true);

displayBooks();

// Test for removing an item, logic to be used when creating delete buttons
// document.getElementById('item 2').remove();


function deleteBookFromLibrary(){

}

function toggleReadOrNot() {

}