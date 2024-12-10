const myLibrary = [];

function Book(title, author, pages, read){
    //the Book object constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author){
    //add one or more Books to the Library array
    const bookToAdd = new Book(this.title, this.author);
    myLibrary.push(bookToAdd);
}

function displayBooks(){
    //loops through the myLibrary array and displays each book on the page
    for(bookObj in myLibrary){
        // document.getElementById("container").appendChild(bookObj);
    }
}