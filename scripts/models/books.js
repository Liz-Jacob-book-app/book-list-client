'use strict';
const app = app || {};

const API_URL = 'http://localhost:3000';

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

    Book.fetchOne = (ctx, cb) => {
        $.get(`${API_URL}/api/v1/books/:book_id`)
            .then(data => {
                ctx.book = new Book(data[0]);
                cb();
            })
            .fail(console.error);
    };

    Book.fetchAll = (cb) => {
        $.get(`${API_URL}/api/v1/books/`)
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

//app.Book.fetchAll();