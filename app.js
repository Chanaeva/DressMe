$(document).ready(function() {
    $('select').material_select();
    var sizeObj = {};
    $('.topCat').change(function() {
        sizeObj.topCat = $(this).val();

    });

    $('.bottomCat').change(function() {
        sizeObj.bottomCat = $(this).val();

    });
    $('select.price').change(function() {
        sizeObj.price = $(this).val();
    });

    var key = "uid2496-36840364-7";
    var url = "http://api.shopstyle.com/api/v2/products?pid=";

    $('button').click(function() {
        console.log(sizeObj);



        $.get(url + key + "&fts=" + sizeObj.topCat + sizeObj.bottomCat + "&offset=0&limit=10", function(productList) {
            console.log(productList);
            // var id = productList.products[0].id
            // $.get("http://api.shopstyle.com/api/v2/products/" + id + "?pid=uid2496-36840364-7", function(product) {
            //     console.log(product);

            // })
        });

    });

});
