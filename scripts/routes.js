page('/api/v1/book-app', (ctx, next) => {
    app.Book.fetchAll(app.bookView.initIndexPage);
});

page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage);

// page('/new', app.newView.initNewPage);

page('/about', app.aboutView.initAboutPage);

page('*', (ctx, next) => { 
    console.log(ctx);
    console.log('Nothing to see here!'); 
});
 
page.start();