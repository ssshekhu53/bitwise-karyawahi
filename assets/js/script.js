$(document).on('submit', 'form#evaluator-form', function(e) {
    e.preventDefault();
    let expression=$(this).find('input[name="expr"]').val();
    if(expression.length!==0)
        $(this).find('input[name="result"]').val(eval(expression));
});

$(document).on('keypress', 'form#evaluator-form input[name="expr"]', function(e) {
    e.preventDefault();
    if(expressionValidator(String.fromCharCode(e.keyCode)))
        e.target.value=e.target.value+String.fromCharCode(e.keyCode);
    else
        e.target.value=e.target.value;
});

$(document).on('keypress', 'form#calculator-form input[name="num[]"]', function(e) {
    e.preventDefault();
    if(valueValidator(String.fromCharCode(e.keyCode)))
        e.target.value=e.target.value+String.fromCharCode(e.keyCode);
    else
        e.target.value=e.target.value;
});

$(document).on('click', 'form#calculator-form #andBtn', function() {
    let num=$('form#calculator-form input[name="num[]"]').map(function() { return $(this).val() });
    if(num[0].length!==0 && num[1].length!==0) 
        $('form#calculator-form input[name="result"]').val(parseInt(num[0])&parseInt(num[1]));
});

$(document).on('click', 'form#calculator-form #orBtn', function() {
    let num=$('form#calculator-form input[name="num[]"]').map(function() { return $(this).val() });
    if(num[0].length!==0 && num[1].length!==0) 
        $('form#calculator-form input[name="result"]').val(parseInt(num[0])|parseInt(num[1]));
});

$(document).on('click', 'form#calculator-form #xorBtn', function() {
    let num=$('form#calculator-form input[name="num[]"]').map(function() { return $(this).val() });
    if(num[0].length!==0 && num[1].length!==0) 
        $('form#calculator-form input[name="result"]').val(parseInt(num[0])^parseInt(num[1]));
});

function expressionValidator(ch) {
    return ((parseInt(ch)>=0 && parseInt(ch)<=9) || ch=='&' || ch=='|' || ch=='^')
}

function valueValidator(ch) {
    return (parseInt(ch)>=0 && parseInt(ch)<=9);
}