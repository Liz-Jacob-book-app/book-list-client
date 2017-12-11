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

    bookView.initNewBookPage = () => {
        $('.main section').hide();
        $('#add').parent().show();

        $('#add').on('submit', function() {
            event.preventDefault();
            const newBook = {
                title: this.title.value,
                author: this.author.value,
                isbn: this.isbn.value,
                imageUrl: this.imageUrl.value,
                description: this.description.value
            };
        });
    };
    module.bookView = bookView;
})(app);