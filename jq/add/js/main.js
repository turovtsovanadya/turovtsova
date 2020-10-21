
(function initializeBootstrap() {
    // add bootstrap's style
    $('head').append('<link rel="stylesheet" href="css/bootstrap.css"/>');
})();

(function initializeTable() {
    // css class for hide element
    var cssClassHidden = 'hidden';

    var buttonTextShowAll = 'Показать все ряды';
    var buttonTextNoHiddenRows = 'Нет скрытых строк';

    // find all rows
    var tr$ = $('tr');
    var showRowsButton$ = $('.show-all');

    function handleHideTableRow() {
        // support - https://caniuse.com/?search=classlist
        this.classList.add(cssClassHidden);

        showRowsButton$.html(buttonTextShowAll);
    }

    // handle hide table's row
    tr$.on('click', handleHideTableRow);

    function showAllRows() {
        tr$.removeClass(cssClassHidden);
        showRowsButton$.html(buttonTextNoHiddenRows);
    }

    showRowsButton$.on('click', showAllRows);
})();
