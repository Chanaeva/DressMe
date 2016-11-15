$(document).ready(function() {
    $('select').material_select();
    var sizeObj = {};
    $('.cat').change(function() {
        sizeObj.cat = $(this).val();


    });
    $('select.bottomSize').change(function() {
        sizeObj.bottomSize = $(this).val();


    });
    $('select.price').change(function() {
        sizeObj.price = $(this).val();
    });

    var key = "uid2496-36840364-7"
    var search = ["womens-tops", "womens-pants", "mens-shirts", "mens-pants",
        "shoes", "bags"
    ]
    var url = "http://api.shopstyle.com/api/v2/products?pid="

    $('button').click(function() {
        console.log(sizeObj);



        $.get(url + key + "&fts=" + sizeObj.cat + "&offset=0&limit=10", function(productList) {
            console.log(productList);
            // var id = productList.products[0].id
            // $.get("http://api.shopstyle.com/api/v2/products/" + id + "?pid=uid2496-36840364-7", function(product) {
            //     console.log(product);

            // })
        });

    });

});
