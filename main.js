const myLibrary = [];

function Book(title, author, pages, read){
    //the Book object constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    //add one or more Books to the Library array
    const bookToAdd = new Book(title, author, pages, read);
    myLibrary.push(bookToAdd);
}

function displayBooks(){
    //loops through the myLibrary array and displays each book on the page
    for(let i = 0; i < myLibrary.length; i++){
        const bookDiv = document.createElement("div");
        const readStatus = myLibrary[i].read ? "read" : "unread";
        bookDiv.textContent = `${myLibrary[i].title} | ${myLibrary[i].author} | ${myLibrary[i].pages} pages | ${readStatus}`;
        bookDiv.id = `item ${i}`;
        document.getElementById("libraryStart").appendChild(bookDiv);
    }
}

// Test logic by adding some books to array, then display books
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