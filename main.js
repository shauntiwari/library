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

// Get DOM elements
const showFormBtn = document.getElementById('showFormBtn');
const inputArea = document.getElementById('inputArea');
const cancelBtn = document.getElementById('cancelBtn');

// Show/hide form
showFormBtn.onclick = () => inputArea.style.display = 'block';
cancelBtn.onclick = () => inputArea.style.display = 'none';

// function for form submission when adding a book
function addBook(e) {
    e.preventDefault();
    
    // Get values from form
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const pages = document.getElementById('pagesInput').value;
    const read = document.getElementById('readInput').checked;
    
    // Add new book
    addBookToLibrary(title, author, pages, read);
    
    // Clear form
    inputArea.reset();
    
    // Hide form
    // inputArea.style.display = 'none';
    
    // Refresh display
    document.getElementById('libraryStart').innerHTML = '';
    displayBooks();
}

// event listener for form submission
inputArea.onsubmit = addBook;


function displayBooks() {
    
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

// Test logic by adding initial books to array, then display the books
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 432, true);
addBookToLibrary("A Game of Thrones", "George R.R. Martin", 835, true);
addBookToLibrary("Life of Pi", "Yann Martel", 460, false);
addBookToLibrary("The Handmaid's Tale", "Margaret Atwood", 311, false);
addBookToLibrary("Animal Farm", "George Orwell", 141, true);
addBookToLibrary("Atlas Shrugged", "Ayn Rand", 1168, false);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 333, true);
addBookToLibrary("Ender's Game", "Orson Scott Card", 324, false);

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