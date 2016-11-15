$(document).ready(function() {
    $('select').material_select();
    var sizeObj = {};
    $('select.topSize').change(function() {
        sizeObj.topSize = $(this).val();


    });
    $('select.bottomSize').change(function() {
        sizeObj.bottomSize = $(this).val();


    });
    $('select.price').change(function() {
        sizeObj.price = $(this).val();
        console.log(sizeObj);

    });


    var key = "uid2496-36840364-7"
    var search = ["womens-tops", "womens-pants", "shoes", "bags"]
    var url = "http://api.shopstyle.com/api/v2/products?pid="

    $('button').click(function() {

        var sizeObj = $('select.topSize').val();
        $('select.bottomSize').val()
        $('select.price').val()

        $.get(url + key + "&fts=" + search[0] + "&offset=0&limit=10", function(productList) {
            var id = productList.products[0].id
            $.get("http://api.shopstyle.com/api/v2/products/" + id + "?pid=uid2496-36840364-7", function(product) {
                console.log(product);

            })
        });

    });

});
