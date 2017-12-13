'use strict';
var app = app || {};

// const API_URL = 'https://book-app-lj.herokuapp.com/api/v1/books';
const API_URL = 'http://localhost:5000/api/v1/books';

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

    Book.create = newBook => {
        $.post(`${API_URL}`, newBook)
            .then(console.log);
    };

    Book.fetchOne = (ctx, cb) => {
        $.get(`${API_URL}/${ctx.params.book_id}`)
            .then(data => {
                ctx.book = new Book(data[0]);
                cb();
            })
            .fail(console.error);
    };
    Book.fetchAll = (cb) => {
        $.get(`${API_URL}`)
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