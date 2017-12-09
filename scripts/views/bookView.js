'use strict';

var app = app || {};

(function (module){
    const bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
        $('#books').empty().show();
        console.log(app.Book.all);
        app.Book.all.map(book => $('#books').append(book.toHtml()));
    }

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#books').empty().show();
        $('#books').append(ctx.book.toHtml());
    }

    module.bookView = bookView;
})(app);