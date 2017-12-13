page('/', (ctx, next) => {
    app.Book.fetchAll(app.bookView.initIndexPage);
});

page('/books/:book_id', app.Book.fetchOne, app.bookView.initDetailPage);

page('/new', app.bookView.initNewPage);

page('/update/:book_id', app.Book.fetchOne, app.bookView.initUpdatePage);

page('/?search=clouds', app.bookView.initSearchResultsPage);

// page('/about', app.aboutView.initAboutPage);

page('*', (ctx, next) => {
    console.log(ctx);
    console.log('Nothing to see here!');
});

page.start();