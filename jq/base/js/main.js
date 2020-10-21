(function initializeCheckPassword() {
    // found all inputs
    var input$ = $('input');

    // define css classes
    var cssClassValid = 'valid';
    var cssClassInvalid = 'invalid';

    // get password input
    var passwordNode = input$.get(0);

    // get password check input
    var checkPasswordNode = input$.get(1);

    // define input callback
    function handlePasswordInput() {
        var passwordValue = passwordNode.value;
        var checkPasswordValue = checkPasswordNode.value;

        // reset all css classes if one of inputs are empty
        if (!passwordValue || !checkPasswordValue) {
            input$.removeClass(cssClassValid);
            input$.removeClass(cssClassInvalid);
            return;
        }

        // set css valid class if inputs are equals
        if (passwordValue === checkPasswordValue) {
            input$.removeClass(cssClassInvalid);
            input$.addClass(cssClassValid);
            return;
        }

        // set css valid class if inputs are NOT equals
        input$.removeClass(cssClassValid);
        input$.addClass(cssClassInvalid);
    }

    input$.on('input', handlePasswordInput);
})();
