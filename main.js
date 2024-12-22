class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
        return this.read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, pages, read) {
        const book = new Book(title, author, pages, read);
        this.books.push(book);
        return book;
    }

    deleteBook(index) {
        if (index >= 0 && index < this.books.length) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }

    getBook(index) {
        return (index >= 0 && index < this.books.length) ? this.books[index] : null;
    }

    getAllBooks() {
        return this.books;
    }
}

class LibraryUI {
    constructor(library) {
        this.library = library;
        this.showFormBtn = document.getElementById('showFormBtn');
        this.inputArea = document.getElementById('inputArea');
        this.cancelBtn = document.getElementById('cancelBtn');
        this.libraryContainer = document.getElementById('libraryStart');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Form display controls
        this.showFormBtn.addEventListener('click', () => this.showForm());
        this.cancelBtn.addEventListener('click', () => this.hideForm());
        this.inputArea.addEventListener('submit', (e) => this.handleBookSubmission(e));
    }

    showForm() {
        this.inputArea.style.display = 'block';
    }

    hideForm() {
        this.inputArea.style.display = 'none';
    }

    handleBookSubmission(e) {
        e.preventDefault();
        
        const title = document.getElementById('titleInput').value;
        const author = document.getElementById('authorInput').value;
        const pages = document.getElementById('pagesInput').value;
        const read = document.getElementById('readInput').checked;
        
        this.library.addBook(title, author, pages, read);
        
        this.inputArea.reset();
        this.displayBooks();
    }

    createBookCard(book, index) {
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";
        bookCard.id = `item ${index}`;
        
        const bookData = document.createElement("div");
        bookData.className = "bookData";

        const bookButtons = document.createElement("div");
        bookButtons.className = "bookButtons";
        
        // Book information elements
        const elements = {
            title: this.createElement("h4", "title", book.title),
            author: this.createElement("p", "author", book.author),
            pages: this.createElement("p", "pages", `${book.pages} pages`),
            read: this.createElement("p", "readOrNot", book.read ? "Read" : "Not Read")
        };
        
        // Buttons
        const toggleBtn = this.createElement("button", "toggleRead", "Toggle Un/Read");
        toggleBtn.addEventListener('click', () => this.handleToggleRead(index, elements.read));
        
        const deleteBtn = this.createElement("button", "delete", "Delete");
        deleteBtn.addEventListener('click', () => this.handleDelete(index));
        
        // Append elements
        Object.values(elements).forEach(element => bookData.appendChild(element));
        bookButtons.append(toggleBtn, deleteBtn);
        bookCard.append(bookData, bookButtons);
        
        return bookCard;
    }

    createElement(type, className, textContent) {
        const element = document.createElement(type);
        element.className = className;
        element.textContent = textContent;
        return element;
    }

    handleToggleRead(index, readElement) {
        const book = this.library.getBook(index);
        if (book) {
            book.toggleRead();
            readElement.textContent = book.read ? "Read" : "Not Read";
        }
    }

    handleDelete(index) {
        if (this.library.deleteBook(index)) {
            this.displayBooks();
        }
    }

    displayBooks() {
        this.libraryContainer.innerHTML = '';
        const books = this.library.getAllBooks();
        books.forEach((book, index) => {
            const bookCard = this.createBookCard(book, index);
            this.libraryContainer.appendChild(bookCard);
        });
    }

    addInitialBooks() {
        const initialBooks = [
            ["The Fellowship of the Ring", "J.R.R. Tolkien", 432, true],
            ["A Game of Thrones", "George R.R. Martin", 835, true],
            ["Life of Pi", "Yann Martel", 460, false],
            ["The Handmaid's Tale", "Margaret Atwood", 311, false],
            ["Animal Farm", "George Orwell", 141, true],
            ["Atlas Shrugged", "Ayn Rand", 1168, false],
            ["Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 333, true],
            ["Ender's Game", "Orson Scott Card", 324, false]
        ];

        initialBooks.forEach(([title, author, pages, read]) => {
            this.library.addBook(title, author, pages, read);
        });
        
        this.displayBooks();
    }
}

// Initialize the application
const library = new Library();
const ui = new LibraryUI(library);
ui.addInitialBooks();