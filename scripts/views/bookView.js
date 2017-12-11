'use strict';

var app = app || {};

(function (module){
    const bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
        $('#books').empty().show();
        console.log(app.Book.all);
        app.Book.all.map(book => $('#books').append(book.toHtml()));
    };

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#books').empty().show();
        $('#books').append(ctx.book.toHtml());
    };

    bookView.initNewBookPage = (ctx) => {
        $('.main section').show();
        $('#form').hide();
        $('#book-json').on('focus', function(){
            this.select();
        });

        $('#new-form').on('change', 'input, textarea', bookView.create);
        $('#new-form').on('submit', bookView.submit);
    };

    bookView.create = () => {
        let addBook;
        $('#add').empty();

        addBook = new app.Add({
            title: $('#title').val(),
            author: $('#author').val(),
            isbn: $('#isbn').val(),
            imageUrl: $('#image_url').val(),
            description: $('#description').val(),
        });

        $('#add').append(newBook.toHtml());
    };

    bookView.submit = event => {
        event.preventDefault();
        const book = new app.Book({
            title: $('#title').val(),
            author: $('#author').val(),
            isbn: $('#isbn').val(),
            imageUrl: $('#image-url').val(),
            description: $('#desc').val()
        });

        book.insertRecord();

        window.location = '../';
    };

    module.bookView = bookView;
})(app);