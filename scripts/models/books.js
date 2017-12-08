'use strict';

(function(module){
    function Book(obj){
        this.book_id = obj.book_id,
        this.title = obj.title,
        this.author = obj.author,
        this.isbn = obj.isbn,
        this.image_url = obj.imageUrl,
        this.description = obj.description;
    }

    Book.all = [];

    Book.fetchAll = (cb) => {
        $.get('https://book-app-lj.herokuapp.com/api/v1/books/')
            .then(Book.loadAll)
            .then(cb);
    };

    Book.loadAll = (data) => {
        Book.all = data.map(obj => new Book(obj));
    };

    Book.prototype.toHtml = function () {
        const fillTemplate = Handlebars.compile($('#books-template').text());
        return fillTemplate(this);
    };

    module.Book = Book;
})(app);
