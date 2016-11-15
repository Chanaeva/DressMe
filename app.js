$(document).ready(function() {
    $('select').material_select();
    var sizeObj = {};
    $('select.topSize').change(function() {
        sizeObj.topSize = $(this).val();
        console.log(sizeObj);

    });
    $('select.bottomSize').change(function() {
        sizeObj.bottomSize = $(this).val();
        console.log(sizeObj);

    });
    $('select.price').change(function() {
        sizeObj.price = $(this).val();
        console.log(sizeObj);

    });

    var size = $('size').val()

});
