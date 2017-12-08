'use strict';

(function(module){
    function Book(obj){
        this.book_id = obj.book_id,
        this.title = obj.title,
        this.author = obj.author,
        this.isbn = obj.isbn,
        this.image_url = obj.imageUrl,
        this.description = obj.description
    }
    
    Book.all = [];

    Book.fetchAll = () => {
        $.get('https://book-app-lj.herokuapp.com/api/v1/books/')
        .done(console.log);
    }

    module.Book = Book;
})(app);

app.Book.fetchAll();