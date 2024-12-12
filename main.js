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
    
    for(let i = 0; i < myLibrary.length; i++){    
        //create all needed elements for each book card along with class names and text within
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";
        bookCard.id = `item ${i}`; //set id for each new book card to be used when deleting
        
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
        bookButtonsToggle.onclick = toggleReadOrNot;
        
        const bookButtonsDelete = document.createElement("button");
        bookButtonsDelete.className = "delete";
        bookButtonsDelete.textContent = "Delete";
        bookButtonsDelete.onclick = deleteBookFromLibrary;

        // append divs now
        bookData.appendChild(bookDataTitle);
        bookData.appendChild(bookDataAuthor);
        bookData.appendChild(bookDataPages);
        bookData.appendChild(bookDataRead);
        bookButtons.appendChild(bookButtonsToggle);
        bookButtons.appendChild(bookButtonsDelete);
        bookCard.appendChild(bookData);
        bookCard.appendChild(bookButtons);
        document.getElementById("libraryStart").appendChild(bookCard);
    }
}

// Test logic by adding some books to array, then display the books
addBookToLibrary('The Return of the King', 'J.R.R. Tolkien', 640, true);
addBookToLibrary('Book1', 'Author1', 200, true);
addBookToLibrary('Book2', 'Author2', 300, false);
addBookToLibrary('Book3', 'Author3', 160, false);
addBookToLibrary('Book4', 'Author4', 240, true);
addBookToLibrary('The Return of the King', 'J.R.R. Tolkien', 640, true);
addBookToLibrary('The Return of the King', 'J.R.R. Tolkien', 640, true);
addBookToLibrary('The Return of the King', 'J.R.R. Tolkien', 640, true);

displayBooks();

function deleteBookFromLibrary() {
    const cardToDelete = this.closest('.bookCard');
    const cardDeleteID = cardToDelete.id;
    const index = parseInt(cardDeleteID.split(' ')[1]);

    myLibrary.splice(index, 1);
    cardToDelete.remove();
}

function toggleReadOrNot() {
    const cardToUpdate = this.closest('.bookCard');
    const cardUpdateID = cardToUpdate.id;
    const index = parseInt(cardUpdateID.split(' ')[1]);
    
    //toggle/flip the boolean in the array
    myLibrary[index].read = !myLibrary[index].read;

    const toggleToUpdate = cardToUpdate.querySelector('.readOrNot');
    toggleToUpdate.textContent = myLibrary[index].read ? "Read" : "Not Read";
}