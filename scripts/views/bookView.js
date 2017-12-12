'use strict';

var app = app || {};

(function (module){
    const bookView = {};

    bookView.initIndexPage = () => {
        $('#updateRecord').hide();
        $('main section').hide();
        $('#books').empty().show();
        console.log(app.Book.all);
        app.Book.all.map(book => $('#books').append(book.toHtml()));
    };

    bookView.initDetailPage = (ctx) => {
        $('#updateRecord').show();
        $('#books').empty().show();
        $('#books').append(ctx.book.toHtml());
        $('button[data-method="updateBook"]').on('click', function(){
            event.preventDefault();
            page(`/update/${ctx.params.book_id}`);
        });
    };

    bookView.initNewPage = (ctx) => {
        event.preventDefault();
        $('main section').hide();
        $('#add').show();

        $('#add').on('submit', function(){
            event.preventDefault();
            console.log('asdfs');
            const newBook = {
                title: $('#title').val(),
                author: $('#author').val(),
                isbn: $('#isbn').val(),
                imageUrl: $('#image_url').val(),
                description: $('#description').val()
            };
            console.log(newBook);
            app.Book.create(newBook);
        });
    };

    bookView.initUpdatePage = (ctx) => {
        $('main section').hide();

        $('#update').show();

        $(`#update input[id='title']`).val(ctx.book.title);
        $(`#update input[id='author']`).val(ctx.book.author);
        $(`#update input[id='isbn']`).val(ctx.book.isbn);
        $(`#update input[id='image_url']`).val(ctx.book.image_url);
        $(`#update textarea[id='description']`).val(ctx.book.description);

        $('#update').on('submit', function(){
            event.preventDefault();
            console.log('asdfasdf');
        });
    };

    module.bookView = bookView;
})(app);